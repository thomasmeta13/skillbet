import { RouteProps } from 'react-router-dom';
import Home from '../pages/Home';
import Tetris from '../pages/Tetris';

const routes: RouteProps[] = [
  {
    Component: Home,
    path: '/',
  },
  {
    Component: Tetris,
    path: '/tetris',
  }
];

export default routes;