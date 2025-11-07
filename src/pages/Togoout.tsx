
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Togoout = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/cars"); 
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        className="max-w-[340px] h-auto p-6 border rounded-lg shadow-lg bg-white"
        style={{ minHeight: "134px", width: "340px" }}
      >
        <h2 className="text-xl font-semibold mb-1 text-gray-800">
          Регистрация
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Заполните форму для создания нового аккаунта
        </p>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="full-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Полное имя:
            </label>
            <input
              id="full-name"
              type="text"
              placeholder="Вася Пупкин"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
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
              placeholder="newuser@mokky.test"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
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
              placeholder="••••••"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>
        </div>

        <div className="mt-6">
          <Button
            onClick={handleRegister}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-black text-white hover:bg-gray-800 h-10 w-full px-4 py-2"
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Togoout;


