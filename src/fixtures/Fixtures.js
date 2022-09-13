import "./Fixtures.css";
import React from "react";
import Fixture from "./Fixture";
import Context from "../context/Context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export default function Fixtures() {
  const date = new Date("2021-05-05T14:00:00");
  const newDate = format(date, "dd/MM");
  const newTime = format(date, "HH:mm");
  const navigate = useNavigate();
  const params = useParams();
  function Return() {
    navigate("/leaguetable");
  }
  const Ctx = useContext(Context);
  if (!Ctx) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="fixtures">
      <input onClick={Return} type="button" value="Back To League Table" />
      <div className="currentDate">
        <h3>{`${newDate} ${newTime}`}</h3>
      </div>
      {Ctx.fixtures.map((item, index) => {
        const [key1, key2] = Object.keys(item.score);

        const [value1, value2] = Object.values(item.score);

        if (key1 === params.team || key2 === params.team) {
          return (
            <Fixture
              value1={value1}
              value2={value2}
              team2={key2}
              team1={key1}
              date={item.date}
              key={Math.random() * index}
            />
          );
        }
        return <React.Fragment key={Math.random() * index}></React.Fragment>;
      })}
    </div>
  );
}
