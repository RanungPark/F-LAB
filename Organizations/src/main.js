import app from "./app.js";
import { actions } from './libs/eventbus/actions.js';
import { event } from './libs/eventbus/eventBus.js';
import { getBackendDatas } from './libs/getBackendDatas.js';

getBackendDatas({
  key: 'TeamsList',
  action: actions.fixTeamsList,
  dispatch: event.dispatch,
})
  .then(() => {
    app();
  })

event.subscribe(app);
