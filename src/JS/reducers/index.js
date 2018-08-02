import { ADD_ARTICLE,DELETE_ARTICLE } from "../constants/action-types";
const initialState = {
  articles: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
      case DELETE_ARTICLE:
      console.log("reducers ",state.articles)
      return {...state,articles:[...state.articles]};
    default:
      return state;
  }
};
export default rootReducer;