//import React from 'react'

import { Box } from "@mui/system"

import styles from "../exports/styles"

interface CssSnippetProps {
    code: string
}

const CssSnippet = ({ code }: CssSnippetProps) => {
    let tabCount = 0
    return (
        <Box id="code-snippet" sx={styles.codeSnippet}>
            {code.split("|").map((line, index) => {
                if (line.includes("}")) tabCount--
                let tabString = ""
                for (let i = 0; i < tabCount; i++) {
                    tabString += "    "
                }
                if (line.includes("{")) tabCount++

                return (
                    <Box key={index}>{tabString}{line}</Box>
                )
            })}
        </Box>
    )
}

export default CssSnippet