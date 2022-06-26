import { ADD_NOVEL, FETCH_NOVELS, DELETE_NOVEL, NOVELS_LOADING,
    NOVELS_SUCCESS, NOVELS_FAILURE } from "../action"


   //  this is the reducers for add, fetch, delete and update operations (CRUD)
export const novels = (state = { data: [], loading: false, errorMessage: "" }, action) => {
   switch (action.type) {

       case ADD_NOVEL: {
           return{ ...state,
                  data: [...state.data, action.payload.novel].reverse(),
                  loading: false
                }
       }

       case DELETE_NOVEL: {
           return { ...state, data: state.data.filter(text => text.id !== action.payload.id)
           }
       }

    //    case AMEND_STATUS: {
    //        return { ...state, data: state.data.map(text => text.id === action.payload.id? {...text, isCompleted: !text.isCompleted} : {...text })
    //       }
    //    }

       case FETCH_NOVELS: {
           console.log('action dispatched from tunk', action);

           return { 
               ...state,
                  loading: false,
                  data: action.payload.novels
               }
       }

       case NOVELS_LOADING: {
           return { ...state,
                loading : true
           }
       }

       case NOVELS_SUCCESS: {
           return { ...state,
                loading : false
           }
       }

       case NOVELS_FAILURE: {
           return { ...state,
                loading : false,
                errorMessage: action.payload
           }
       }

       default:
           return state;

   } 
  
}

