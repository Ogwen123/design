export const values = {
    "colours": {
        "info": "Below is an outline of the colours to be used. These include the primary, background and status colours.",
        "primary": {
            "type": "SINGLE",
            "info": "Pick one of the below to be the primary colour for the site. The primary colour should be used to colour components like buttons and forms. The dark version of each colour should be used for things like hover effects.",
            "teal": {
                "main": "#009788",
                "dark": "#00645a"
            },
            "purple": {
                "main": "#4a148c",
                "dark": "#3e1275"
            },
            "orange": {
                "main": "#f57c00",
                "dark": "#d66d02"
            },
            "blue": {
                "main": "#2563eb",
                "dark": "#1b46a6"
            }
        },
        "background": {
            "type": "SINGLE",
            "info": "The backgrund colours that should be used. The highlight colour should be used to seperate distinct sections of the site.",
            "dark": {
                "main": "#22272e",
                "dark": "#1c2128"
            },
            "light": {
                "main": "#f5f5f5",
                "dark": "#dedede"
            }
        },
        "statuses": {
            "type": "SINGLE",
            "info": "The status colours should be used to colour alerts. Also, the warning and danger colours can be used to colour buttons that a user should be careful about pressing.",
            "success": {
                "main": "#27ea60",
                "dark": "#1bab45",
            },
            "warning": {
                "main": "#e67e22",
                "dark": "#ab5e1a"
            },
            "danger": {
                "main": "#c0392b",
                "dark": "#9c2e22"
            }
        },
        "gradients": {
            "type": "GRADIENT",
            "info": "Some good looking gradient options.",
            "0": {
                "from": "#2e3192",
                "to": "#1bffff"
            },
            "1": {
                "from": "#d4145a",
                "to": "#fbb03b"
            },
            "2": {
                "from": "#009245",
                "to": "#fcee21"
            },
            "3": {
                "from": "#662d8c",
                "to": "#ed1e79"
            },
            "4": {
                "from": "#d8b5ff",
                "to": "#1eae98"
            },
            "5": {
                "from": "#a390c6",
                "to": "#197b6d"
            }
        }
    },
    "text": {
        "font": "Roboto"
    },
    "components": {
        "info": "All the text in buttons should be capitalised and either black or white depending on which contrasts better with the background color.",
        "hr": {
            "name": "Horizontal Rule",
            "info": "The horizontal rule is used to separate sections of content. It should be used sparingly and only when necessary.",
            "height": "3px"
        },
        "rounded": {
            "buttons": {
                "css": '.button{| borderRadius: "5px",| background: PRIMARY_COLOUR,| color: "white",| padding: "10px"| }| .button:hover {| background: PRIMARY_COLOUR,| color: "white"| }|'
            }
        },
        "sharp": {
            "buttons": {
                "css": '.button {| background: PRIMARY_COLOUR,| color: "white",| padding: "10px"| }| .button:hover {| background: PRIMARY_COLOUR,| color: "white"| }|'
            }
        }
    }
}
