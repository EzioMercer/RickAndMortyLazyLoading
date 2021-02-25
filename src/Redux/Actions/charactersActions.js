export const GET_LIST_OF_CHARACTERS = 'GET_LIST_OF_CHARACTERS';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const COMPLETE_FIRST_DOWNLOAD = 'COMPLETE_FIRST_DOWNLOAD';
export const START_LOADING_CHARACTERS_LIST = 'START_LOADING_CHARACTERS_LIST';
export const STOP_LOADING_CHARACTERS_LIST = 'STOP_LOADING_CHARACTERS_LIST';

export const fetchCharacters = (nextURL) => {
	return {
		type: FETCH_CHARACTERS,
		payload: nextURL
	}
};

export const startLoadingCharactersList = () => ({type: START_LOADING_CHARACTERS_LIST});
export const stopLoadingCharactersList = () => ({type: STOP_LOADING_CHARACTERS_LIST});

export const getListOfCharacters = data => {
	return {
		type: GET_LIST_OF_CHARACTERS,
		payload: data
	}
};