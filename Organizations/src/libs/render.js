import { event } from './eventbus/eventBus.js'

export function render(...renderObjs) {
  const returnComponents = []
  renderObjs.forEach(renderObj => {
    const { component, state } = renderObj
    const returnComponent = component.render({ state, dispatch: event.dispatch })
    returnComponents.push(returnComponent)
  })
  return returnComponents
}