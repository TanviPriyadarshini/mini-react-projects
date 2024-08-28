import { useRef } from "react"

const useCustomEffect = (cb, deps) => {
    const isFirstRender = useRef(true)
    const prevDeps = useRef([])

    // first render
    if(isFirstRender.current) {
        console.log("first render")
        isFirstRender.current = false
        let cleanup = cb()
        return () => {
            if(cleanup && typeof cleanup === "function"){
                cleanup()
            }
        }
    }

    // no deps, deps change
    let depsChanged = deps ? (JSON.stringify(deps) !== JSON.stringify(prevDeps.current)) : true
    if(depsChanged) {
        let cleanup = cb()
        if(cleanup && typeof cleanup === 'function' && deps){
            cleanup()
        }
    }

    //cleanup

    prevDeps.current = deps || []
  
}

export default useCustomEffect