import React, {useState} from 'react'
import { FaCheck } from "react-icons/fa6";

const CheckoutSteps = ({stepsConfig = []}) => {
    const [activeStep, setactiveStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);

    const ActiveComponent = stepsConfig[activeStep-1].Component

    const handleNextClick = () => {
        setactiveStep(prev => prev + 1)
    }
  
  return (
    <>
        <div className="flex w-[100%] justify-around">
        {stepsConfig && stepsConfig.map((step, index) => {
            
            return (
                <div key={index} >
                    <div className="flex flex-col justify-center items-center">
                        {
                            activeStep === (index +1) ? 
                            <div 
                            className=" rounded-full w-[30px] h-[30px] flex justify-center items-center bg-blue-600"
                            >
                                {index + 1}
                            </div> : 
                                isComplete ?  
                                    <div 
                                    className="rounded-full w-[30px] h-[30px] flex justify-center items-center bg-green-600">
                                       <FaCheck/>
                                    </div> : 
                                    <div 
                                    className="bg-[#ccc] rounded-full w-[30px] h-[30px] flex justify-center items-center"
                                    >
                                        {index + 1}
                                    </div>
                            }
                        <p>{step.name}</p>
                    </div>

                </div>
            );
        })}
        </div>
        <ActiveComponent/>
        {activeStep <= stepsConfig.length && <button 
        className="p-2 border rounded"
        onClick={handleNextClick}>Next</button>}
    </>
  )
}

export default CheckoutSteps