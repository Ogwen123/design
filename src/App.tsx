import React from 'react'

import { ToggleButtonGroup, ToggleButton, Grid } from '@mui/material';
import { Box } from "@mui/system";

import ColourTile from './components/ColourTile';

import styles from './exports/styles';
import { values } from "./exports/values"

//type Values = {
//    [key: string]: Record<string, Record<string, Record<string, Record<string, Record<string, string> | string> | string> | string> | string> // ik its disgusting
//}

type PossibleKeys = "primary" | "background" | "statuses"
type PossibleColours = "teal" | "purple" | "orange"

const App = () => {
    const [selectedTab, setSelectedTab] = React.useState<"rounded" | "sharp">('rounded');
    const [selectedSection, setSelectedSection] = React.useState<"colours" | "components" | "text">("colours")

    const handleStyleChange = (event: React.MouseEvent<HTMLElement>, tab: "rounded" | "sharp") => {
        setSelectedTab(tab);
    }

    const handleSectionChange = (event: React.MouseEvent<HTMLElement>, tab: "colours" | "components" | "text") => {
        setSelectedSection(tab);
    }

    const capitalise = (str: string) => {
        return str[0].toUpperCase() + str.substring(1).toLowerCase()
    }

    return (
        <div style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px"
        }}>
            <Box className="main" sx={{
                width: "90%"
            }}>
                <ToggleButtonGroup
                    id="top-bar-1"
                    color="primary"
                    value={selectedSection}
                    exclusive
                    onChange={handleSectionChange}
                    aria-label="Section"
                    sx={{
                        width: "100%"
                    }}
                >
                    <ToggleButton value="colours" sx={styles.tabSelectorStyle} > Colours </ToggleButton>
                    <ToggleButton value="components" sx={styles.tabSelectorStyle} > Components </ToggleButton>
                    <ToggleButton value="text" sx={styles.tabSelectorStyle} > Text </ToggleButton>
                </ToggleButtonGroup>
                <Box id="tab-body-colours" sx={{ display: (selectedSection === "colours" ? "flex" : "none"), ...styles.tabBody }} >
                    <Box id="colour-info" sx={{ fontSize: "18px" }}>{(values.colours.info) as string}</Box>
                    {
                        Object.keys(values.colours).map((level, index) => {
                            if (level === "info") return
                            return (
                                <Box id="colour-section" key={"colour-section" + index}>
                                    <Box id="colour-info" key={"colour-title" + index} sx={{
                                        fontSize: "20px",
                                        marginTop: "20px"
                                    }}>{capitalise(level)}</Box>
                                    <Box id="colour-info" key={"colour-info" + index} >{values.colours[level as PossibleKeys].info}</Box>
                                    <Grid
                                        container
                                        id="colour-tiles"
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row"
                                        }}
                                    >
                                        {
                                            Object.keys(values.colours[level as PossibleKeys]).map((colour, index) => {
                                                if (colour === "info") return
                                                return (
                                                    <Grid item key={"colour-group-" + colour} sx={{ margin: "20px", marginLeft: "80px" }}><ColourTile colour={values.colours[level as PossibleKeys][colour as PossibleColours]} name={colour} /></Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                </Box>
                            )
                        })
                    }
                </Box>
                <Box id="tab-body-text" sx={{ display: (selectedSection === "text" ? "flex" : "none") }} ></Box>
                <Box id="tab-body-components" sx={{ display: (selectedSection === "components" ? "flex" : "none") }} >
                    <ToggleButtonGroup
                        id="top-bar-2"
                        color="primary"
                        value={selectedTab}
                        exclusive
                        onChange={handleStyleChange}
                        aria-label="Style"
                        sx={{
                            width: "100%"
                        }}
                    >
                        <ToggleButton value="rounded" sx={styles.tabSelectorStyle} >Rounded</ToggleButton>
                        <ToggleButton value="sharp" sx={styles.tabSelectorStyle} >Sharp</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Box>
        </div >
    )
}

export default App
