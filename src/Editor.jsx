import React from "react"


const MakeMetaData = ({data}) => {
    return (
        <>
            <meta property="og:description" content={`이 게시글은 CounterOnline changelog ${data} 패치에 관한 내용을 다루고 있습니다.`} />
            <p>&nbsp;</p>
            
        </>
    
    )
}


const MakeMainCategory = ({data}) => {
    let version = data.match(/setVersion=\"(.+?)\"/m)
    version = version ? version[1] : ""

    const value = data.replace(/setVersion=\"(.+?)\"/m, '')
    return (
        <>
            <p>
                <span style={{fontSize: "28px"}}>
                    <strong>
                        &nbsp; {`${value} ${version} 업데이트`}
                    </strong>
                </span>
            </p>
            <h5>
                <span style={{fontSize: "20px", color:"#999999"}}>
                    <strong>
                        <strike>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        </strike>
                    </strong>
                </span>
            </h5>
        </>
    )
}

const MakeSubCategory = ({data}) => {
    return (
        <h5 style={{fontWeight:800, fontSize:"22px"}}>&nbsp; &nbsp; {data}</h5>
    )
}

const MakeDetailInfo = ({data}) => {
    let color = data.match(/setColor=\"(.+?)\"/m)
    color = color ? color[1] : ""

    let type = data.match(/setType=\"(.+?)\"/m)
    type = type ? type[1] : ""

    const value = data.replace(/setColor=\"(.+?)\"/m, '').replace(/setType=\"(.+?)\"/m, '')
    return (
        <p>
            <span style={{fontSize:"16px", color: color}} >
                <span class={`fas fa-${type}`}>
                    &nbsp;
                </span>
                &nbsp;{value}
            </span>
        </p>
    )
}

const MakeImage = ({data}) => {
    let alt = data.match(/setAlt=\"(.+?)\"/m)
    alt = alt ? alt[1] : ""

    let src = data.match(/setSrc=\"(.+?)\"/m)
    src = src ? src[1] : ""

    return (
        <p>
            <img alt={alt} src={src} style={{marginTop: "3px", borderRadius: "15px"}} width="70%" />
        </p>
    )
}

const MakeBlockQuote = ({data}) => {
    return (
        <blockquote>
            <p>
                <span style={{fontSize:"16px"}}>
                    {data}
                </span>
            </p>
        </blockquote>
    )
}

const MakeTableContent = ({data}) => {
    return (
        <li>
            <span dangerouslySetInnerHTML={{__html: data}} style={{fontSize: "15px"} }/>
        </li>
    )
}
        // .replace(/\/detailinfo\((.+?),\)/g, ReactDOMServer.renderToString(<MakeDetailInfo data={RegExp.$1}/>))
        // .replace(/\/table(([^\n]*\n+)+)\/end/gm, ReactDOMServer.renderToString(<MakeTable data={RegExp.$1}/>))

const MakeFinal = () => {
    return (
        <>
            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p style={{textAlign: "center"}}><span style={{fontSize: "16px"}}><strong>언제나 CounterOnline을 이용해 주셔서 감사합니다.</strong></span></p>

            <p style={{textAlign: "center"}}><strong><span style={{fontSize: "16px"}}>더 쾌적한 게임 환경과&nbsp;좋은 콘텐츠로 보답하겠습니다.</span></strong></p>
        </>
    )
}

export  {
    MakeMetaData,
    MakeMainCategory,
    MakeSubCategory,
    MakeDetailInfo,
    MakeImage,
    MakeBlockQuote,
    MakeTableContent,
    MakeFinal
}