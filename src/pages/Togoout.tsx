import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRegisterUserMutation } from "@/components/services/authApi";
import { useAuth } from "@/store/AuthContext";

const Togoout = () => {
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRegister = async () => {
    const { name, email, password } = formData;

    if (!name.trim() || !email.trim() || !password.trim()) {
      navigate("/error");
      return;
    }

    try {
      const response = await registerUser(formData).unwrap();
      localStorage.setItem("user", JSON.stringify(response));
      setUser(response); // 🔥 Контекстти жаңыртабыз
      navigate("/cars");
    } catch (err) {
      navigate("/error");
      return err
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-20">
      <div className="max-w-[340px] w-full p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold mb-1 text-gray-800">
          Регистрация
        </h2>

        <div className="space-y-4 mt-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Имя:
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Введите имя"
              className="border border-gray-300 w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Почта:
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Введите почту"
              className="border border-gray-300 w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Пароль:
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Введите пароль"
              className="border border-gray-300 w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-black outline-none"
            />
          </div>
        </div>

        <div className="mt-6">
          <Button
            onClick={handleRegister}
            disabled={isLoading}
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            {isLoading ? "Регистрация..." : "Зарегистрироваться"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Togoout;
