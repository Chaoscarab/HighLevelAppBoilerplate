import React, {useState, useEffect} from "react";
import config from '../config.js'

const App = () => {
    const [url, setUrl] = useState('')



    useEffect(() => {
        async function fetchUrl() {
            try {
              const res = await fetch(config.url + config.route);
              const data = await res.json();
              console.log(data);
              setUrl(data.url);
            } catch (error) {
              console.error('Error fetching URL:', error);
            }
          }
          
          fetchUrl();
    }, [])

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