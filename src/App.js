import {TaskList} from './pages/TaskList/TaskList';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {LayoutContainer, LayoutFooter, LayoutHeader} from './components/LayoutWrapper';
import {HomePage} from './pages/HomePage/HomePage';
import {TaskPage} from './pages/TaskPage/TaskPage';
import {AboutPage} from './pages/AboutPage/AboutPage';

export function App() {
  return (
    <BrowserRouter>
      <LayoutHeader></LayoutHeader>
      <LayoutContainer>
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route path="/tasks" element={<TaskList/>}></Route>
          <Route path="/tasks/:id" element={<TaskPage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
        </Routes>
      </LayoutContainer>
      <LayoutFooter></LayoutFooter>
    </BrowserRouter>
  );
}