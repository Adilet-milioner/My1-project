import Tabl from "@/components/Tabl";
import Sort from "../components/Sort";
import Brends from "../components/Brends";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { getCars, deleteCar, Car } from "@/components/services/carApi";
import { RootState, AppDispatch } from "@/store";
import useCarForm from "@/hooks/useCarsData";
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const Main = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cars: Car[] = useAppSelector((state) => state.car.cars);

  const { formData, handleSortChange, resetSort } = useCarForm({
    sortType: "no-sorting",
  });

  const [resetTrigger, setResetTrigger] = useState(false);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const deleteCarHendler = (id: number) => {
    dispatch(deleteCar(id));
  };

  const handleClearFilters = () => {
    resetSort(); 
    setResetTrigger(true);
    setTimeout(() => setResetTrigger(false), 100);
  };

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

  return (
    <div>
      <Brends />

      <Sort
        sortType={formData.sortType}
        onSortChange={handleSortChange}
        resetTrigger={resetTrigger}
      />

      <Tabl
        cars={sortedCars}
        onDelete={deleteCarHendler}
        onClearFilters={handleClearFilters} 
      />
    </div>
  );
};
export default Main;
