import React, { useState } from 'react'
import usePasswordGenerator from './hooks/usePasswordGenerator';

const App = () => {
  const [characterLength, setCharacterLength] = useState(4);
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Poor");
const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [checkBoxes, setCheckBoxes] = useState([{
      label: "Include uppercase letters",
      isChecked: false
    }, {
      label: "Include lowercase letters",
      isChecked: false
    }, {
      label: "Include numbers",
      isChecked: false
    }, {
      label: "Include special character",
      isChecked: false
  }]);

  const {generatePassword }= usePasswordGenerator()

  const handleSlider = (e) => {
    setCharacterLength(e.target.value)
    setCopiedSuccess(false)
  }

  const handleCheckbox = (position) => {
    setCopiedSuccess(false)
    let updatedCheckboxes = checkBoxes.map((checkbox, index) => {
      if(index === position) {
        return {...checkbox, isChecked: !checkbox.isChecked}
      } else {
        return checkbox
      }
    })
    setCheckBoxes(updatedCheckboxes)
  }


  const handleCopyClick = () => {
    navigator.clipboard.writeText(password)
    setCopiedSuccess(true)
  }

  const handleGeneratePassword = () => {
    setCopiedSuccess(false)
    let {password, errorMsg, optionsSelected} = generatePassword(checkBoxes, characterLength)
    setErr(errorMsg)
    setPassword(password)

    if(characterLength>15 && optionsSelected.length === 4){ 
      setPasswordStrength("Strong")
    }else if(characterLength>9 && optionsSelected.length === 4) {
      setPasswordStrength("Medium")
    }else {
      setPasswordStrength("Poor")
    }
  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <div className="h-96 w-[60%] p-8 bg-[#26262f] text-white rounded ">

        <div className="flex justify-between">
          <h1 className="font-semibold text-lg">{password}</h1>
          <button 
            className="bg-[#409691] rounded px-4 py-2 text-white"
            onClick={() => handleCopyClick()}
          >
          Copy
          </button>
        </div>

        <div className=" my-4 flex justify-between">
          <span className="font-bold text-lg">Character length</span>
          <span>{characterLength}</span>
        </div>

        <input
          className="w-full"
          type="range"
          min="4"
          max="20"
          value={characterLength}
          onChange={(e) => handleSlider(e)}
        />

      <div className="grid grid-cols-2 w-full">
          {checkBoxes.map((checkbox, index) => (
            <div key={index}>
                <input
                  className="mr-4"
                  type="checkbox"
                  checked={checkbox.isChecked}
                  onChange={() => handleCheckbox(index)}
                />
                <label
                className="text-md font-semibold" 
                htmlFor={checkbox.label}>   
                  {checkbox.label}
                </label>
              </div>
          ))}
        </div>

        <div className=" my-8 flex justify-between">
          <span className="text-lg">Strength:</span>
          <span className="font-bold">{passwordStrength}</span>
        </div>

        <button 
          className="bg-[#409691] rounded w-full px-2 py-4 font-extrabold text-2xl"
          onClick={handleGeneratePassword}
        >
        Generate Password
        </button>
      </div>
    {(err !== "") ? <p>An error was detected</p> : null}
    {copiedSuccess && alert("Password copied!")}
    </div>
  )
}

export default App