import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import CarrosVelhos from '../pages/Carros_velhos'
import CarrosEsportivos from '../pages/Carros_esportivos'
import CarrosComuns from '../pages/Carros_comuns'

function Navigation() {
  return (
       <BrowserRouter>
          <Route component = { CarrosVelhos }  path="/velhos" />
          <Route component = { CarrosEsportivos }  path="/esportivos" />
          <Route component = { CarrosComuns }  path="/comuns" />
       </BrowserRouter>
  );
}

export default Navigation;