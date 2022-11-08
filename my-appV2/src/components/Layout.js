import { Outlet } from 'react-router-dom';
import { Box } from './Box';
import {AppBar} from './AppBar'


export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px 1fr">
      <AppBar />
      <Outlet />
    </Box>
  );
};