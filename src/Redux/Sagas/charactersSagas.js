import {call, put, takeEvery} from "@redux-saga/core/effects";
import {FETCH_CHARACTERS, getListOfCharacters, stopLoadingCharactersList} from "../Actions/charactersActions";
import {API_CHARACTERS} from "../../enviroments";

export default function* watchFetchCharacters() {
	yield takeEvery(FETCH_CHARACTERS, workerFetchCharacters);
}

async function getCharactersList(url) {
	let response = await fetch(url || API_CHARACTERS);

	if(response.ok) {
		return await response.json();
	} else {
		throw new Error(response.status);
	}
}

function* workerFetchCharacters(action) {
	try {
		const data = yield call(getCharactersList, action.payload);
		yield put(getListOfCharacters({...data, lastURL: action.payload}));
		yield put(stopLoadingCharactersList());
	} catch (e) {
		console.log(e);
	}
}