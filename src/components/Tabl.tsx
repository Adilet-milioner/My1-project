import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import CustomModal from "./ui/modal/Modal";
import Delet from "./Delet";
import { useState } from "react";

const carsData = [
  { id: 1, model: "Lexus", price: "$ 451", year: 2019, country: "Зимбабве" },
  { id: 2, model: "Ford", price: "$ 666", year: 1974, country: "Украина" },
  {
    id: 3,
    model: "Hyundai",
    price: "$ 684",
    year: 2006,
    country: "Антарктика (не признана)",
  },
  {
    id: 4,
    model: "Mercedes-Benz",
    price: "$ 686",
    year: 2004,
    country: "Кения",
  },
  { id: 5, model: "Nissan", price: "$ 321", year: 2000, country: "Кыргызстан" },
  {
    id: 6,
    model: "Toyota",
    price: "$ 530",
    year: 2000,
    country: "Сейшельские острова",
  },
  {
    id: 7,
    model: "Volkswagen",
    price: "$ 455",
    year: 1995,
    country: "Джибути",
  },
  {
    id: 8,
    model: "BMW",
    price: "$ 90тыс",
    year: 2026,
    country: "Кыргызстан (Кыргызстан)",
  },
  { id: 9, model: "Honda", price: "$ 400", year: 2020, country: "США" },
];

/**
 * Скриншоттун структурасын жана стилин Tailwind CSS жана Shadcn UI визуалдык элементтерин колдонуп кайталайт.
 */
function Tabl() {
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const openModal = () => setModal((prev) => !prev);

  return (
    // Негизги контейнер, берилген өлчөмдөргө жана карта эффектисине ээ
    <div
      className="bg-white p-6 rounded-lg shadow-sm m-6 border border-gray-100 mr-[200px] ml-[200px] "
      //   style={{ height: 'auto', minHeight: '166px', width: '608px' }}
    >
      {/* Жогорку Чыпкалоо жана Аракет Сабы */}
      <div className="flex items-center justify-between p-4 pb-2 border-b">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          {/* 'Clear All Filters' (Бардык Чыпкаларды Тазалоо) Баскычы (Shadcn Button ghost окшошу) */}
          <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-black text-white hover:bg-gray-800 h-8 px-3 py-1">
            Clear All Filters
          </Button>
        </div>
        {/* Бардык Чыпкаларды Тазалоо Сабы */}

        <div className="flex items-center space-x-4 text-sm text-gray-500">
          {/* 'Создать' (Түзүү) Баскычы (Shadcn Button primary окшошу) */}
          <Button
            onClick={() => navigate("/create")}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-black text-white hover:bg-gray-800 h-8 px-3 py-1"
          >
            Создать
          </Button>
        </div>
      </div>

      {/* Таблицанын Структурасы */}
      <div className="overflow-x-auto mt-4">
        {/* Tailwind класстары менен стандарттык HTML таблица */}
        <table className="min-w-full divide-y divide-gray-200">
          {/* Таблицанын Башкы Сабы (Header) */}
          <thead className="bg-gray-50">
            <tr>
              {/* Таблицанын мамыча аттары (Shadcn TableHead окшошу) */}
              {["#", "Модель", "Цена", "Год", "Страна", "Действия"].map(
                (header, index) => (
                  <th
                    key={index}
                    scope="col"
                    className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                      header === "#" ? "w-10" : ""
                    }`}
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>

          {/* Таблицанын Негизги Бөлүгү (Body) */}
          <tbody className="bg-white divide-y divide-gray-200">
            {carsData.map((car) => (
              <tr key={car.id} className="hover:bg-gray-50">
                {/* ID мамычасы */}
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                  {car.id}
                </td>
                {/* Модель мамычасы */}
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                  {car.model}
                </td>
                {/* Баасы мамычасы */}
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                  {car.price}
                </td>
                {/* Жылы мамычасы */}
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                  {car.year}
                </td>
                {/* Өлкө мамычасы */}
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                  {car.country}
                </td>

                {/* Аракеттер мамычасы */}
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium flex space-x-2">
                  {/* Өзгөртүү (Edit) Баскычы (Shadcn Button outline/icon окшошу) */}
                  <Button
                    onClick={() => navigate("/edit")}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-300 bg-white hover:bg-gray-100 h-8 w-8 p-0 text-blue-500"
                  >
                    {/* Өзгөртүү Иконкасынын Оруну (Карандаш) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 3a2.85 2.85 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    </svg>
                  </Button>
                  {/* Өчүрүү (Delete) Баскычы (Shadcn Button outline/icon окшошу) */}
                  <Button
                    onClick={openModal}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-300 bg-white hover:bg-gray-100 h-8 w-8 p-0 text-red-500"
                  >
                    {/* Өчүрүү Иконкасынын Оруну (Таштанды челек) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                  </Button>
                  <CustomModal isVisible={modal} handleVisible={openModal}>
                    <Delet />
                  </CustomModal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Tabl;
