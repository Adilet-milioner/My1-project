// src/hooks/useRegisterForm.ts
import { useRegisterUserMutation } from "@/components/services/authApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useRegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage("Атыңызды жазыңыз!");
      navigate("/error");
      return;
    }
    if (!formData.email.includes("@")) {
      setErrorMessage("Email туура эмес!");
      navigate("/error");
      return;
    }
    if (formData.password.length < 4) {
      setErrorMessage("Пароль кеминде 4 символ болушу керек!");
      navigate("/error");
      return;
    }

    try {
      const user = await registerUser(formData).unwrap();

      localStorage.setItem("username", user.name || "");

      navigate("/"); 
    } catch {
      setErrorMessage("Каттоо учурунда ката чыкты!");
      navigate("/error");
    }
  };

  return { formData, handleChange, handleSubmit, isLoading, errorMessage };
}
