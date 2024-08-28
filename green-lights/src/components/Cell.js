const Cell = ({onClick, isGreen}) => {
//   const [isGreen, setIsGreen] = useState(false);
  return (
    <div 
        className="border border-black" 
        style={{backgroundColor: `${isGreen ? "green": "transparent"}`}}
        onClick={() => {
            onClick()
        }}
    />
  )
}

export default Cell