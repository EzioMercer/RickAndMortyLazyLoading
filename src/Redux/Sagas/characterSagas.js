import {call, put, takeEvery} from "@redux-saga/core/effects";
import {FETCH_CHARACTER, getCharacter} from "../Actions/characterActions";
import {API_CHARACTER} from "../../enviroments";

export default function* watchFetchCharacter() {
	yield takeEvery(FETCH_CHARACTER, workerFetchCharacter);
}

async function getCharacterInfo(id) {
	let response = await fetch(API_CHARACTER(id));

	if(response.ok) {
		return await response.json();
	} else {
		throw new Error(response.status);
	}
}

function* workerFetchCharacter(action) {
	try {
		const data = yield call(getCharacterInfo, action.payload);
		yield put(getCharacter(data));
	} catch (e) {
		console.log(e);
	}
}