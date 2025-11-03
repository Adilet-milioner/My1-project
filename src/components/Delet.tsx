import { Button } from "./ui/button";

const Delet = () => {

// interface ModalConfirmDeleteProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onConfirm: () => void;
//   itemToDelete?: string;
// }

// const ModalConfirmDelete: React.FC<ModalConfirmDeleteProps> = ({ 
//   isOpen, 
//   onClose, 
//   onConfirm, 
//   itemToDelete = 'объект' 
// }) => {
//   if (!isOpen) {
//     return null;
//   }

//   Сүрөттөгүдөй: Фон (backdrop) жок, бирок модалдык кутуча ортодо.
//   Биз фонду тазалап, бирок модалдын үстүңкү катмарда болушун камсыздайбыз.
  
  return (
    // Модалдык терезенин толук контейнери: 
    // Эми бул жерде күңүрт фон ЖОК. Анын ордуна, жөн гана экрандын үстүнөн позициялайбыз.
    // fixed inset-0 z-50 flex items-start justify-center pt-20 sm:items-center sm:pt-0
    <div 
      className="fixed inset-0 z-50 **bg-white/0.5** flex items-center justify-center"
    //   onClick={onClose} 
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      
      {/* Модалдык диалогдун өзү (Скриншоттогу ак кутуча) */}
      <div 
        // max-w-[608px] - Сиз берген туурага жакындаштырылган.
        className="relative bg-white rounded-lg  w-full max-w-md sm:max-w-[608px] overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Ичиндеги басуу фонго өтүп кетпеши үчүн
      >
        
        {/* Жогорку бөлүгү: Аталыш жана Жабуу баскычы */}
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 id="modal-title" className="text-xl font-semibold leading-none tracking-tight">
            Подтвердите удаление
          </h3>
          
          {/* Жабуу (X) баскычы */}
          <button 
            className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            // onClick={onClose}
            aria-label="Закрыть модальное окно"
          >
            {/* SVG иконасы (X) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
            <span className="sr-only">Закрыть</span>
          </button>
        </div>
        
        {/* Негизги бөлүгү: Суроо тексти */}
        <div className="p-6 pt-0">
          <p className="text-base text-gray-700">
            Вы уверены, что хотите удалить ?
          </p>
        </div>
        
        {/* Төмөнкү бөлүгү: Баскычтар */}
        <div className="flex justify-end items-center p-4 bg-white border-t border-gray-200">
          
          {/* Отмена баскычы */}
          <Button 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 py-2 px-4 mr-3 
                       bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            // onClick={onClose}
          >
            Отмена
          </Button>
          
          {/* Удалить баскычы (Кызыл) */}
          <Button 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 py-2 px-4 
                       text-white bg-red-600 hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            // onClick={onConfirm}
          >
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
};


export default Delet;
