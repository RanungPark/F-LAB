import { getBackendDatas } from '../getBackendDatas.js'

export const actions = {
  selectTeam: ({ team, action, dispatch }) => {
    getBackendDatas({ key: team, action, dispatch });
    return {
      type: "SELECT_TEAM",
      payload: { team },
    };
  },
  fixCards: (cards) => {
    return {
      type: "FIX_CardS",
      payload: { cards },
    };
  },
  fixTeamsList: (teamsList) => {
    return {
      type: "FIX_TEAMS_LIST",
      payload: { teamsList },
    };
  },
};