export const handlers = {
  SELECT_TEAM: (prev, event) => {
    const { team } = event.payload;
    return {
      ...prev,
      team,
    }
  },
  FIX_CardS: (prev, event) => {
    const { cards } = event.payload;
    return {
      ...prev,
      cards,
    }
  },
  FIX_TEAMS_LIST: (prev, event) => {
    const { teamsList } = event.payload;
    return {
      ...prev,
      teamsList,
    }
  },
};