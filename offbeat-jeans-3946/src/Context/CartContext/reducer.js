// reducer related to cart state;
// reducer related to auth state;

const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":{
        return [...state,action.payload]
    }
    case "REMOVE_FROM_CART":{
        const cartAfterItemRemoval =state.filter(
            (item)=>item.id!==action.payload
        )
      return cartAfterItemRemoval
  }
  case "CHECKOUT":{
    return []
  }
  // case "SearchData":{
  //   return    [...state,action.payload]
  // }
  default:{
    return state
  }
    }
    
  };
  
  export default reducer
  