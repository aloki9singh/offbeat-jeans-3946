// // action creators related to auth state;


export const  loginFailureAction=()=>({
    type:"LOGIN_FAILURE"
  })
  export const  loginSuccessAction=(data)=>({
    type:"LOGIN_SUCCESS",
    payload:data
  })
  export const  loginLoadingAction=()=>({
    type:"LOGIN_LOADING"
  })