import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import * as React from 'react';



export const MainAccordion = () => {
    return (
        <Accordion allowToggle>
            <MetadataAccordion />
        </Accordion>
    )
}

const AccordionItemBase = ({ name }: { name: string }) => {
    return (
        <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                    {name}
                </Box>
                <AccordionIcon />
            </AccordionButton>
        </h2>
    )

}

const MetadataAccordion = () => {
    return (
        <AccordionItem>
            <AccordionItemBase name="Add Metadata" />
            <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </AccordionPanel>
        </AccordionItem>

    )
}