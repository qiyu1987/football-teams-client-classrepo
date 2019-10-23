import { TEAMS_FETCHED, TEAM_CREATE_SUCCESS, TEAM_DELETE_SUCCESS } from "../actions/teams";

export default (state = [], action = {}) => {
  // console.log("STATE", state, "ACTION", action);
  switch (action.type) {
    case TEAMS_FETCHED:
      // console.log("NEW STATE", [...state, ...action.payload]); // try your transformation here
      return [...state, ...action.payload];

    case TEAM_CREATE_SUCCESS:
      return [...state, { ...action.payload }];
    // case PLAYER_CREATE_SUCCESS:
    //   return []
    case TEAM_DELETE_SUCCESS:
      console.log('state',state,'action',action)
      return state.filter(team => team.id !== Number(action.payload.id)) // filter out the team that you deleted
    
    default:
      return state;
  }
};
