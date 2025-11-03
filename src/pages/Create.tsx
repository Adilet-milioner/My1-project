// import Header from "@/layouts/Header";
import { useNavigate } from "react-router";

/**
 * Скриншоттун толук көрүнүшүн (Navbar, Form, Footer) Tailwind CSS жана Shadcn UI 
 * визуалдык элементтерин колдонуп кайталайт.
 */
function Create() {
    const navigate = useNavigate();
  return (
    <div className="min-h-[900px] bg-gray-50 flex flex-col ">
      
      {/* 1. Навигациялык тилке (Navbar/Header) */}
      {/* Shadcn стилиндеги Navbar. Ак фон, ылдыйкы сызык. */}
     {/* <Header/> */}

      {/* 2. Негизги мазмун (Form/Main Content) */}
      <main className=" pt-16 pb-16 flex justify-center">
        {/* Форма контейнери - Каттоо формасына окшош стилде */}
        <div 
          className="max-w-sm h-auto p-6 border rounded-lg shadow-lg bg-white"
          style={{ width: '400px' }} // Форманын туурасы үчүн болжолдуу өлчөм
        >
          {/* Форма элементтери */}
          <div className="space-y-5">
            
            {/* 1. Машинанын аталышы */}
            <div>
              <label htmlFor="car-name" className="block text-sm font-medium text-gray-700 mb-1">
                Название машины
              </label>
              <input 
                id="car-name" 
                type="text" 
                placeholder="Audi" 
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

            {/* 2. Баасы */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Цена
              </label>
              <input 
                id="price" 
                type="text" 
                placeholder="$450" 
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

            {/* 3. Чыгарылган жылы */}
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                Год выпуска
              </label>
              <input 
                id="year" 
                type="text" 
                placeholder="2019" 
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

            {/* 4. Өлкө */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Страна
              </label>
              <input 
                id="country" 
                type="text" 
                placeholder="Германия" 
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
          </div>

          {/* Баскыч */}
          <div className="mt-6">
            {/* 'Добавить машину' (Машинаны кошуу) Баскычы (Shadcn Button primary стили) */}
            <button 
            onClick={() => navigate("/cars")}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-black text-white hover:bg-gray-800 h-10 w-full px-4 py-2"
            >
              Добавить машину
            </button>
          </div>
        </div>
      </main>

      {/* 3. Футер (Footer) */}
      {/* Төмөнкү сызык жана борбордогу текст */}
      {/* <footer className="w-full border-t py-3">
        <div className="text-center text-sm text-gray-500">
          m car
        </div>
      </footer> */}
    </div>
  );
}
export default Create;