const initialState = {
	theState: ''
}

export const reducer = (state=initialState, action={}) => {
	switch(action.type){
		case 'FIRST_ACTION':
			return Object.assign({}, state, {theState: action.payload})
		default:
			return state
	}

}

const initialState2 = {
	theState2: ''
}

export const reducer2 = (state=initialState2, action={}) => {
	switch(action.type){
		case 'SECOND_ACTION':
			return Object.assign({}, state, {theState2: action.payload})
		default:
			return state
	}

}