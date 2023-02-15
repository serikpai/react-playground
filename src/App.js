import './App.css';
import {TaskList} from './pages/TaskList/TaskList';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {LayoutHeader} from './components/LayoutWrapper/LayoutHeader';
import {LayoutFooter} from './components/LayoutWrapper/LayoutFooter';
import {HomePage} from './pages/HomePage/HomePage';
import {TaskPage} from './pages/TaskPage/TaskPage';

function App() {
    return (
        <BrowserRouter>
            <LayoutHeader></LayoutHeader>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<HomePage/>}></Route>
                    <Route path="/tasks" element={<TaskList/>}></Route>
                    <Route path="/tasks/:id" element={<TaskPage/>}></Route>
                </Routes>
            </div>
            <LayoutFooter></LayoutFooter>
        </BrowserRouter>
    );
}

export default App;
