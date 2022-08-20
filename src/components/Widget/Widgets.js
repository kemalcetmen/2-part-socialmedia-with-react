import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import './Widgets.css'
import {useSelector} from 'react-redux';

function Widgets() {
  const content= useSelector(state => state.content.content)

  return (
    <div>
      <div className={`widgets__input ${content ?"ifpurple" : "ifgreen"}`}>
        <SearchIcon className="widgets__searchIcon" />
        <input className="bok" placeholder="Search" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What is happening</h2>
      </div>
    </div>
  );
}

export default Widgets;