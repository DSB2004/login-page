import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import user_api from "../../api/user.api";

interface User {
  id: string;
  name: string;
  email: string;
}

const fetchUser = async (): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await user_api.get("/get-user");
  return res.data.user;
};

export default function useHook() {
  const navigate = useNavigate();

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery<User>({
    queryKey: ["user"],
    queryFn: () => fetchUser(),
    staleTime: Infinity,
  });

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    navigate("/");
  };

  return {
    user,
    handleLogout,
    loading: isLoading,
    error: isError ? error : null,
  };
}
