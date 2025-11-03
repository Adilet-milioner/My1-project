import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router";

// interface CarData {
//   name: string;
//   price: number | string;
//   year: number | string;
//   country: string;
// }
// Предполагается, что вы импортируете компоненты из вашей библиотеки (например, shadcn/ui)
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

// Модель данных для формы

// Состояние для хранения данных формы
// const Button = ({
//   children,
//   className = "",
//   onClick,
//   type = "button",
// }: {
//   children: React.ReactNode;
//   className?: string;
//   onClick?: (e: React.MouseEvent) => void;
//   type?: "button" | "submit";
// }) => (
//   <button
//     className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${className}`}
//     onClick={onClick}
//     type={type}
//   >
//     {children}
//   </button>
// );
interface CarData {
  name: string;
  price: number | string;
  year: number | string;
  country: string;
}
// Shadcn/ui стилдерине окшоштурулган жөнөкөй Button компоненти

// Форма маалыматтары үчүн TypeScript Interface

// Форманын баштапкы абалы
const Current = () => {
  const [formData, setFormData] = useState<CarData>({
    name: "Ford",
    price: 666,
    year: 1974,
    country: "Украина",
  });
  const navigate = useNavigate();

  // Input өзгөргөндөгү обработчик
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    // Эгер баа же жыл болсо, санга айландырууга аракет кылабыз, бирок сап (string) катары калтырууга да мүмкүндүк беребиз.
    const numericValue =
      (id === "price" || id === "year") && !isNaN(Number(value))
        ? Number(value)
        : value;

    setFormData((prevData) => ({
      ...prevData,
      [id]: numericValue,
    }));
  };

  // Форманы жөнөтүү обработчиги
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма жөнөтүлдү:", formData);
    // Бул жерге маалыматтарды сактоо логикасын киргизсеңиз болот
  };

  return (
    // Негизги фон жана борборлоштуруу
    <div className="flex items-center justify-center  bg-gray-100 dark:bg-gray-900 font-sans p-4 min-h-[630px] ">
      {/* Форма контейнери (Сүрөттөгү ак карточка) */}
      <form
        onSubmit={handleSubmit}
        // w-full max-w-md мобилдик үчүн, ал эми 512px туурасы үчүн
        className="w-full max-w-md md:max-w-[512px] p-8 space-y-6 bg-white rounded-xl shadow-2xl dark:bg-gray-800"
      >
        <h1 className="sr-only">Редактирование данных автомобиля</h1>

        {/* 1. Название машины (Унаанын аты) */}
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none text-gray-700 dark:text-gray-200"
            htmlFor="name"
          >
            Название машины
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* 2. Цена (Баасы) */}
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none text-gray-700 dark:text-gray-200"
            htmlFor="price"
          >
            Цена
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
            id="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        {/* 3. Год выпуска (Чыгарылган жылы) */}
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none text-gray-700 dark:text-gray-200"
            htmlFor="year"
          >
            Год выпуска
          </label>
          <input
            // Shadcn/ui жана сүрөттөгү стилди туураш үчүн number input'дун стандарттык стрелкаларын жашыруу
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            id="year"
            type="number"
            value={formData.year}
            onChange={handleChange}
          />
        </div>

        {/* 4. Страна (Өлкө) */}
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none text-gray-700 dark:text-gray-200"
            htmlFor="country"
          >
            Страна
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
            id="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        {/* Кнопка сохранения (Сактоо баскычы) - Сүрөттөгү кара түс */}
        <Button
          onClick={() => navigate("/cars")}
          className="w-full mt-8 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
          type="submit"
        >
          Сохранить изменения
        </Button>
      </form>
    </div>
  );
};

export default Current;
