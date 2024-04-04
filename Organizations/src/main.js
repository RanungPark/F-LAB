import app from "./app.js";
import { actions } from './libs/actions.js';
import { event } from "./libs/eventBus.js";
import { fixTeamsList } from './libs/fixTeamsList.js';
import { getBackendDatas } from './libs/getBackendDatas.js';

// fixTeamsList()
getBackendDatas('TeamsList', actions.FixTeamsList, event.dispatch)
  .then(() => app())

event.subscribe(app)