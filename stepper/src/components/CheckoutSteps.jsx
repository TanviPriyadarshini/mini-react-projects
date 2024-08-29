import React, {useEffect, useRef, useState} from 'react'
import { FaCheck } from "react-icons/fa6";

const CheckoutSteps = ({stepsConfig = []}) => {
    const [activeStep, setactiveStep] = useState(1);
    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0
    });

    const steps = useRef([])
    const ActiveComponent = stepsConfig[activeStep-1].Component

    useEffect(() => {
        setMargins({
            marginLeft: steps.current[0].offsetWidth,
            marginRight: (steps.current[stepsConfig.length - 1].offsetWidth)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[steps])

    const calculateWidth = () => {
        return ((activeStep-1)/(stepsConfig.length-1)*100)
    }

    const handleNextClick = () => {
        setactiveStep(prev => prev + 1)
    }
  
  return (
    <div className="relative">
        <div className="flex w-[100%] justify-around">
            {stepsConfig && stepsConfig.map((step, index) => {
            
            return (
                <div 
                    key={index}
                    ref={el => steps.current[index] = el} // ref to the div created
                >

                    <div className="flex flex-col justify-center items-center">
                        {
                            activeStep === (index +1) ? 
                            <div 
                            className=" rounded-full w-[30px] h-[30px] flex justify-center items-center bg-blue-600 z-10"
                            >
                                {index + 1}
                            </div> : 
                                activeStep > (index + 1) ?  
                                    <div 
                                    className="rounded-full w-[30px] h-[30px] flex justify-center items-center bg-green-600 z-10">
                                       <FaCheck/>
                                    </div> : 
                                    <div 
                                    className="bg-[#ccc] rounded-full w-[30px] h-[30px] flex justify-center items-center z-10"
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
        <div 
        className="absolute top-[15%] left-0 h-1 bg-[#ccc]"
        style={{width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`, marginLeft: margins.marginLeft, marginRight: margins.marginRight}}>
            <div className="bg-[#28a745] h-[100%] transition" style={{transition: `0.2s ease`, width: `${calculateWidth()}%`}}></div>
        </div>  
        <ActiveComponent/>
        {activeStep < stepsConfig.length && 
        <button 
        className="p-2 border rounded"
        onClick={handleNextClick}>Next</button>}
    </div>
  )
}

export default CheckoutSteps