import classes from "./LeagueTable.module.css";
import TableItem from "./TableItem";
import { useContext } from "react";
import Context from "../context/Context";
export default function LeagueTable() {
  const Ctx = useContext(Context);
  if (!Ctx) {
    return <h1>Loading...</h1>;
  }
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Pos</th>
          <th colSpan="3">Club</th>
          <th>MP</th>
          <th>W</th>
          <th>L</th>
          <th>D</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
      </thead>
      {Ctx.data &&
        Ctx.data.map((item, index) => {
          return (
            <TableItem
              position={index + 1}
              item={item}
              key={Math.random() * index}
            />
          );
        })}
    </table>
  );
}
