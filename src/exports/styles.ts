const tabSelector = {
    width: "51%"
}

const styleBar = {
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
}

const tabBody = {
    flexDirection: "column",
    paddingTop: "20px"
}

const colourInfo = {
    marginTop: "5px"
}

const colourTile = {
    borderRadius: "10px",
    height: "300px",
    overflow: "hidden",
    backgroundColor: "#dedede",
    width: "250px"
}

const colourChip = {
    width: "250px",
    height: "100px",
    display: "flex",
    alignItems: "start",
    justifyContent: "end"
}

const similarColourChip = {
    border: "solid 1px #1976d2",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    width: "249px",
    height: "98px"
}

const copyButton = {
    padding: "0px",
    width: "30px",
    height: "30px",
    margin: "5px"
}

const exampleButton1 = {
    borderRadius: "5px",
    background: "#009788",
    color: "white",
    padding: "10px",
    "&:hover": {
        background: "#00645a",
        color: "white"
    }
}

const codeSnippet = {
    background: "#dedede",
    whiteSpace: "pre-wrap",
    padding: "10px",
    paddingTop: "20px",
    paddingBottom: "20px",
    marginTop: "20px",
    borderRadius: "5px"
}

export default { tabSelector, tabBody, colourInfo, colourTile, similarColourChip, colourChip, copyButton, styleBar, exampleButton1, codeSnippet }