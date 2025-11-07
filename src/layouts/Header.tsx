

import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();


  return (
    <header
      className="flex items-center justify-between px-40 border rounded py-13"
      style={{ height: "69px" }}
    >
      <div className="text-[20px] font-semibold">M Car</div>

      <div className="flex items-center space-x-3">
        <Button
          variant="outline"
          className="shadow-md border-gray-300 px-4 py-2 text-sm"
          onClick={() => navigate("/erer")}
          >
          Тестовая ошибка!
        </Button>

        

        <span className="font-medium text-lg">Вася Пупкин</span>

        <Button
          variant="outline"
          className="px-4 py-2 bg-white hover:bg-gray-50 border-gray-200 text-sm"
          onClick={() => navigate("/")}
        >
          Выйти
        </Button>
      </div>
    </header>
  );
};

export default Header;
