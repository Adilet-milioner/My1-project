import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { RootState, AppDispatch } from "../store";
import { Car, updateCar, CreateCarBody } from "../components/services/carApi"; 
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const emptyCarData: CreateCarBody = {
  model: "",
  price: "",
  year: "",
  country: "",
};

const Current = () => {
  const { id } = useParams<{ id: string }>();
  const carId = id ? parseInt(id, 10) : null;

  

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  
  const cars: Car[] = useAppSelector((state) => state.car.cars);

  
  const [formData, setFormData] = useState<CreateCarBody>(emptyCarData);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    if (carId !== null && cars.length > 0) {
      const initialCarData = cars.find((car) => car.id === carId);

      if (initialCarData) {
        
        setFormData({
          model: initialCarData.model,
          price: initialCarData.price,
          year: initialCarData.year,
          country: initialCarData.country,
        });
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } else if (carId !== null && cars.length === 0) {
      // Маалыматты күтүү
    } else {
      
      navigate("/cars");
    }
  }, [carId, cars, navigate]);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name as keyof CreateCarBody]: value, 
    }));
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (carId !== null) {
      
      const carToUpdate: Car = {
        id: carId,
        ...formData, 
      }; 

      await dispatch(updateCar(carToUpdate)).unwrap(); 
      navigate("/cars");
    }
  };

  if (isLoading) {
    return (
      <div className="p-10 text-center text-xl font-semibold">Жүктөөдө...</div>
    );
  }

  
  const currentCar = cars.find((car) => car.id === carId);

  if (!currentCar) {
    return (
      <div className="p-10 text-center text-xl font-semibold text-red-600">
        ID {carId} менен унаа табылган жок.
      </div>
    );
  }



  return (
    
    <div className="flex items-center justify-center  bg-gray-100 dark:bg-gray-900 font-sans p-4 min-h-[630px] ">
  
      <form
        onSubmit={handleSubmit}
        
        className="w-full max-w-md md:max-w-[512px] p-8 space-y-6 bg-white rounded-xl shadow-2xl dark:bg-gray-800"
      >
        <h1 className="sr-only">Редактирование данных автомобиля</h1>

    
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
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </div>


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
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

    
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none text-gray-700 dark:text-gray-200"
            htmlFor="year"
          >
            Год выпуска
          </label>
          <input
          
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            id="year"
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>


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
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        
        <Button
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
