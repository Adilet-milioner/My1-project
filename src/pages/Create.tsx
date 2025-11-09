import { createCar } from "@/components/services/carApi";
import { Button } from "@/components/ui/button";
import useCarForm from "@/hooks/useCarsData";
import { Label } from "@radix-ui/react-label";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { useNavigate } from "react-router";

function Create() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); 

  
  const { formData, handleChange } = useCarForm({
    model: "",
    price: "",
    year: "",
    country: "",
    sortType: 'no-sorting',
  });

  const addCar = () => {
    
    const payload = {
      model: formData.model ?? "",
      price: formData.price ?? "",
      year: formData.year ?? "",
      country: formData.country ?? "",
    };
    dispatch(createCar(payload));

    
    navigate("/cars");
  };

  return (
    <div className="min-h-sm bg-gray-50 flex flex-col ">
      

      
      <main className=" pt-16 pb-16 flex justify-center">
  
        <div
          className="max-w-sm h-auto p-6 border rounded-lg shadow-lg bg-white"
          style={{ width: "400px" }} 
        >
      
          <div className="space-y-5">
            
            <div>
              <Label
                htmlFor="car-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Название машины
              </Label>
              <input
                id="car-name"
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

        
            <div>
              <Label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Цена
              </Label>

              <input
                id="price"
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

        
            <div>
              <Label
                htmlFor="year"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Год выпуска
              </Label>
              <input
                id="year"
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

          
            <div>
              <Label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Страна
              </Label>
              <input
                id="country"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
          </div>

        
          <div className="mt-6">
            
            <Button
              onClick={() => addCar()}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-black text-white hover:bg-gray-800 h-10 w-full px-4 py-2"
            >
              Добавить машину
            </Button>
          </div>
        </div>
      </main>

     
    </div>
  );
}
export default Create;
