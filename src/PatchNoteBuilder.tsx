import { WebhookMetadataBuilder } from "./WebhookMetadataBuilder";

interface process {
    func: (...args: string[]) => void
    args: string[]
}

function parseMarkdown(inputText: string) {
    return inputText
        // https://davidwells.io/snippets/regex-match-markdown-links
        .replaceAll(/\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+)\)/gm, "<a href=$2>$1</a>")
        .replaceAll(/~~(.+?)~~/gm, '<s>$1</s>')
        .replaceAll(/``(.+?)``/gm, '<code>$1</code>')
}

export class PatchNoteBuilder {
    setElements: React.Dispatch<React.SetStateAction<JSX.Element[]>>
    addElement: (element: JSX.Element) => void
    webhookMedadataBuilder: WebhookMetadataBuilder;
    webhookMetadataBuilderProcess: process[];
    isSetMetadata: boolean;
    isFinalized: boolean;
    constructor(
        setElements: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
        webhookMedadataBuilder: WebhookMetadataBuilder,
    ) {
        this.setElements = setElements
        this.addElement = (element: JSX.Element) => setElements(prevElements => [...prevElements, element])
        this.webhookMedadataBuilder = webhookMedadataBuilder
        this.webhookMetadataBuilderProcess = []
        this.isSetMetadata = false
        this.isFinalized = false

    }

    private __push_dummy_process() {
        this.__push_process(() => { }, [])
    }

    private __push_process(func: (...args: string[]) => void, args: string[]) {
        this.webhookMetadataBuilderProcess.push({
            func: func,
            args: args
        })
    }

    addMetadata(content: string) {
        this.isSetMetadata = true
        this.__push_process(this.webhookMedadataBuilder.addMetadata, [content])
        this.addElement(
            <>
                <meta property="og:description" content={`이 게시글은 CounterOnline changelog ${content} 패치에 관한 내용을 다루고 있습니다.`} />
                <p>&nbsp;</p>

            </>
        )
    }

    addLineBreak() {
        this.__push_dummy_process()
        this.addElement(<p>&nbsp;</p>)
    }

    addTitle(content: string, version: string) {
        this.__push_process(this.webhookMedadataBuilder.setTitle, [content, version])
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
        this.__push_process(this.webhookMedadataBuilder.setCategory, [content])
        this.addElement(<h5 dangerouslySetInnerHTML={{ __html: `&nbsp; &nbsp; ${parseMarkdown(content)}` }} style={{ fontWeight: 800, fontSize: "22px" }} />)
    }

    addContent(type: string, color: string, content: string) {
        this.__push_process(this.webhookMedadataBuilder.setContent, [type, color, content])
        this.addElement(
            < p >
                <span
                    dangerouslySetInnerHTML={{ __html: `<span class="fas fa-${type}">&nbsp;</span>&nbsp;${parseMarkdown(content)}` }}
                    style={{ fontSize: "16px", color: color }}
                />
            </p>
        )
    }

    addDescription(content: string) {
        this.__push_dummy_process()
        this.addElement(
            <p>
                <span dangerouslySetInnerHTML={{ __html: `&nbsp; &nbsp; &nbsp; &nbsp;${parseMarkdown(content)}` }} style={{ fontSize: "13px", color: "#999999" }}>
                </span>
            </p>
        )
    }

    addImage(alt: string, src: string) {
        this.__push_dummy_process()
        this.addElement(
            < p >
                <img alt={alt} src={src} style={{ marginTop: "3px", borderRadius: "15px" }} width="70%" />
            </p >
        )
    }

    addTable(content: string[]) {
        this.__push_dummy_process()
        this.addElement(
            <ul>
                {
                    content.map((content) =>
                        <li>
                            <span dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} style={{ fontSize: "15px" }} />
                        </li>
                    )
                }
            </ul>

        )
    }

    addBlockcontent(content: string) {
        this.__push_dummy_process()
        this.addElement(
            <blockquote>
                <p>
                    <span dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} style={{ fontSize: "16px" }} />
                </p>
            </blockquote>
        )
    }
    addFinal() {
        this.__push_process(this.webhookMedadataBuilder.setFinal, [])
        this.webhookMetadataBuilderProcess.forEach(process => {
            process.func.bind(this.webhookMedadataBuilder)(...process.args)
        }
        )
        this.isFinalized = true
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
