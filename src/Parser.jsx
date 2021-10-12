import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { MakeMainCategory, MakeMetaData, MakeSubCategory, MakeDetailInfo, MakeBlockQuote, MakeTableContent, MakeImage, MakeFinal} from './Editor'


class MetadataParser{
    constructor(){
        this.size = 0
        this.webhookData = []
        this.processData = {}
        this.category = ""
    }

    reset(){
        this.size = 0
        this.category = ""
        this.processData = {}
    }

    setTitle(name, version){
        if(this.processData?.name){
            this.setCategory("")
            this.webhookData.push(this.processData)
            this.reset()
        }

        this.processData = {
            name: name,
            content: []
        }

        if (version.length != 0){
            this.processData.version = version
        }

    }

    setCategory(category){
        if(this.category.length != 0 && this.processData?.content){
            this.processData.content.push({name:this.category, size: this.size})
            this.size = 0
            this.category = ""
        }
        this.category = category
    }
    
    setContent(){
        this.size += 1
    }

    setFinal(){
        this.setCategory("")
        this.webhookData.push(this.processData)
    }
}

const matchedPush = (resultArray, matched, jsxElement, name, metadataParser) => {
    if (matched){
        const markUp = ReactDOMServer.renderToStaticMarkup(jsxElement({data:matched[1]}))
        if (name === "MakeMainCategory"){
            let version = matched[1].match(/setVersion=\"(.+?)\"/m)
            version = version ? version[1] : ""        
            metadataParser.setTitle(matched[1].replace(/ setVersion=\"(.+?)\"/m, ''), version)
        }
        else if (name === "MakeSubCategory"){
            metadataParser.setCategory(matched[1])
        }
        else if (name === "MakeDetailInfo"){
            metadataParser.setContent()
        }
        resultArray.push({name: name, markUp: markUp})
    }
}

const parser = value => {
    const metadataParser = new MetadataParser()
 
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
            matchedPush(result, matched, MakeMetaData, "MakeMetaData", metadataParser)
        }
        else if (line.startsWith("/title")){
            const matched = line.match(/\/title;(.+?);/m)
            matchedPush(result, matched, MakeMainCategory, "MakeMainCategory", metadataParser)
        }
        else if (line.startsWith("/category")){
            const matched = line.match(/\/category;(.+?);/m)
            matchedPush(result, matched, MakeSubCategory, "MakeSubCategory", metadataParser)
        }
        else if (line.startsWith("/content")){
            const matched = line.match(/\/content;(.+?);/m)
            matchedPush(result, matched, MakeDetailInfo, "MakeDetailInfo", metadataParser)
        }
        else if (line.startsWith("/img")){
            const matched = line.match(/\/img;(.+?);/m)
            matchedPush(result, matched, MakeImage, "MakeImage", metadataParser)
        }
        else if (line.startsWith("/blockcontent")){
            const matched = line.match(/\/blockcontent;(.+?);/m)
            matchedPush(result, matched, MakeBlockQuote, "MakeBlockQuote", metadataParser)
        }
        else if (line.startsWith("/final")){
            metadataParser.setFinal()
            result.push(ReactDOMServer.renderToStaticMarkup(<MakeFinal/>))
            result.unshift(ReactDOMServer.renderToStaticMarkup(<meta property="co:webhook" content={JSON.stringify(metadataParser.webhookData)}/>))
        }
        else if (line.startsWith("/table")){
            isTable = true
            tableElements.push(`<ul>`)   
        }
        else if (line.startsWith("/end")){
            isTable = false
            tableElements.push(`</ul>`)
            result.push(...tableElements)
        }
        else if (isTable){
            tableElements.push(
                ReactDOMServer.renderToStaticMarkup(
                <MakeTableContent 
                    data={line.replaceAll("->", '&rarr;').replace(/~~(.+?)~~/m, '<s>$1</s>')}
                />))
        }    

    })
    
    

    return result

}

export {parser}
