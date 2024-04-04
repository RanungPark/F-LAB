import { getcard } from './getcard.js'

export const actions = {
  selectTeam: (team) => {
    getcard(team)
    return {
      type: "SELECT_TEAM",
      payload: { team },
    }
  },
  FixCards: (cards) => {
    return {
      type: "FIX_CardS",
      payload: { cards },
    }
  },
  FixTeamsList: (teamsList) => {
    return {
      type: "FIX_TEAMS_LIST",
      payload: { teamsList },
    }
  }
}