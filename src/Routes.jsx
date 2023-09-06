import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CarrosEsportivos from './pages/Carros_esportivos/Carros_esportivos'
import CarrosVelhos from './pages/Carros_velhos/Carros_velhos'
import CarrosComuns from './pages/Carros_comuns/Carros_comuns'

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact Component={Home}> </Route>
                <Route path="/velhos" Component={CarrosVelhos}> </Route>
                <Route path="/esportivos" Component={CarrosEsportivos}>  </Route>
                <Route path="/comuns" Component={CarrosComuns}>  </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;