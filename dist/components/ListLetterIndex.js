"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var ListLetterIndexStyle_1 = __importDefault(require("../styles/ListLetterIndexStyle"));
var AlphabetLetterIndex = /** @class */ (function (_super) {
    __extends(AlphabetLetterIndex, _super);
    function AlphabetLetterIndex() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderLetterItem = function (_a) {
            var item = _a.item, index = _a.index;
            var indexLetterColor = _this.props.indexLetterColor;
            var computedLabelStyle = _this.getComputedLabelStyle();
            return (<react_native_1.TouchableOpacity onPress={function () { return _this.props.onPressLetter(index); }}>
        <react_native_1.View style={ListLetterIndexStyle_1.default.letterIndexItem}>
          <react_native_1.Text style={[ListLetterIndexStyle_1.default.letterIndexLabel, computedLabelStyle]}>
            {item.title}
          </react_native_1.Text>
        </react_native_1.View>
      </react_native_1.TouchableOpacity>);
        };
        return _this;
    }
    AlphabetLetterIndex.prototype.getComputedLabelStyle = function () {
        var indexLetterColor = this.props.indexLetterColor;
        if (indexLetterColor) {
            return {
                color: indexLetterColor,
            };
        }
    };
    AlphabetLetterIndex.prototype.render = function () {
        return (<react_native_1.View style={ListLetterIndexStyle_1.default.letterIndexContainer}>
        <react_native_1.FlatList contentContainerStyle={ListLetterIndexStyle_1.default.letterIndexList} data={this.props.sectionData} renderItem={this.renderLetterItem} keyExtractor={function (i) { return i.title; }}/>
      </react_native_1.View>);
    };
    return AlphabetLetterIndex;
}(React.PureComponent));
exports.default = AlphabetLetterIndex;
