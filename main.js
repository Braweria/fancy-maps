const { create, update, setState } = require("./app/index");
const { downloadImage, getMapUrl, getDimensions } = require("./app/utils");
const { error } = require("./xd-utils/index");

let panel;

function applyMap(state){
    const { ImageFill } = require("scenegraph");

    require("application").editDocument(async (selection) => {
        const node = selection.items[0];
        const {width, height} = getDimensions(node);
        const url = getMapUrl({...state, width, height});

        setState("loading", true);
        try {
            const tempFile = await downloadImage(url);

            const imageFill = new ImageFill(tempFile);
            node.fill = imageFill;
            node.fillEnabled = true;
            setState("loading", false);
        } catch (errMsg) {
            setState({loading: false, error: errMsg});
            console.log(errMsg);
            await error("Error", errMsg);
            return;
        }
    });
}

function show(event) {
    if (!panel) {
        panel = create({
            onApply: applyMap
        });
        event.node.appendChild(panel);
    }
}

module.exports = {
    panels: {
        enlargeRectangle: {
            show,
            update: () => {
                const { selection } = require("scenegraph");
                update(selection);
            }
        }
    }
};
