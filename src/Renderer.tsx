import ReactDOMServer from 'react-dom/server'

export const Renderer = ({ elements }: { elements: JSX.Element[] }) => {
    return <div style={{ marginLeft: "50px" }} dangerouslySetInnerHTML={{ __html: elements.map(ReactDOMServer.renderToStaticMarkup).join("\n") }} />
}