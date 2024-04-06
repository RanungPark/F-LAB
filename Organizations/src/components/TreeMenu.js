import { Component } from "./Component.js";
import { TreeMenuInput } from "./TreeMenuInput.js";
import { TreeMenuSpan } from "./TreeMenuSpan.js";

export class TreeMenu extends Component {
  render({ teamState, dispatch }) {
    const TMTitleComponent = new TreeMenuInput();
    const TMChildsComponent = new TreeMenuSpan();

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