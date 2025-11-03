// import { useState } from "react";
// import { Button } from "../components/ui/button";
// import CustomModal from "@/components/ui/modal/Modal";
// import ErrorMessageCard from "@/components/Eror";
// import { useNavigate } from "react-router-dom";

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
          className="shadow-md border-gray-300 px-4 py-2 text-[15px]"
          onClick={() => navigate("/erer")}
          >
          Тестовая ошибка!
        </Button>

        

        <span className="font-medium text-lg">Вася Пупкин</span>

        <Button
          variant="outline"
          className="px-4 py-2 bg-white hover:bg-gray-50 border-gray-200 text-[15px]"
          onClick={() => navigate("/")}
        >
          Выйти
        </Button>
      </div>
    </header>
  );
};

export default Header;


// const [modal, setModal] = useState(false);
//  const navigate = useNavigate()

 

// const openModal = () =>
//   setModal((prev) => {
//     return !prev;
//   });

// return (
//   // Негизги контейнер. h-[69px] бийиктигин, фонду жана ийкемдүүлүктү (flex) орнотот.
//   <header
//     className="flex items-center justify-between px-40 border rounded py-13"
//     style={{ height: "69px" }} // Же h-[69px] классын колдонсо болот, бирок тактык үчүн inline style ыңгайлуураак.
//   >
//     {/* 1. Логотип / Сайттын аталышы */}
//     <div className="text-[20px] font-semibold">M Car</div>

//     {/* 2. Оң жактагы аракеттер (Тестовая ошибка!, Вася Пупкин, Выйти) */}
//     <div className="flex items-center space-x-3">
//       {/* "Тестовая ошибка!" Баскычы/Билдирүүсү (Shadcn Button менен стилделген) */}
//       {/* Сүрөттө бул элемент чектелген (bordered) ачык-боз түстүү баскычка окшош */}
//       <Button
//         variant="outline"
//         className="shadow-md border-gray-300 px-4 py-2 text-[15px]  py-6" // Текст кызыл, чек ара боз
//         // Shadcn 'Button' компоненти h-10 классын демейки боюнча колдонот.
//         // Бул жерде Shadcn'дин баскыч стилдерин колдонобуз.
//         onClick={openModal}
//       >
//         Тестовая ошибка!
//       </Button>
//       <CustomModal isVisible={modal} handleVisible={openModal}>
//         <ErrorMessageCard/>
//       </CustomModal>

//       {/* Колдонуучунун аты */}
//       <span className="font-medium text-lg">Вася Пупкин</span>

//       {/* "Выйти" (Чыгуу) Баскычы */}
//       {/* Сүрөттө бул элемент жөнөкөй ак фондогу баскыч. */}
//       <Button
//         variant="outline"
//         className="px-4 py-6  bg-white hover:bg-gray-50 border-gray-200 text-[15px]"
//       onClick={() => navigate("/")}
        
//       >
//         Выйти
//       </Button>
//       {/* <CustomModal isVisible={modal} handleVisible={openModal}>
//         <h1>hello</h1>
//       </CustomModal> */}
//     </div>
//   </header>
// );