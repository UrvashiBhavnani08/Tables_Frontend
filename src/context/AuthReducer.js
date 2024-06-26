const AuthReducer = (state, action) =>{
    switch (action.type) {
        case "LOGIN_START":
            return{
                user: null,
                isFetching: true,
                error: null
            }

        case "LOGIN_SUCCESS":
            return{
                user: action.payload,
                isFetching: false,
                error: null
            }

        case "LOGIN_FALIURE":
            return{
                user: null,
                isFetching: false,
                error: true,
            }

        case "LOGOUT":
            return{
                user: null,
                isFetching: false,
                error: false
            }
    
        default:
            return state;
    }
}

export default AuthReducer;