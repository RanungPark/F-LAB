import { getBackendDatas } from './getBackendDatas.js'

export const actions = {
  selectTeam: ({ team, action, dispatch }) => {
    getBackendDatas({ key: team, action, dispatch });
    return {
      type: "SELECT_TEAM",
      payload: { team },
    };
  },
  FixCards: (cards) => {
    return {
      type: "FIX_CardS",
      payload: { cards },
    };
  },
  FixTeamsList: (teamsList) => {
    return {
      type: "FIX_TEAMS_LIST",
      payload: { teamsList },
    };
  },
  setCardNodes: (cardNodes) => {
    return {
      type: 'SET_CARD_NODES',
      payload: { cardNodes },
    }
  }
};