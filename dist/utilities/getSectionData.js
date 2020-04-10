"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validLetters_1 = __importDefault(require("./validLetters"));
var getSectionData = function (data) {
    var alphabetEntrySet = getAlphabetEntrySet(data);
    return alphabetEntrySet
        .map(formatEntry)
        .sort(sortSectionsAlphabetically)
        .map(function (section, index) { return (__assign(__assign({}, section), { index: index })); });
};
var getAlphabetEntrySet = function (data) {
    var alphabetSet = {};
    data.forEach(function (item) {
        var letter = getItemFirstLetter(item.value);
        if (!letter) {
            return;
        }
        if (!alphabetSet[letter]) {
            alphabetSet[letter] = [];
        }
        alphabetSet[letter].push(item);
    });
    return Object.entries(alphabetSet);
};
var getItemFirstLetter = function (value) {
    var firstChar = value.substring(0, 1);
    var isValidLetter = validLetters_1.default[firstChar.toLowerCase()];
    if (isValidLetter) {
        return firstChar.toUpperCase();
    }
    return "#";
};
var formatEntry = function (entry) {
    var title = entry[0], unsortedData = entry[1];
    var data = unsortedData.sort(function (a, b) { return alphabeticComparison(a.value, b.value); });
    return { title: title, data: data };
};
var sortSectionsAlphabetically = function (a, b) {
    var charA = a.title;
    var charB = b.title;
    var isBHash = charA !== "#" && charB === "#";
    if (isBHash) {
        return -1;
    }
    var isAHash = charA === "#" && charB !== "#";
    if (isAHash) {
        return 1;
    }
    return alphabeticComparison(charA, charB);
};
var alphabeticComparison = function (a, b) {
    var aCap = a.toUpperCase();
    var bCap = b.toUpperCase();
    if (aCap < bCap) {
        return -1;
    }
    if (aCap > bCap) {
        return 1;
    }
    return 0;
};
exports.default = getSectionData;
