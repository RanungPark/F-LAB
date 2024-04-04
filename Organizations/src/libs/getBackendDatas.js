import { dataPath } from "../data/dataPath.js";

export async function getBackendDatas(key, action, dispatch) {
  fetch(dataPath[key])
    .then((response => response.json()))
    .then((response) => {
      return (response[key])
    })
    .then((datas) => {
      dispatch(action(datas))
    })
}