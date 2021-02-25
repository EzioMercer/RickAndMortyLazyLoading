import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Character from "./Character/Character";
import styles from './CharactersStyle.module.scss';
import {fetchCharacters} from "../../Redux/Actions/charactersActions";

export default function Characters() {

	const dispatch = useDispatch();
	const charactersList = useSelector(state => state.charactersReducer).results;

	useEffect(() => {
		if(!charactersList.length) dispatch(fetchCharacters());
	}, []);

	return (
		<div className={styles.characters}>
			{charactersList.map(character => <Character key={character.id} character={character}/>)}
		</div>
	)
}