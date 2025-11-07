import { useState, ChangeEvent } from 'react';
import { CreateCarBody } from "@/components/services/carApi"; 


const useCarForm = (initialState: CreateCarBody) => {
  const [formData, setFormData] = useState<CreateCarBody>(initialState);
  
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      
      [name]: value 
    }));
  };

  return { formData, handleChange };
};

export default useCarForm;
