import { WebhookMetadataBuilder } from "./WebhookMetadataBuilder";

interface process {
    func: (...args: string[]) => void
    args: string[]
}

// https://stackoverflow.com/a/3890175
function linkify(inputText: string) {
    //URLs starting with http://, https://, or ftp://
    const replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#%?=~_|!:,.;/]*[-A-Z0-9+&@#%=~_|/])/gim;
    const execed = replacePattern1.exec(inputText)
    return execed ? <a href={execed[0]}>{execed[0]}</a> : inputText
}

export class PatchNoteBuilder {
    setElements: React.Dispatch<React.SetStateAction<JSX.Element[]>>
    setIsFinalized: React.Dispatch<React.SetStateAction<boolean>>;
    addElement: (element: JSX.Element) => void
    webhookMedadataBuilder: WebhookMetadataBuilder;
    webhookMetadataBuilderProcess: process[];
    constructor(
        setElements: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
        setIsFinalized: React.Dispatch<React.SetStateAction<boolean>>,
        webhookMedadataBuilder: WebhookMetadataBuilder,
    ) {
        this.setElements = setElements
        this.setIsFinalized = setIsFinalized
        this.addElement = (element: JSX.Element) => setElements(prevElements => [...prevElements, element])
        this.webhookMedadataBuilder = webhookMedadataBuilder
        this.webhookMetadataBuilderProcess = []

    }

    addMetadata(content: string) {
        this.webhookMetadataBuilderProcess.push({
            func: this.webhookMedadataBuilder.addMetadata,
            args: [content]
        })
        this.addElement(
            <>
                <meta property="og:description" content={`이 게시글은 CounterOnline changelog ${content} 패치에 관한 내용을 다루고 있습니다.`} />
                <p>&nbsp;</p>

            </>
        )
    }

    addLineBreak() {
        this.addElement(<p>&nbsp;</p>)
    }

    addTitle(content: string, version: string) {
        this.webhookMetadataBuilderProcess.push({
            func: this.webhookMedadataBuilder.setTitle,
            args: [content, version]
        })
        this.addElement(
            <>
                <p>
                    <span style={{ fontSize: "28px" }}>
                        <strong>
                            &nbsp; {`${content} ${version} 업데이트`}
                        </strong>
                    </span>
                </p>
                <h5>
                    <span style={{ fontSize: "20px", color: "#999999" }}>
                        <strong>
                            {/* @ts-ignore*/}
                            <strike>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                {/* @ts-ignore*/}
                            </strike>
                        </strong>
                    </span>
                </h5>
            </>

        )
    }

    addCategory(content: string) {
        this.webhookMetadataBuilderProcess.push({
            func: this.webhookMedadataBuilder.setCategory,
            args: [content]
        })
        this.addElement(<h5 style={{ fontWeight: 800, fontSize: "22px" }}>&nbsp; &nbsp; {content}</h5>)
    }

    addContent(type: string, color: string, content: string) {
        this.webhookMetadataBuilderProcess.push({
            func: this.webhookMedadataBuilder.setContent,
            args: [type, color, content]
        })
        this.addElement(
            < p >
                <span style={{ fontSize: "16px", color: color }} >
                    {/* @ts-ignore*/}
                    <span class={`fas fa-${type}`}>
                        &nbsp;
                    </span>
                    &nbsp; {content}
                </span>
            </p >
        )
    }

    addDescription(content: string) {
        this.addElement(
            <p>
                <span style={{ fontSize: "13px" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; {linkify(content)}
                </span>
            </p>
        )
    }

    addImage(alt: string, src: string) {
        this.addElement(
            < p >
                <img alt={alt} src={src} style={{ marginTop: "3px", borderRadius: "15px" }} width="70%" />
            </p >
        )
    }

    addTable(content: string[]) {
        this.addElement(
            <ul>
                {content.map((content) => <li><span style={{ fontSize: "15px" }}>{content.replaceAll("->", '&rarr;').replace(/~~(.+?)~~/m, '<s>$1</s>')}</span></li>)}
            </ul>

        )
    }

    addBlockcontent(content: string) {
        this.addElement(
            <blockquote>
                <p>
                    <span style={{ fontSize: "16px" }}>
                        {content}
                    </span>
                </p>
            </blockquote>
        )
    }
    addFinal() {
        this.webhookMetadataBuilderProcess.push({
            func: this.webhookMedadataBuilder.setFinal,
            args: []
        })
        this.webhookMetadataBuilderProcess.forEach(process => {
            process.func.bind(this.webhookMedadataBuilder)(...process.args)
        }
        )
        this.setIsFinalized(true)
        this.setElements(elements => [<meta property="co:webhook" content={JSON.stringify(this.webhookMedadataBuilder.webhookData)} />, ...elements])
        this.addElement(
            <>
                <p>&nbsp;</p>

                <p>&nbsp;</p>

                <p>&nbsp;</p>

                <p>&nbsp;</p>

                <p>&nbsp;</p>

                <p>&nbsp;</p>

                <p>&nbsp;</p>

                <p style={{ textAlign: "center" }}><span style={{ fontSize: "16px" }}><strong>언제나 CounterOnline을 이용해 주셔서 감사합니다.</strong></span></p>

                <p style={{ textAlign: "center" }}><strong><span style={{ fontSize: "16px" }}>더 쾌적한 게임 환경과&nbsp;좋은 콘텐츠로 보답하겠습니다.</span></strong></p>
            </>
        )
    }
}
