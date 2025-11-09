// Main.tsx
import Tabl from "@/components/Tabl";
import Sort from "../components/Sort";
import Brends from "../components/Brends";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import {  deleteCar, Car } from "@/components/services/carApi";
import { RootState, AppDispatch } from "@/store";
import useCarForm from "@/hooks/useCarsData";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Main = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cars: Car[] = useAppSelector(state => state.car.cars);

  const { formData, handleSortChange, resetSort } = useCarForm({ sortType: "no-sorting" });

  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [resetTrigger, setResetTrigger] = useState(false);

 // 🔹 Уникалдуу бренддерди чыгарып алуу (Main.tsx)
useEffect(() => {
  if (cars.length > 0) {
    // Мисалы, Toyota Camry, Toyota Prius -> Toyota
    const uniqueBrands = Array.from(
      new Set(
        cars.map(car => {
          // Моделдин атынан биринчи сөздү алабыз (бренд)
          const brandName = car.model.split(" ")[0];
          return brandName;
        })
      )
    );
    setBrands(uniqueBrands);
  } else {
    setBrands([]);
  }
}, [cars]);


  const deleteCarHandler = (id: number) => {
    dispatch(deleteCar(id));
  };

  const handleClearFilters = () => {
    resetSort();
    setSelectedBrands([]);
    setResetTrigger(true);
    setTimeout(() => setResetTrigger(false), 100);
  };

  // 🔹 Сорттоо
  const sortedCars = useMemo(() => {
    const carsCopy = [...cars];
    if (formData.sortType === "low-to-high") {
      return carsCopy.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (formData.sortType === "high-to-low") {
      return carsCopy.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return carsCopy;
  }, [cars, formData.sortType]);

  // 🔹 Фильтр
 // 🔹 Фильтр (Main.tsx)
const filteredCars = useMemo(() => {
  if (selectedBrands.length === 0) return sortedCars;
  return sortedCars.filter(car => {
    const brandName = car.model.split(" ")[0];
    return selectedBrands.includes(brandName);
  });
}, [sortedCars, selectedBrands]);


  return (
    <div>
      <Brends brands={brands} onBrandChange={setSelectedBrands} />
      <Sort sortType={formData.sortType} onSortChange={handleSortChange} resetTrigger={resetTrigger} />
      <Tabl cars={filteredCars} onDelete={deleteCarHandler} onClearFilters={handleClearFilters} />
    </div>
  );
};

export default Main;
