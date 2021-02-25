import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteCharacterData, fetchCharacter} from "../../Redux/Actions/characterActions";
import styles from './CharacterInfoStyle.module.scss';

export default function CharacterInfo(props) {

	const dispatch = useDispatch();
	const characterData = useSelector(state => state.characterReducer);

	useEffect(() => {
		dispatch(fetchCharacter(props.id));

		return () => dispatch(deleteCharacterData());
	}, []);

	return (
		<div className={styles.characterInfo}>
			<img src={characterData.image} alt=""/>
			<span>Name: {characterData.name}</span>
			<span>Gender: {characterData.gender}</span>
			<span>Status: {characterData.status}</span>
		</div>
	)
}