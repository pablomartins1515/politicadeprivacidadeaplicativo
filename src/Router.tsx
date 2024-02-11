import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Politica } from './pages/Politica';

export function Router() {
    return (
            <Routes>
/                <Route path="/" element={<Home/>} />            
            </Routes>
    )
}