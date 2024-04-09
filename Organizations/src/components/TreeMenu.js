import { render } from '../libs/render.js';
import { Component } from "./Component.js";
import { TreeMenuA } from './TreeMenuA.js';
import { TreeMenuDetails } from './TreeMenuDetails.js';

export class TreeMenu extends Component {
  render({ state: teamState, dispatch }) {
    const TMTitleComponent = new TreeMenuDetails();
    const TMChildsComponent = new TreeMenuA();

    const [TMTitleWrapper, TMChiledsWrapper] = render({ component: TMTitleComponent, state: teamState.title }, { component: TMChildsComponent, state: teamState.childs })
    this.appendElements(TMTitleWrapper, TMChiledsWrapper);

    teamState.childs.forEach(team => {
      if (typeof team.title !== "undefined") {
        const [chileTeamComponent] = render({ component: this, state: team })
        this.appendElements(TMChiledsWrapper, chileTeamComponent)
      };
    });

    return TMTitleWrapper;
  }
}