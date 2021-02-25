import {DELETE_CHARACTER, GET_CHARACTER} from "../Actions/characterActions";

const INITIAL_STATE = {
	id: 0,
	name: '',
	status: '',
	species: '',
	type: '',
	gender: '',
	origin: {
		name: '',
		url: ''
	},
	location: {
		name: '',
		url: ''
	},
	image: '',
	episode: [],
	url: '',
	created: ''
};

export default function characterReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_CHARACTER:
			return {...action.payload};
		case DELETE_CHARACTER:
			return INITIAL_STATE;
		default:
			return state;
	}
}