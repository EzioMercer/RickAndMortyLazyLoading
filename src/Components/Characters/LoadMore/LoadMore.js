import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import isInViewport from "../../../GlobalFunctions/IsInViewport";
import {fetchCharacters, startLoadingCharactersList} from "../../../Redux/Actions/charactersActions";

export default function LoadMore() {

	const dispatch = useDispatch();
	const charactersState = useSelector(state => state.charactersReducer);
	const nextCharactersListURL = charactersState.info.next;
	const haveContinuation = nextCharactersListURL !== null;
	const loadMore = useRef(null);

	const loadMoreCharacters = () => {

		if(!isInViewport(loadMore.current)) return;

		dispatch(startLoadingCharactersList());
		dispatch(fetchCharacters(nextCharactersListURL));
	};

	useEffect(() => {
		if(isInViewport(loadMore.current)) loadMoreCharacters();
	});

	useEffect(() => {
		window.addEventListener('scroll', loadMoreCharacters);

		return () => window.removeEventListener('scroll', loadMoreCharacters);
	}, [nextCharactersListURL]);

	return (
		<>
			{
				!charactersState.is_loading && haveContinuation &&
				<div>
					<button ref={loadMore} onClick={loadMoreCharacters}>Load more</button>
					<br/>
					<br/>
				</div>
			}
		</>
	)
}