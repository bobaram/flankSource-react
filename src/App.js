import "./styles.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LeagueTable from "../src/leagueTable/LeagueTable";
import Fixtures from "../src/fixtures/Fixtures";
function App() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("leaguetable");
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="leaguetable" element={<LeagueTable />} />
        <Route path="fixtures/:team" element={<Fixtures />} />
      </Routes>
    </div>
  );
}

export default App;
