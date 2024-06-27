import React from "react";

const App = () => {
    const [url, setUrl] = useState('')



    useEffect(async() => {
        try{
            let svrRes = await fetch('http://localhost:3000/url')
            setUrl(svrRes.json())
        }catch{
            setUrl('error')
        }
    })

let elements;

if(url === 'error'){
    elements = <div>failed to fetch URL</div>
}else if(url !== ""){
    elements = <a href={url}>
            <button>subscribe</button>
        </a>
}else{
    elements = <div>loading...</div>
}


    return(
        <div>
            {elements}
        </div>
    )
}

export default App