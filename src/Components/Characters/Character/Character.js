import React from 'react';
import {navigate} from "hookrouter";
import styles from './CharacterStyle.module.scss';

export default function Character(props) {

	const character = props.character;

	return (
		<div className={styles.character} onClick={() => navigate('character/'+character.id)}>
			<span>{character.name}</span>
			<img src={character.image}/>
		</div>
	)
}