import React from 'react'

import { ToggleButtonGroup, ToggleButton, Grid, Button } from '@mui/material';
import { Box } from "@mui/system";

import ColourTile from './components/ColourTile';

import styles from './exports/styles';
import { values } from "./exports/values"
import CssSnippet from './components/CssSnippet';
import GradientTile from './components/GradientTile';

//type Values = {
//    [key: string]: Record<string, Record<string, Record<string, Record<string, Record<string, string> | string> | string> | string> | string> // ik its disgusting
//}

type PossibleKeys = "primary" | "background" | "statuses"
type PossibleColoursPrimary = "teal" | "purple" | "orange"
type PossibleColoursBG = "dark" | "light"
type PossibleColoursStatus = "success" | "warning" | "danger"
type PossibleColoursGradient = "0" | "1" | "2" | "3" | "4"

const App = () => {
    const [selectedStyle, setselectedStyle] = React.useState<"rounded" | "sharp">('rounded');
    const [selectedSection, setSelectedSection] = React.useState<"colours" | "components" | "text">("colours")

    const [enabled, setEnabled] = React.useState<boolean>(true)

    React.useEffect(() => {
        let url
        if (location.href.includes("localhost") || location.href.includes("127.0.0.1")) {
            url = "http://localhost:3002/api/services/check"
        } else {
            url = "https://admin-api.owen-services.eu.org/api/services/check"
        }

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: "ed487b60-2fba-496e-8163-26e0299ecb52"
            })
        }).then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    if (data.data.enabled !== undefined) {
                        setEnabled(data.data.enabled)
                    }
                })
            }
        })
    }, [])

    const handleStyleChange = (event: React.MouseEvent<HTMLElement>, tab: "rounded" | "sharp") => {
        event = event
        setselectedStyle(tab);
    }

    const handleSectionChange = (event: React.MouseEvent<HTMLElement>, tab: "colours" | "components" | "text") => {
        event = event
        setSelectedSection(tab);
    }

    const capitalise = (str: string) => {
        return str[0].toUpperCase() + str.substring(1).toLowerCase()
    }
    const sectionBarDynamicStyle = {
        borderBottomLeftRadius: (selectedSection === "components" ? "0px" : ""),
        borderBottomRightRadius: (selectedSection === "components" ? "0px" : ""),
    }

    return (
        <div style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px"
        }}>
            {
                enabled ?
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
                            sx={{ width: "100%" }}
                        >
                            <ToggleButton value="colours" sx={{
                                ...sectionBarDynamicStyle,
                                ...styles.tabSelector
                            }}
                            > Colours </ToggleButton>
                            <ToggleButton value="components" sx={{
                                ...sectionBarDynamicStyle,
                                ...styles.tabSelector
                            }}
                            > Components </ToggleButton>
                            <ToggleButton value="text" sx={{
                                ...sectionBarDynamicStyle,
                                ...styles.tabSelector
                            }}
                            > Text </ToggleButton>
                        </ToggleButtonGroup>
                        <Box id="tab-body-colours" sx={{ display: (selectedSection === "colours" ? "flex" : "none"), ...styles.tabBody }} >
                            <Box
                                id="colour-info"
                                sx={{
                                    fontSize: "25px",
                                    display: "flex",
                                    justifyContent: "center",
                                    textDecoration: "underline"
                                }}>
                                Make sure you turn off any dark mode exentions to see the colours properly.
                            </Box>
                            <Box id="colour-info" sx={{ fontSize: "18px" }}>{(values.colours.info) as string}</Box>
                            <Box id="colour-section-primary" key={"colour-section" + 0}>
                                <Box id="colour-info" key={"colour-title" + 0} sx={{
                                    fontSize: "20px",
                                    marginTop: "20px"
                                }}>{capitalise("primary")}</Box>
                                <Box id="colour-info" key={"colour-info" + 0} >{values.colours.primary.info}</Box>
                                <Grid
                                    container
                                    id="colour-tiles"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row"
                                    }}
                                >
                                    {
                                        Object.keys(values.colours.primary).map((colour, index) => {
                                            if (colour === "info" || colour === "type") return
                                            const colourGroup = values.colours.primary
                                            return (
                                                <Grid item key={"colour-group-" + index} sx={{ margin: "20px", marginLeft: "80px" }}>
                                                    <ColourTile colour={colourGroup[colour as PossibleColoursPrimary]} name={colour} />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Box>



                            <Box id="colour-section-background" key={"colour-section" + 1}>
                                <Box id="colour-info" key={"colour-title" + 1} sx={{
                                    fontSize: "20px",
                                    marginTop: "20px"
                                }}>{capitalise("background")}</Box>
                                <Box id="colour-info" key={"colour-info" + 1} >{values.colours.background.info}</Box>
                                <Grid
                                    container
                                    id="colour-tiles"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row"
                                    }}
                                >
                                    {
                                        Object.keys(values.colours["background" as PossibleKeys]).map((colour, index) => {
                                            if (colour === "info" || colour === "type") return
                                            const colourGroup = values.colours.background
                                            return (
                                                <Grid item key={"colour-group-" + index} sx={{ margin: "20px", marginLeft: "80px" }}>
                                                    <ColourTile colour={colourGroup[colour as PossibleColoursBG]} name={colour} />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Box>



                            <Box id="colour-section-statuses" key={"colour-section" + 2}>
                                <Box id="colour-info" key={"colour-title" + 2} sx={{
                                    fontSize: "20px",
                                    marginTop: "20px"
                                }}>{capitalise("statuses")}</Box>
                                <Box id="colour-info" key={"colour-info" + 2} >{values.colours.statuses.info}</Box>
                                <Grid
                                    container
                                    id="colour-tiles"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row"
                                    }}
                                >
                                    {
                                        Object.keys(values.colours["statuses" as PossibleKeys]).map((colour, index) => {
                                            if (colour === "info" || colour === "type") return
                                            const colourGroup = values.colours.statuses
                                            return (
                                                <Grid item key={"colour-group-" + index} sx={{ margin: "20px", marginLeft: "80px" }}>
                                                    <ColourTile colour={colourGroup[colour as PossibleColoursStatus]} name={colour} />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Box>


                            <Box id="colour-section-gradients" key={"colour-section" + 3}>
                                <Box id="colour-info" key={"colour-title" + 2} sx={{
                                    fontSize: "20px",
                                    marginTop: "20px"
                                }}>{capitalise("gradients")}</Box>
                                <Box id="colour-info" key={"colour-info" + 2} >{values.colours.gradients.info}</Box>
                                <Grid
                                    container
                                    id="colour-tiles"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row"
                                    }}
                                >
                                    {
                                        Object.keys(values.colours["gradients" as PossibleKeys]).map((colour, index) => {
                                            if (colour === "info" || colour === "type") return
                                            const colourGroup = values.colours.gradients
                                            return (
                                                <Grid item key={"colour-group-" + index} sx={{ margin: "20px", marginLeft: "80px" }}>
                                                    <GradientTile colour={colourGroup[colour as PossibleColoursGradient]} name={colour} />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Box>
                        </Box>




                        <Box id="tab-body-text" sx={{ display: (selectedSection === "text" ? "flex" : "none") }} ></Box>




                        <Box id="tab-body-components" sx={{ display: (selectedSection === "components" ? "flex" : "none"), ...styles.tabBody, paddingTop: "0" }} >
                            <ToggleButtonGroup
                                id="top-bar-2"
                                color="primary"
                                value={selectedStyle}
                                exclusive
                                onChange={handleStyleChange}
                                aria-label="Style"
                                sx={{
                                    width: "100%"
                                }}
                            >
                                <ToggleButton value="rounded" sx={{ ...styles.tabSelector, ...styles.styleBar }} >Rounded</ToggleButton>
                                <ToggleButton value="sharp" sx={{ ...styles.tabSelector, ...styles.styleBar }} >Sharp</ToggleButton>
                            </ToggleButtonGroup>
                            <Box id="tab-body-components-rounded" sx={{ display: (selectedStyle === "rounded" ? "flex" : "none"), ...styles.tabBody }}>
                                <Box id="components-rounded-section">
                                    <Box sx={{
                                        fontSize: "25px"
                                    }}>Buttons</Box>
                                    <Box>
                                        <ul>
                                            <li>Border radius: 5px</li>
                                            <li>Padding should be {">"}10px</li>
                                        </ul>
                                        <Button sx={styles.exampleButton1}>Example</Button>
                                        <CssSnippet code={values.components.rounded.buttons.css}></CssSnippet>
                                    </Box>
                                </Box>
                            </Box>
                            <Box id="tab-body-components-sharp" sx={{ display: (selectedStyle === "sharp" ? "flex" : "none"), ...styles.tabBody }}>
                                <Box id="components-sharp-section">
                                    <Box sx={{
                                        fontSize: "25px"
                                    }}>Buttons</Box>
                                    <Box>
                                        <ul>
                                            <li>Border radius: 0px</li>
                                            <li>Padding should be {">"}10px</li>
                                        </ul>
                                        <Button sx={styles.exampleButton1}>Example</Button>
                                        <CssSnippet code={values.components.sharp.buttons.css}></CssSnippet>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    :
                    <div style={{
                        fontSize: "30px",
                    }}>This site has been disabled by an administrator.</div>
            }
        </div >
    )
}

export default App
