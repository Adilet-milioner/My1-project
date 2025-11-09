import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUserName(user.name || null);
      } catch (e) {
        console.error("❌ Ошибка при чтении user:", e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserName(null);
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

        {userName ? (
          <>
            <span className="font-medium text-lg text-gray-800">
             {userName}
            </span>
            <Button variant="outline" onClick={handleLogout}>
              Выйти
            </Button>
          </>
        ) : (
          <Button variant="outline" onClick={() => navigate("/register")}>
            Выйти
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
