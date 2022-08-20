import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/Layout/Layout'

import FlowLocal from "./components/Flows/FlowLocal"
import FlowFollow from "./components/Flows/FlowFollow"

const Home = ()=> {

  return (
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<FlowFollow/>}/>
        <Route path="/local" element={<FlowLocal/>}/>
      </Routes>
    </Layout>
  </Router>
  );
}

export default Home;