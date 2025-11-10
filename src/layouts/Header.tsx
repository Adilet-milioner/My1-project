import { Button } from "@/components/ui/button";
import { useAuth } from "@/store/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between px-20 py-4 border-b shadow-sm bg-white">
      <div
        onClick={() => navigate("/")}
        className="text-[22px] font-bold cursor-pointer text-black"
      >
        M Car
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={() => navigate("/error")}>
          Тестовая ошибка
        </Button>

        {user ? (
          <>
            <span className="font-medium text-lg text-gray-800">
              {user.name}
            </span>
            <Button variant="outline" onClick={handleLogout}>
              Выйти
            </Button>
          </>
        ) : (
          <Button variant="outline" onClick={() => navigate("/")}>
            Регистрация
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
