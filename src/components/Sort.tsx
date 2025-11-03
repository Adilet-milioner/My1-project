import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Sort = () => {

  const sortingOptions = [
    { id: 'no-sorting', label: 'No sorting', checked: true },
    { id: 'low-to-high', label: 'Price: Low to High', checked: false },
    { id: 'high-to-low', label: 'Price: High to Low', checked: false },
  ];

  return (
    // Сүрөттөгүдөй ак фондогу, көлөкөсү бар контейнер. h-[166px] жана w-[608px] арбитрардык маани катары.
    <section 
      className="bg-white p-6 rounded-lg shadow-sm m-6 border border-gray-100 mr-[200px] ml-[200px] "
    >
      
      {/* Аталышы */}
      <h2 className="text-xl font-normal mb-6 text-gray-800">
        Sort by Price
      </h2>

      {/* Опциялардын тобу - 3 элементтин аралыгын Grid же Flex менен жөндөө */}
      {/* 3 мамычалуу Grid колдонобуз, анткени ал сүрөттөгү аралыкты тууроого ыңгайлуу */}
      <div className="grid grid-cols-3 gap-x-8"> 
        
        {sortingOptions.map((option) => (
          <div key={option.id} className="flex items-center">
            {/* ЭСКЕРТҮҮ: Shadcn Checkbox колдонулганда, анын стилдери демейки боюнча колдонулат. */}
            <div className="flex items-center space-x-2">
                <Checkbox
                    id={option.id}
                    // Сүрөттөгүдөй тандоо үчүн `defaultChecked`
                    defaultChecked={option.checked}
                    // Shadcn Checkbox стилдерин ыңгайлаштыруу (сүрөттө кара фон)
                    className="border-gray-400 data-[state=checked]:bg-black data-[state=checked]:text-white"
                />
                {/* Radix UI Label компонентин колдонуу */}
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
