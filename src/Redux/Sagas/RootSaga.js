import {spawn} from "@redux-saga/core/effects";
import watchFetchCharacters from "./charactersSagas";
import watchFetchCharacter from "./characterSagas";

export default function* rootSaga() {
	yield spawn(watchFetchCharacters);
	yield spawn(watchFetchCharacter);
}