import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";

type SortType = 'no-sorting' | 'low-to-high' | 'high-to-low';

interface SortProps {
  sortType: SortType;
  onSortChange: (type: SortType) => void;
  resetTrigger: boolean; // бир жолу гана
}

const Sort = ({ sortType, onSortChange, resetTrigger }: SortProps) => {
  
  const sortingOptions: { id: SortType; label: string }[] = [
    { id: 'no-sorting', label: 'No sorting' },
    { id: 'low-to-high', label: 'Price: Low to High' },
    { id: 'high-to-low', label: 'Price: High to Low' },
  ];

  // resetTrigger боюнча useEffect
  useEffect(() => {
    if (resetTrigger) {
      onSortChange('no-sorting');
    }
  }, [resetTrigger, onSortChange]);

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm m-6 border border-gray-100 mr-[200px] ml-[200px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-normal text-gray-800">Sort by Price</h2>
       
      </div>

      <div className="grid grid-cols-3 gap-x-8">
        {sortingOptions.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox
              id={option.id}
              checked={sortType === option.id}
              onCheckedChange={(checked: boolean | "indeterminate") =>
                onSortChange(checked === true ? option.id : 'no-sorting')
              }
              className="border-gray-400 data-[state=checked]:bg-black data-[state=checked]:text-white"
            />
            <Label
              htmlFor={option.id}
              className="text-base font-normal text-gray-700 cursor-pointer"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sort;
