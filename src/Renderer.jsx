import React from 'react'
import { MakeMainCategory, MakeMetaData, MakeSubCategory} from './Editor'
import ReactDOMServer from 'react-dom/server'
import {parser} from './Parser'



const Renderer = ({value}) => {
    const p = parser(value)

    // .replace(/\/metadata\((.+?)\)/g, ReactDOMServer.renderToString(<MakeMetaData data={RegExp.$1}/>))
    // .replace(/\/maincategory\((.+?)\)/g, ReactDOMServer.renderToString(<MakeMainCategory data={RegExp.$1}/>))
    // .replace(/\/subcategory\((.+?)\)/g, ReactDOMServer.renderToString(<MakeSubCategory data={RegExp.$1}/>))
    // .replace(/\/detailinfo\((.+?),\)/g, ReactDOMServer.renderToString(<MakeDetailInfo data={RegExp.$1}/>))
    // .replace(/\/table(([^\n]*\n+)+)\/end/gm, ReactDOMServer.renderToString(<MakeTable data={RegExp.$1}/>))
    return (
        <div dangerouslySetInnerHTML={{__html: p.join("\n")}} />

    )
}

export default Renderer