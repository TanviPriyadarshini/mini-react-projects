import { useState } from "react";

const usePasswordGenerator = () => {
    // const [password, setPassword] = useState("");
    
    const generatePassword = (checkBoxes, passwordLength) => {
        const optionsSelected = checkBoxes.filter((checkbox) => checkbox.isChecked)
        let charset = ""
        let password = ""
        let errorMsg = ""

        optionsSelected.forEach(option => {
            switch(option.label) {
                case "Include uppercase letters":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    break;
                case "Include lowercase letters": 
                    charset += "abcdefghijklmnopqrstuvwxyz"
                    break
                case "Include numbers": 
                    charset += "1234567890"
                    break
                case "Include special character": 
                    charset += "!@#$%^&*()"
                break
                default:
                    break;
                }
            });
            
        if(charset.length<= 0) {
            errorMsg = "Invalid selection"
        } else {
            for(let i=0; i < passwordLength; i++) {
                let randomLetterIndex = Math.floor(Math.random()*charset.length)
                password += charset[randomLetterIndex]
            }
        }
        


        // setPassword(result)

        return {password, errorMsg, optionsSelected}

    }

    return {generatePassword}   
}

export default usePasswordGenerator