import { useState, ChangeEvent } from "react";
import { CreateCarBody } from "@/components/services/carApi";

type SortType = "no-sorting" | "low-to-high" | "high-to-low";

interface FormState extends Partial<CreateCarBody> {
  sortType: SortType;
}

const useCarForm = (initialState: FormState) => {
  const [formData, setFormData] = useState<FormState>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSortChange = (sortType: SortType) => {
    setFormData((prev) => ({ ...prev, sortType }));
  };

  const resetSort = () => {
    setFormData((prev) => ({ ...prev, sortType: "no-sorting" }));
  };

  return { formData, handleChange, handleSortChange, resetSort };
};

export default useCarForm;

// import { useState, ChangeEvent } from 'react';
// import { CreateCarBody } from "@/components/services/carApi";

// const useCarForm = (initialState: CreateCarBody) => {
//   const [formData, setFormData] = useState<CreateCarBody>(initialState);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setFormData(prevState => ({
//       ...prevState,

//       [name]: value
//     }));
//   };

//   return { formData, handleChange };
// };

// export default useCarForm;
