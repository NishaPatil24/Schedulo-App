const initState = {
	checkUser: false,
	signed: false,
};

export const reducer = (state = initState, action) => {
	if (action.type === "CHECK_USER") {
		return {
			...state,
			checkUser: !state.checkUser,
		};
	}
	if (action.type === "CHECK_SIGNED") {
		return {
			...state,
			signed: action.payload,
		};
	}

	//console.log(state);
	return state;
};
