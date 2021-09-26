import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { MakeMainCategory, MakeMetaData, MakeSubCategory, MakeDetailInfo, MakeBlockQuote, MakeTableContent, MakeImage} from './Editor'



const parser = value => {
    const lines = value.split("\n")

    const result = []

    let isTable = false
    let tableElements = []

    lines.forEach(line => {
        if (line.startsWith("/lb")) {
            result.push('<p>&nbsp;</p>')
        }
        else if (line.startsWith("/metadata")){
            const matched = line.match(/\/metadata;(.+?);/m)
            if (matched) {
                result.push(ReactDOMServer.renderToStaticMarkup(<MakeMetaData data={matched[1]}/>))
            }   
        }
        else if (line.startsWith("/title")){
            const matched = line.match(/\/title;(.+?);/m)
            if (matched) {
                result.push(ReactDOMServer.renderToStaticMarkup(<MakeMainCategory data={matched[1]}/>))
            }
        }
        else if (line.startsWith("/category")){
            const matched = line.match(/\/category;(.+?);/m)
            if (matched){
                result.push(ReactDOMServer.renderToStaticMarkup(<MakeSubCategory data={matched[1]}/>))
            }
        }
        else if (line.startsWith("/content")){
            const matched = line.match(/\/content;(.+?);/m)
            if (matched ){

                result.push(ReactDOMServer.renderToStaticMarkup(<MakeDetailInfo data={matched[1]}/>))
            }
        }
        else if (line.startsWith("/img")){
            const matched = line.match(/\/img;(.+?);/m)
            if (matched){
                result.push(ReactDOMServer.renderToStaticMarkup(<MakeImage data={matched[1]}/>))
            }
        }
        else if (line.startsWith("/blockcontent")){
            const matched = line.match(/\/blockcontent;(.+?);/m)
            if (matched){
                result.push(ReactDOMServer.renderToStaticMarkup(<MakeBlockQuote data={matched[1]}/>))
            }
        }
        else if (line.startsWith("/table")){
            isTable = true
            tableElements.push(`<ul>`)   
        }
        else if (line.startsWith("/end")){
            isTable = false
            tableElements.push(`</ul>`)

        }
        else if (isTable){
            tableElements.push(
                ReactDOMServer.renderToStaticMarkup(
                <MakeTableContent 
                    data={line.replaceAll("->", '&rarr;').replace(/~~(.+?)~~/m, '<s>$1</s>')}
                />))
        }    
    })
    result.push(...tableElements)
    result.push(`
<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p style="text-align: center;"><span style="font-size:16px;"><strong>언제나 CounterOnline을 이용해 주셔서 감사합니다.</strong></span></p>

<p style="text-align: center;"><strong><span style="font-size:16px;">더 쾌적한 게임 환경과&nbsp;좋은 콘텐츠로 보답하겠습니다.</span></strong></p>
    `)
    return result

}

export {parser}
