import { Card } from './Components/Card.js';
import { SideTable } from './Components/SideTable.js';

export default function app(target) {
  const sideTable = new SideTable()
  const card = new Card()

  sideTable.render(target)
  card.render(target)
}