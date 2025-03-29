import React, { useState } from "react";
import auth_api from "../../api/auth.api";
import { LoginFormType } from "./dto";
import { useNavigate } from "react-router-dom";
export default function useHook() {
  const [error_message, set_message] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (data: LoginFormType) => {
    try {
      const res = await auth_api.post("/login", data);
      if (res) {
        const token = res.data.token;
        if (token) {
          localStorage.setItem("access-token", token);
          navigate("/dashboard");
        } else {
          set_message("Authorization token not found.");
          return;
        }
      }
    } catch (err: any) {
      set_message(err.response.data.error);
    }
  };

  return { error_message, onSubmit };
}
