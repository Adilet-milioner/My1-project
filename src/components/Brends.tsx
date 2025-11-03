import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";

const Brends = () => {
// Сүрөттөгү бренддердин макетин 5 мамычага/2 катарга ылайыктуу тизме
  const brands = [
    // 1-катар
    'Lexus', 'Ford', 'Hyundai', 'Nissan', 'Volkswagen',
    // 2-катар
    'BMW', 'Honda', 'Mercedes-Benz', 'Toyota', '' // 5-мамычанын асты бош
  ];

  return (
    // Сүрөттөгүдөй ак фондогу, бир аз көлөкөсү бар контейнер
    <section className="bg-white p-6 rounded-lg shadow-sm m-6 border border-gray-100 mr-[200px] ml-[200px] flex justify-between flex-col items-start">
      
      {/* Аталышы */}
      <h2 className="text-xl font-normal mb-4 text-gray-800">
        Car Brands
      </h2>

      {/* 5 мамычалуу торчо макети */}
      <div 
        className="flex justify-between  gap-30 " // Горизонталдык аралыкты (gap-x-16) сүрөткө жакындаттык
      >
        {/* 5 мамычанын ар бирин өзүнчө иштеп чыгуу */}
        {Array.from({ length: 5 }).map((_, colIndex) => {
          const topBrand = brands[colIndex];        // 1-катардагы элемент (Lexus, Ford...)
          const bottomBrand = brands[colIndex + 5]; // 2-катардагы элемент (BMW, Honda...)

          return (
            // Ар бир мамычанын ичиндеги 2 элемент (вертикалдык тизме)
            <div key={colIndex} className="flex flex-col space-y-4 ">
              
              {/* 1-катардагы элемент */}
              {topBrand && (
                <div className="flex items-center space-x-2 ">
                  <Checkbox 
                    id={`brand-${topBrand}`} 
                    className="border-gray-400 w-4 h-4" // Сүрөттөгүдөй кичине жана боз чек ара
                  />
                  <Label htmlFor={`brand-${topBrand}`} className="text-base font-normal cursor-pointer">
                    {topBrand}
                  </Label>
                </div>
              )}
              
              {/* 2-катардагы элемент (эгер бар болсо) */}
              {bottomBrand && (
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id={`brand-${bottomBrand}`} 
                    className="border-gray-400 w-4 h-4"
                  />
                  <Label htmlFor={`brand-${bottomBrand}`} className="text-base font-normal cursor-pointer">
                    {bottomBrand}
                  </Label>
                </div>
              )}
              
              {/* Эгерде 2-катарда бренд жок болсо (акыркы мамыча) - орунду сактоо үчүн */}
              {topBrand && !bottomBrand && <div className="h-[24px]" />} {/* Чекбокс жана тексттин бийиктигин тууроо */}
            </div>
          );
        })}
      </div>
    </section>
  );
};
  


export default Brends;
