import { useNavigate } from "react-router-dom"; 
import { Button } from "./ui/button";
import CustomModal from "./ui/modal/Modal";
import { useState } from "react";
import { Car } from "./services/carApi"; 
import Delete from "./Delete";

interface TablProps {
  cars: Car[];
  onDelete: (id: number) => void;
  onClearFilters?: () => void; 
}

function Tabl({ cars, onDelete,  onClearFilters}: TablProps) {
  
  const [carIdToDelete, setCarIdToDelete] = useState<number | null>(null);
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const openModal = (id: number | null = null) => {
    setCarIdToDelete(id); 
    setModal((prev) => !prev);
  };

  const handleDelete = () => {
    if (carIdToDelete !== null) {
      onDelete(carIdToDelete);
      openModal(); 
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm m-6 border border-gray-100 mr-[200px] ml-[200px] ">
      
      <div className="flex items-center justify-between p-4 pb-2 border-b">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <Button 
            onClick={onClearFilters} 
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-black text-white hover:bg-gray-800 h-8 px-3 py-1">
            Clear All Filters
          </Button>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <Button
            onClick={() => navigate("/create")}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-black text-white hover:bg-gray-800 h-8 px-3 py-1"
          >
            Создать
          </Button>
        </div>
      </div>

      
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
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
          <tbody className="bg-white divide-y divide-gray-200">
            {cars.map((car) => (
              <tr key={car.id} className="hover:bg-gray-50">
                
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                  {car.id}
                </td>
              
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                  {car.model}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                  ${car.price}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                  {car.year}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                  {car.country}
                </td>

          
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium flex space-x-2">
                  <Button
                    onClick={() => navigate(`/edit/${car.id}`)} 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-300 bg-white hover:bg-gray-100 h-8 w-8 p-0 text-blue-500"
                  >
                  
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
                  <Button
                    onClick={() => openModal(car.id)} 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-300 bg-white hover:bg-gray-100 h-8 w-8 p-0 text-red-500"
                  >
                    
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        <CustomModal isVisible={modal} handleVisible={() => openModal()}>
        <Delete
          onDelete={handleDelete}
          id={carIdToDelete !== null ? carIdToDelete : 0} 
        />
      </CustomModal>
    </div>
  );
}
export default Tabl;
