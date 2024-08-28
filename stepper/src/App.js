import React, {useState} from 'react'
import CheckoutSteps from './components/CheckoutSteps'

const App = () => {
  const config = [
    {
    name: "Customer Info",
    Component: () => <>Enter your info </>,
    },
    {
      name: "Shipping Info",
      Component: () => <>Enter your shipping info </>,
    },
    {
      name: "Payment",
      Component: () => <>Enter your card info </>,
    },
    {
      name: "Delivered",
      Component: () => <> Delivered </>,
    }
  ]

  return (
    <div className="w-[100%] m-2">
      <h1 className="text-2xl font-sans m-4">Checkout Page</h1>
      <CheckoutSteps stepsConfig={config}/>
    </div>
  )
}

export default App