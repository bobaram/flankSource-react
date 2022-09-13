import React from "react";
import { data as Data } from "../data";
import { useState, useEffect } from "react";
import mergeSort from "../Sort/Sort";
import mergeSortDate from "../Sort/SortByDate";

const Context = React.createContext({});

export function ContextProvider(props) {
  const [data, setData] = useState(null);
  const [fixtures, setFixtures] = useState(null);

  useEffect(() => {
    let obj = {};
    let newObj = [];
    for (let el of Data) {
      let [key1, key2] = Object.keys(el.score);
      let [value1, value2] = Object.values(el.score);
      if (!value1 || !value2) {
        continue;
      }
      if (obj[key1]) {
        obj[key1].goalsFor += value1;
        obj[key1].gamesPlayed += 1;
        obj[key1].goalsAgainst += value2;
      } else {
        let temp = {};
        temp.team = key1;
        temp.goalsFor = value1;
        temp.gamesPlayed = 1;
        temp.goalsAgainst = value2;
        temp.wins = 0;
        temp.loss = 0;
        temp.draws = 0;
        temp.points = temp.wins * 3 + temp.draws;
        obj[key1] = temp;
      }
      if (obj[key2]) {
        obj[key2].goalsFor += value2;
        obj[key2].gamesPlayed += 1;
        obj[key2].goalsAgainst += value1;
      } else {
        let temp = {};
        temp.team = key2;
        temp.goalsFor = value2;
        temp.gamesPlayed = 1;
        temp.goalsAgainst = value1;
        temp.wins = 0;
        temp.loss = 0;
        temp.draws = 0;
        temp.points = temp.wins * 3 + temp.draws;
        obj[key2] = temp;
      }

      if (value1 > value2) {
        obj[key1].wins += 1;
        obj[key2].loss += 1;
        obj[key1].points = obj[key1].wins * 3 + obj[key1].draws;
        obj[key2].points = obj[key2].wins * 3 + obj[key2].draws;
      }
      if (value1 < value2) {
        obj[key2].wins += 1;
        obj[key1].loss += 1;
        obj[key1].points = obj[key1].wins * 3 + obj[key1].draws;
        obj[key2].points = obj[key2].wins * 3 + obj[key2].draws;
      }
      if (value1 === value2) {
        obj[key2].draws += 1;
        obj[key1].draws += 1;
        obj[key1].points = obj[key1].wins * 3 + obj[key1].draws;
        obj[key2].points = obj[key2].wins * 3 + obj[key2].draws;
      }
    }
    for (let m in obj) {
      newObj.push(obj[m]);
    }

    const newData = mergeSort(newObj);
    const fixtureList = mergeSortDate(Data);
    console.log(fixtureList);

    setData(newData);
    setFixtures(fixtureList);
  }, []);

  return (
    <Context.Provider value={{ fixtures: fixtures, data: data }}>
      {props.children}
    </Context.Provider>
  );
}

export default Context;
