import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function Eror() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[630px] inset-0 z-50  flex items-center justify-center">

      <div
        className="relative bg-white rounded-lg shadow-lg w-full max-w-sm sm:max-w-[512px] h-[134px] overflow-hidden flex flex-col justify-between"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="error-modal-title"
      >
        <div className="flex flex-col flex-grow">
          
          <div className="flex items-center gap-2 p-6 pb-1">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            >
              
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-4V7h2v6h-2z" />
            </svg>
            <h3
              id="error-modal-title"
              className="text-sm font-medium text-red-500"
            >
              Что-то пошло не так
            </h3>
          </div>

    
          <div className="px-6 py-2 pt-0">
            <p className="text-sm font-medium text-red-700 ">
              Тестовая ошибка!
            </p>
          </div>
        </div>

        
        <div className="flex justify-end p-4 pt-0">
        
          <Button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 py-2 px-3 mr-3 
                           border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Назад
          </Button>


          <Button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 py-2 px-3 
                           text-white bg-black hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            На главную
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Eror;
