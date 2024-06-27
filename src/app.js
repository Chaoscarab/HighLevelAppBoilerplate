import * as dotenv from 'dotenv'

import React from 'react'

import SubscribeButton from './app/app'

dotenv.config()

const App = () => {

    const url = process.env.url

    return(
        <SubscribeButton arg={url} />
    )
    
}

export default App