// to get token from local storage
let token = localStorage.getItem('jsonwebtoken')

const initialState = {

  token : token? token: '',
  username : '',

  cartcount: 0,


}

const reducer = (state = initialState, action) => {

  if(action.type == "AUTHENTICATED") {

   return {
    ...state,
    token : action.token
   }

 } else if(action.type == "USER"){

   return {
   ...state,
   username : action.user.username,
   userid : action.user.userid
}

} else if(action.type == "DELETETOKEN"){

       return {
         ...state,
        token : '',
        username : ''
       }
 }else if(action.type == "CAKE"){

        return {
          ...state,
         Obj: action.obj
        }
  } else if(action.type == "BEVERAGE"){

         return {
           ...state,
          Obj: action.obj
         }
   } else if(action.type == "PASTRY"){

          return {
            ...state,
           Obj: action.obj
          }
    } else if(action.type == "SMALLBITES"){

           return {
             ...state,
            Obj: action.obj
           }
     } else if(action.type == "QUANTITY"){

            return {
              ...state,
             count: action.count
            }
      }
      else if(action.type == "UPDATEITEMCOUNT"){

             return {
               ...state,
              cartcount: action.itemCount
             }
       }else if(action.type == "ITEMCARTCOUNT"){

              return {
                ...state,
               cartcount: action.cartcount
              }
        }
 return state

}

export default reducer
