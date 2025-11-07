import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";

const Brends = () => {
  const brands = [
    'Lexus', 'Ford', 'Hyundai', 'Nissan', 'Volkswagen',
    'BMW', 'Honda', 'Mercedes-Benz', 'Toyota', '' 
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm m-6 border border-gray-100 mr-[200px] ml-[200px] flex justify-between flex-col items-start">
      
      <h2 className="text-xl font-normal mb-4 text-gray-800">
        Car Brands
      </h2>

      <div 
        className="flex justify-between  gap-30 "
      >
        {Array.from({ length: 5 }).map((_, colIndex) => {
          const topBrand = brands[colIndex];        
          const bottomBrand = brands[colIndex + 5]; 

          return (
            <div key={colIndex} className="flex flex-col space-y-4 ">
              
              {topBrand && (
                <div className="flex items-center space-x-2 ">
                  <Checkbox 
                    id={`brand-${topBrand}`} 
                    className="border-gray-400 w-4 h-4" 
                  />
                  <Label htmlFor={`brand-${topBrand}`} className="text-base font-normal cursor-pointer">
                    {topBrand}
                  </Label>
                </div>
              )}
              
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
              
              {topBrand && !bottomBrand && <div className="h-[24px]" />}
            </div>
          );
        })}
      </div>
    </section>
  );
};
  


export default Brends;
