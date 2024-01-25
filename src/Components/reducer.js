export const initialState = {
    user:null,
    playlists:null,
    playing:false,
    item: null
}

export const reducer = (state, action) => {
    console.log(action);

    //ACtion -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        default:
            return state
    }
}