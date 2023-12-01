import React from 'react'

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from "@mui/system/Box";

import { tabSelectorStyle } from './exports/styles';

const App = () => {
    const [selectedTab, setSelectedTab] = React.useState<"rounded" | "sharp">('rounded');
    const [selectedSection, setSelectedSection] = React.useState<"colours" | "buttons" | "text">("colours")

    const handleChange = (event: React.MouseEvent<HTMLElement>, tab: "rounded" | "sharp") => {
        setSelectedTab(tab);
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
                    value={selectedTab}
                    exclusive
                    onChange={handleChange}
                    aria-label="Style"
                    sx={{
                        width: "100%"
                    }}
                >
                    <ToggleButton value="rounded" sx={tabSelectorStyle} >Rounded</ToggleButton>
                    <ToggleButton value="sharp" sx={tabSelectorStyle} >Sharp</ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup
                    id="top-bar-2"
                    color="primary"
                    value={selectedTab}
                    exclusive
                    onChange={handleChange}
                    aria-label="Section"
                    sx={{
                        width: "100%"
                    }}
                >
                    <ToggleButton value="colours" sx={tabSelectorStyle} >Colours</ToggleButton>
                    <ToggleButton value="buttons" sx={tabSelectorStyle} >Buttons</ToggleButton>
                    <ToggleButton value="text" sx={tabSelectorStyle} >Text</ToggleButton>
                </ToggleButtonGroup>
                <Box id="tab-body-colours"></Box>
            </Box>
        </div>
    )
}

export default App
