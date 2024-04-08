import { Component } from "./Component.js";
import { TreeMenuA } from './TreeMenuA.js';
import { TreeMenuDetails } from './TreeMenuDetails.js';

export class TreeMenu extends Component {
  render({ teamState, dispatch }) {
    const TMTitleComponent = new TreeMenuDetails();
    const TMChildsComponent = new TreeMenuA();
    

    const TMTitleWrapper = TMTitleComponent.render(
      {
        title: teamState.title,
        dispatch
      });
    const TMChiledsWrapper = TMChildsComponent.render({
      childs: teamState.childs,
      dispatch
    });

    this.appendElements(TMTitleWrapper, TMChiledsWrapper);

    teamState.childs.forEach(team => {
      if (typeof team.title !== "undefined") {
        const chileTeamComponent = this.render({
          teamState: team,
          dispatch
        });
        this.appendElements(TMChiledsWrapper, chileTeamComponent)
      };
    });

    return TMTitleWrapper;
  }
}