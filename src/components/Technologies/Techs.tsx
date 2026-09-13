import type { TechType } from "../Type/TechType";
import { useState } from "react";

interface TechsProps {
    techData: TechType[];
}

const Techs = ({ techData }: TechsProps) => {
    // console.log('YourStack', techData)
    const [addedTechnologies, setAddedTechnologies] = useState<Set<string>>(new Set());

    const handleAddToStack = (technologyName: string) => {
        if (addedTechnologies.has(technologyName)) {
            alert(`${technologyName} is already added to your stack.`);
            return;
        }

        setAddedTechnologies((currentTechnologies) => {
            const updatedTechnologies = new Set(currentTechnologies);
            updatedTechnologies.add(technologyName);
            return updatedTechnologies;
        });
    };

    return (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {techData.map((techdataList: TechType) => {
                const isAdded = addedTechnologies.has(techdataList.name);

                return (
                    <div key={techdataList.name} className=" w-[288px] rounded-xl p-4 bg-white transition-all duration-200 border border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-pink-300">
                        <div className="flex items-center justify-between">
                            <img
                                alt="React"
                                className="w-7 h-7 object-contain"
                                src={techdataList.logo}
                            />

                            <span className="text-[9px] px-2 py-1 rounded-full bg-pink-50 text-pink-400">
                                {techdataList.badge}
                            </span>
                        </div>

                        <h3 className="text-sm font-bold text-gray-800 mt-3">{techdataList.name}</h3>

                        <p className="text-[10px] text-gray-500 leading-4 mt-2 min-h-[48px]">
                            {techdataList.description}
                        </p>

                        <div className="flex items-center justify-between mt-3 gap-1">
                            <span className="text-[8px] bg-gray-100 px-2 py-1 rounded">{techdataList.category}</span>

                            <span className="text-[8px] text-gray-500">{techdataList.level}</span>

                            <span className="flex items-center gap-1 text-[9px] text-gray-600">
                              <span className="text-yellow-500 text-[10px]">★</span>
                                {techdataList.rating}
                            </span>
                        </div>

                        <button 
                        onClick={() => handleAddToStack(techdataList.name)}
                        className="w-full mt-3 py-2 rounded-md text-[9px] font-medium text-white transition-all duration-200 bg-[#0A0F1D] hover:brightness-110 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0">
                            {isAdded ? 'Added to Stack' : 'Add to Stack'}
                        </button>
                    </div>
                )
            })}
        </div>
    );
};

export default Techs;