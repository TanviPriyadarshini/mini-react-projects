export const get = async (url) => {

    try {
        let res = await fetch(url)
        let data = await res.json()
        return data
    }catch(e) {
        console.error(e)
    }
   
}

export const post = async (url, body) => {
    
    try {
        let res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        }, 
        body: JSON.stringify(body)
    })

    let data = await res.json()

    return data
}catch(e) {
    console.log(e)
}
}