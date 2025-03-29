import useHook from "./hook";
import { Button } from "../../ui/button";

const SkeletonLoader = () => (
  <div className="bg-gray-50 animate-pulse shadow-lg rounded-lg p-8 w-96 ">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
      <p className="text-xl text-gray-600">Here's your information:</p>
    </div>

    <div className="mb-4">
      <p className="text-xl font-semibold text-gray-700">Name:</p>
      <p className="text-lg text-gray-600">John Doe</p>
    </div>

    <div className="mb-4">
      <p className="text-xl font-semibold text-gray-700">Email:</p>
      <p className="text-lg text-gray-600">johndoe@gmail.com</p>
    </div>

    <div className="mt-6 flex justify-center">
      <Button className="bg-red-200 hover:bg-red-200 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
        Logout
      </Button>
    </div>
  </div>
);

export default function User() {
  const { user, handleLogout, loading } = useHook();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <SkeletonLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      {user ? (
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
            <p className="text-xl text-gray-600">Here's your information:</p>
          </div>

          <div className="mb-4">
            <p className="text-xl font-semibold text-gray-700">Name:</p>
            <p className="text-lg text-gray-600">{user.name}</p>
          </div>

          <div className="mb-4">
            <p className="text-xl font-semibold text-gray-700">Email:</p>
            <p className="text-lg text-gray-600">{user.email}</p>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600">
          <p className="text-xl">No user data found. Please log in again.</p>
        </div>
      )}
    </div>
  );
}
