"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sizes = {
    containerWidth: 10,
    itemHeight: 15,
    itemFontSize: 10,
};
var styles = {
    letterIndexContainer: {
        width: sizes.containerWidth,
        height: "100%",
        position: "absolute",
        top: 0,
        right: 0,
    },
    letterIndexList: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    letterIndexItem: {
        width: sizes.containerWidth,
        height: sizes.itemHeight,
        alignItems: "center",
        justifyContent: "center",
    },
    letterIndexLabel: {
        fontSize: sizes.itemFontSize,
        fontWeight: "bold",
        color: "grey",
    },
};
exports.default = styles;
