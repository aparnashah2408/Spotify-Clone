export const initialState = {
    user:null,
    playlists:null,
    playing:false,
    item: null,
    // token: null,
    // token: "BQDHChRuBpqC0xR0jzg45sWXn4MYC9wSTWftWiHf2IYCdXL8bkEtiWQ4VMQkouOC0TZaq0Nh4HyVmPB2TrdJhXKePAhZiOJ9teps6JkrwKIYEJ0_Z-hrb0DXtnG6On_mCfel4RNDxSUhyzsDsysgDMbLddZcII4RJjw6L7h64fYUXQLDqRGey6MxSuf5lnRB3yQ5blURVbidqMvfv8Yw",
}

export const reducer = (state, action) => {
    console.log(action);

    //ACtion -> type, [payload] : payload can be dynamic
    switch (action.type) {
        case "SET_USER":
            return{
                //keep whatever is there in the state and update user to action.user
                ...state,
                user: action.user //payload is the user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }

        case "SET_DISCOVER_WEEKLY":
        return{
            ...state,
            discover_weekly: action.discover_weekly
        }
        
        default:
            return state
    }
}