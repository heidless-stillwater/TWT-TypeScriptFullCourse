"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDecision = getDecision;
exports.getHandValue = getHandValue;
exports.shuffleArray = shuffleArray;
exports.getBet = getBet;
exports.getStrHand = getStrHand;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function getDecision() {
    // returns whether the player will hit or stand
}
function getHandValue(cards) {
    // returns the numeric value of a hand
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function getBet(balance) {
    // returns the bet the player is making
}
function getStrHand(hand, hideSecondCard = false) {
    // returns a string representation of the hand
}
