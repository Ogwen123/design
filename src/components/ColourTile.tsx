import React from 'react'

import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { IconButton } from "@mui/material"
import { Box } from "@mui/system"
import styles from '../exports/styles';

interface ColourTileProps {
    colour: { main: string, dark: string },
    name: string
}

const ColourTile = ({ colour, name }: ColourTileProps) => {

    const hexToRGB = (hex: string) => {
        hex = hex.replace("#", "")
        if (hex.length !== 6) return hex
        const red = parseInt(hex.substring(0, 2), 16)
        const green = parseInt(hex.substring(2, 4), 16)
        const blue = parseInt(hex.substring(4, 6), 16)
        return `rgb(${red.toString()}, ${green.toString()}, ${blue.toString()})`
    }

    const capitalise = (str: string) => {
        return str[0].toUpperCase() + str.substring(1).toLowerCase()
    }

    const handleCopy = (event: React.MouseEvent<HTMLButtonElement>, hex: string) => {
        event = event
        navigator.clipboard.writeText(hex)
        alert("Copied text to clipboard!")
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
        }}>
            <Box id="tile" sx={styles.colourTile}>
                <Box
                    id="colour"
                    sx={{
                        backgroundColor: colour.main,
                        ...styles.colourChip,
                        ...(name === "light" ? styles.similarColourChip : {})
                    }}
                >
                    <IconButton
                        sx={styles.copyButton}
                        onClick={(e) => handleCopy(e, colour.main)}
                    >
                        <ContentCopyOutlinedIcon sx={{ color: (name === "light" ? "black" : "#dedede") }} />
                    </IconButton>
                </Box>
                <Box
                    id="info"
                    sx={{
                        height: "200px",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Box sx={styles.colourInfo} >Name: {capitalise(name) + ".Main"}</Box>
                    <Box sx={styles.colourInfo} >HEX: {colour.main}</Box>
                    <Box sx={styles.colourInfo} >RGB: {hexToRGB(colour.main)}</Box>
                </Box>
            </Box>

            <Box id="tile" sx={{ marginLeft: "100px", ...styles.colourTile }}>
                <Box
                    id="colour"
                    sx={{
                        backgroundColor: colour.dark,
                        ...styles.colourChip,
                        ...(name === "light" ? styles.similarColourChip : {})
                    }}>
                    <IconButton
                        sx={styles.copyButton}
                        onClick={(e) => handleCopy(e, colour.main)}
                    >
                        <ContentCopyOutlinedIcon sx={{ color: (name === "light" ? "black" : "#dedede") }} />
                    </IconButton>
                </Box>
                <Box
                    id="info"
                    sx={{
                        height: "200px",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Box sx={styles.colourInfo} >Name: {capitalise(name) + ".Dark"}</Box>
                    <Box sx={styles.colourInfo} >HEX: {colour.dark}</Box>
                    <Box sx={styles.colourInfo} >RGB: {hexToRGB(colour.dark)}</Box>
                </Box>
            </Box>
        </Box >
    )
}

export default ColourTile