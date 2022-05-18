import ReactDOMServer from 'react-dom/server'

export const Renderer = ({ elements }: { elements: JSX.Element[] }) => {
    return <div dangerouslySetInnerHTML={{ __html: elements.map(ReactDOMServer.renderToStaticMarkup).join("\n") }} />
}