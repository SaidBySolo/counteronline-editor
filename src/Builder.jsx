import React from "react"
import {
    Flex,
    Input,
} from "@chakra-ui/react"


const MetadataBuilder = () => {
    return (
        <Input placeholder='Metadata' />
    )
}

const TitleBuilder = () => {
    return null
}

const CategoryBuilder = () => {
    return null
}

const ImgBuilder = () => {
    return null
}

const BlockContentBuilder = () => {
    return null
}

const TableBuilder = () => {
    return null
}

const BuilderMain = () => {
    return (
        <Flex flexDirection="row">
            <Input placeholder='Metadata' />
        </Flex>
    )
}

export default BuilderMain