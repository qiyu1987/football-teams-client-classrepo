import { FETCH_TEAM_SUCCESS, PLAYER_CREATE_SUCCESS } from "../actions/teams";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_TEAM_SUCCESS:
      return { ...action.payload };
    
    case PLAYER_CREATE_SUCCESS :
      return {
        ...state,
        players: state.players.concat(action.payload)
      }

    case "DELETE_TEAM":
      return {};

    default:
      return state;
  }
};
