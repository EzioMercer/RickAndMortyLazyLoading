import React from 'react';
import ScreenHome from "./Screens/Home/ScreenHome";
import ScreenCharacterInfo from "./Screens/CharacterInfo/ScreenCharacterInfo";

const routes = {
	'/': () => <ScreenHome />,
	'/character/:id': ({id}) => <ScreenCharacterInfo id={id} />
};

export default routes;
