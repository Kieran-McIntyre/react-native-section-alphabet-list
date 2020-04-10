"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sizes_1 = __importDefault(require("../values/sizes"));
var colors_1 = __importDefault(require("../values/colors"));
var styles = {
    container: {
        position: "relative",
    },
    listItemContainer: {
        flex: 1,
        height: sizes_1.default.itemHeight,
        paddingHorizontal: sizes_1.default.spacing.regular,
        justifyContent: "center",
        borderTopColor: colors_1.default.seperatorLine,
        borderTopWidth: 1,
    },
    listItemLabel: {
        color: colors_1.default.text.dark,
        fontSize: 14,
    },
    sectionHeaderContainer: {
        height: sizes_1.default.headerHeight,
        backgroundColor: colors_1.default.background.dark,
        justifyContent: "center",
        paddingHorizontal: sizes_1.default.spacing.regular,
    },
    sectionHeaderLabel: {
        color: colors_1.default.background.light,
    },
};
exports.default = styles;
