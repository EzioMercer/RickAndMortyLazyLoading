import {
	COMPLETE_FIRST_DOWNLOAD,
	GET_LIST_OF_CHARACTERS,
	START_LOADING_CHARACTERS_LIST, STOP_LOADING_CHARACTERS_LIST
} from "../Actions/charactersActions";

const INITIAL_STATE = {
	info: {
		count: 0,
		pages: 0,
		next: null,
		prev: null
	},
	results: [],
	is_loading: false
};

export default function charactersReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_LIST_OF_CHARACTERS:
			return {
				...state,
				info: {...action.payload.info},
				results: [...state.results, ...action.payload.results],
				lastURL: action.payload.lastURL
			};
		case COMPLETE_FIRST_DOWNLOAD:
			return {
				...state,
				firstDownloadComplete: true
			};

		case START_LOADING_CHARACTERS_LIST:
			return {
				...state,
				is_loading: true
			};

		case STOP_LOADING_CHARACTERS_LIST:
			console.log('END');
			return {
				...state,
				is_loading: false
			};
		default:
			return state;
	}
}