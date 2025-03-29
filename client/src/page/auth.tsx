import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <main className="min-h-screen bg-white flex justify-center items-center">
        <Outlet />
      </main>
    </>
  );
};

export default Auth;
