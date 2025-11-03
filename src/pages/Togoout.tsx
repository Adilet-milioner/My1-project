
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Togoout = () => {
  const navigate = useNavigate();

  // Функция — катталуу басылганда иштейт
  const handleRegister = () => {
    navigate("/cars"); // /cars барагына багыттайт
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
          {/* Бул жерде navigate иштейт */}
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



// Регистрация болгондон кийин Main баракка өтүү
// Мисал катары колдонуу:
// <RegistrationFormCard />

// Негизги контейнер, берилген өлчөмдөргө жана карта эффектисине ээ
// Картанын ичиндеги мазмундун борбордо болушу үчүн padding колдонулат
// <NavLink to="/" >
// <div
//   className="max-w-[340px] h-auto p-6 border rounded-lg shadow-lg bg-white"
//   style={{ minHeight: "134px", width: "340px" }} // Скриншотко ылайыктуу болжолдуу туурасы
// >
  /* Башкы аталыш */
//   <h2 className="text-xl font-semibold mb-1 text-gray-800">
    // Регистрация
//   </h2>

//   {/* Суб-аталыш/Сүрөттөмө */}
//   <p className="text-sm text-gray-500 mb-6">
    // Заполните форму для создания нового аккаунта
//   </p>

//   {/* Форма Элементтери */}
//   <div className="space-y-4">
    // {/* 1. Толук аты-жөнү (Полное имя) */}
    // <div>
    //   <label
        // htmlFor="full-name"
        // className="block text-sm font-medium text-gray-700 mb-1"
    //   >
        // Полное имя:
    //   </label>
    //   {/* Shadcn Input окшошу */}
    //   <input
        // id="full-name"
        // type="text"
        // placeholder="Вася Пупкин"
        // className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
    //   />
    // </div>

    // {/* 2. Почта (Email) */}
    // <div>
    //   <label
        // htmlFor="email"
        // className="block text-sm font-medium text-gray-700 mb-1"
    //   >
        // Почта:
    //   </label>
    //   {/* Shadcn Input окшошу */}
    //   <input
        // id="email"
        // type="email"
        // placeholder="newuser@mokky.test"
        // className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
    //   />
    // </div>

    // {/* 3. Пароль (Password) */}
    // <div>
    //   <label
        // htmlFor="password"
        // className="block text-sm font-medium text-gray-700 mb-1"
    //   >
        // Пароль:
    //   </label>
    //   {/* Shadcn Input окшошу */}
    //   <input
        // id="password"
        // type="password"
        // placeholder="••••••"
        // className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
    //   />
    // </div>
//   </div>

//   {/* Каттоо Баскычы */}
//   <div className="mt-6">
    // {/* 'Зарегистрироваться' (Катталуу) Баскычы (Shadcn Button default/primary стилине окшош, кара фон менен) */}
    // <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-black text-white hover:bg-gray-800 h-10 w-full px-4 py-2">
    //   Зарегистрироваться
    // </Button>
//   </div>
// </div>
// </NavLink>