export const GET_CHARACTER = 'GET_CHARACTER';
export const FETCH_CHARACTER = 'FETCH_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';

export const fetchCharacter = (id) => {
	return {
		type: FETCH_CHARACTER,
		payload: id
	}
};

export const deleteCharacterData = ()=> ({type: DELETE_CHARACTER});

export const getCharacter = data => {
	return {
		type: GET_CHARACTER,
		payload: data
	}
};