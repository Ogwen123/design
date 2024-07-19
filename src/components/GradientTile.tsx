import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { IconButton } from "@mui/material"
import { Box } from "@mui/system"
import styles from '../exports/styles';

type GradientData = { from: string, to: string }

interface GradientTileProps {
    colour: GradientData,
    name: string
}

const GradientTile = ({ colour, name }: GradientTileProps) => {

    const capitalise = (str: string) => {
        return str[0].toUpperCase() + str.substring(1).toLowerCase()
    }

    const handleCopy = (colour: GradientData) => {
        navigator.clipboard.writeText(colour.from + ", " + colour.to)
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
                        background: `linear-gradient(to right bottom, ${colour.from}, ${colour.to})`,
                        ...styles.colourChip,
                        ...(name === "light" ? styles.similarColourChip : {})
                    }}
                >
                    <IconButton
                        sx={styles.copyButton}
                        onClick={() => handleCopy(colour)}
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
                    <Box sx={styles.colourInfo} >Name: Gradient {capitalise(name)}</Box>
                    <Box sx={styles.colourInfo} >From: {colour.from}</Box>
                    <Box sx={styles.colourInfo} >To: {colour.to}</Box>
                </Box>
            </Box>

        </Box >
    )
}

export default GradientTile