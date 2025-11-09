
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";
import { useState, useEffect } from "react";

interface BrendsProps {
  brands: string[];
  onBrandChange: (selected: string[]) => void;
}

const Brends = ({ brands, onBrandChange }: BrendsProps) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  
  useEffect(() => {
    setSelectedBrands(prev => prev.filter(b => brands.includes(b)));
  }, [brands]);

  const handleCheckboxChange = (brand: string, checked: boolean) => {
    let updated: string[];
    if (checked) {
      updated = [...selectedBrands, brand];
    } else {
      updated = selectedBrands.filter(b => b !== brand);
    }

    setSelectedBrands(updated);
    onBrandChange(updated);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm m-6 border border-gray-100 flex flex-col items-start mr-[200px] ml-[200px]">
      <h2 className="text-xl font-normal mb-4 text-gray-800">Car Brands</h2>
      <div className="grid grid-cols-5 gap-y-3 gap-x-4 min-h-16">
        {brands.map(brand => (
          <div key={brand} className="flex items-center space-x-2 mb-2">
            <Checkbox
              id={`brand-${brand}`}
              checked={selectedBrands.includes(brand)}
              onCheckedChange={checked => handleCheckboxChange(brand, !!checked)}
              className="border-gray-400 w-4 h-4"
            />
            <Label htmlFor={`brand-${brand}`} className="text-base font-normal cursor-pointer">
              {brand}
            </Label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brends;
