import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Sort = () => {

  const sortingOptions = [
    { id: 'no-sorting', label: 'No sorting', checked: true },
    { id: 'low-to-high', label: 'Price: Low to High', checked: false },
    { id: 'high-to-low', label: 'Price: High to Low', checked: false },
  ];

  return (
    <section 
      className="bg-white p-6 rounded-lg shadow-sm m-6 border border-gray-100 mr-[200px] ml-[200px] "
    >
      
      <h2 className="text-xl font-normal mb-6 text-gray-800">
        Sort by Price
      </h2>

      <div className="grid grid-cols-3 gap-x-8"> 
        
        {sortingOptions.map((option) => (
          <div key={option.id} className="flex items-center">
            <div className="flex items-center space-x-2">
                <Checkbox
                    id={option.id}
                    defaultChecked={option.checked}
                    className="border-gray-400 data-[state=checked]:bg-black data-[state=checked]:text-white"
                />
                <Label 
                    htmlFor={option.id} 
                    className="text-base font-normal text-gray-700 cursor-pointer"
                >
                    {option.label}
                </Label>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
  

export default Sort
