import "./Fixture.css";
import { format } from "date-fns";

export default function Fixture(props) {
  const date = new Date(props.date);
  const newDate = format(date, "dd/MM");
  const newTime = format(date, "HH:mm");

  return (
    <div className="fixture">
      <div className="left">
        <div>
          <span>{props.team1}</span>
          <span>{props.value1}</span>
        </div>
        <div>
          <span>{props.team2}</span>
          <span>{props.value2}</span>
        </div>
      </div>
      <div className="right">
        <span>{newDate}</span>
        <span>{newTime}</span>
      </div>
    </div>
  );
}
