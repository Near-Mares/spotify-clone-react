export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    playing: false,
    item: null,
    //remember set the token to null before deploying for the login process
    //token: 'BQCZ3ic5wp-Ny4hqH_Is0GKprkogLzH1QCRstTVuxLJJcOGhMMm249a6KPwIPLpxmiS0QI9QhIDKHN9aQnNmJzuh7AMfydIyALGuAXfcOCgkt9lVhtmNrqFWeKzxMNQlS-RSrjTkqlxrTpZ72v2xKFU25jZx4mZY7za7MSqnOtS7jz9Ryoph'
    //token: null
}

const reducer = (state, action) => {

    console.log('action is >>', action);

    switch ( action.type ) {
        
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };
        default:
            return state;
    }
};

export default reducer;