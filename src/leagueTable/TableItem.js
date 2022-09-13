import { Link } from "react-router-dom";
import "./TableItem.css";
export default function TableItem(props) {
  return (
    <tbody>
      <tr>
        <th>{props.position}</th>
        <th colSpan="3">
          <Link className="link" to={`/fixtures/${props.item.team}`}>
            {props.item.team}
          </Link>
        </th>
        <th>{props.item.gamesPlayed}</th>
        <th>{props.item.wins}</th>
        <th>{props.item.loss}</th>
        <th>{props.item.draws}</th>
        <th>{props.item.goalsFor - props.item.goalsAgainst}</th>
        <th>{props.item.points}</th>
      </tr>
    </tbody>
  );
}
