import Tabl from "@/components/Tabl";
import Sort from "../components/Sort";
import Brends from "../components/Brends";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useEffect } from "react";
import { getCars, deleteCar, Car } from "@/components/services/carApi";
import { RootState, AppDispatch } from "@/store"; 


const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Main = () => {
    const dispatch = useDispatch<AppDispatch>(); 

    const cars: Car[] = useAppSelector((state) => state.car.cars);

    useEffect(() => {
        dispatch(getCars());
    }, [dispatch]);

    const deleteCarHendler = (id: number) => { 
        dispatch(deleteCar(id));
    };

    return (
        <div>
            <Brends />
            <Sort />
            <Tabl cars={cars} onDelete={deleteCarHendler} />
        </div>
    );
};

export default Main;