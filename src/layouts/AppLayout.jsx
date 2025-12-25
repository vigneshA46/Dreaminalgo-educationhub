import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <>
      {/* Navbar here */}
      <Outlet />
      {/* Footer here */}
    </>
  );
}

export default AppLayout;