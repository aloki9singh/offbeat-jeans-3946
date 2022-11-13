// reducer related to auth state;

const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_LOADING":{
        return { 
          isAuth: false,
          token: null,
          isLoading: true,
          isError: false
        };
    }
    case "LOGIN_SUCCESS":{
      return { 
        isAuth: true,
        token: action.payload,
        isLoading:false,
        isError: false
      };
  }
  case "LOGIN_FAILURE":{
    return { 
      isAuth: false,
      token: null,
      isLoading: false,
      isError: true
    };
  }
  default:{
    return state
  }
    }
    
  };
  
  export default reducer
  