import React from 'react'
import {parser} from './Parser'



const Renderer = ({value}) => {
    const p = parser(value)

    return (
        <div dangerouslySetInnerHTML={{__html: p.map(element => `${element.markUp ? element.markUp : element}`).join("\n")}} />

    )
}

export default Renderer