import { use, useState } from "react";
import type { TechType } from "../Type/TechType";
import YourStack from "./Techs";
import { toast } from "react-toastify";

interface TechProps {
    techData: Promise<TechType[]>;
}

const Technologies = ({ techData }:  TechProps) => {
    const techDatas = use(techData);
    const [addedTechnologies, setAddedTechnologies] = useState<Set<string>>(new Set());

    const handleAdd = (technology: TechType) => {
        setAddedTechnologies((currentTechnologies) => {
            const updatedTechnologies = new Set(currentTechnologies);
            updatedTechnologies.add(technology.name);   
            return updatedTechnologies;
        });
        toast.success(`${technology.name} added to your stack.`);
    };

    const handleRemove = (technology: TechType) => {
        setAddedTechnologies((currentTechnologies) => {
            const updatedTechnologies = new Set(currentTechnologies);
            updatedTechnologies.delete(technology.name);
            return updatedTechnologies;
        });
        toast.info(`${technology.name} removed from your stack.`);
    };

    const handleRemoveAll = () => {
        if (addedTechnologies.size === 0) return;

        setAddedTechnologies(new Set());
    toast.info('All technologies removed from your stack.');
    };

    return (
         <section>
            <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Explore the <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">Technologies</span></h2>
                    <p className="text-[10px] text-gray-400 mt-1">Pick technologies to build your ideal development stack.</p>
                </div>

                <div className="flex justify-between">
                    <div>
                        <YourStack
                            techData={techDatas}
                            addedTechnologies={addedTechnologies}
                            onAdd={handleAdd}
                        />
                    </div>
                    <aside className="w-full lg:w-[250px] border border-gray-200 rounded-xl p-4 bg-white h-fit lg:sticky lg:top-24">
                        <h3 className="text-sm font-bold text-gray-800">Your Stack</h3>
                        <h4 className="text-[10px] text-gray-400">
                            {addedTechnologies.size} Technology{addedTechnologies.size === 1 ? '' : 'ies'} Selected
                        </h4>
                        <div className="mt-3 flex flex-col gap-2">
                            {techDatas.filter((technology) => addedTechnologies.has(technology.name)).map((technology) => (
                                <div key={technology.name} className="flex items-center gap-2 rounded-md bg-gray-50 p-2">
                                    <img src={technology.logo} alt={technology.name} className="h-6 w-6 object-contain" />
                                    <span className="flex-1 text-[10px] font-medium text-gray-700">{technology.name}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemove(technology)}
                                        aria-label={`Remove ${technology.name} from your stack`}
                                        className="text-lg leading-none text-gray-400 hover:text-red-500"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                            {addedTechnologies.size === 0 && (
                                <p className="rounded-md border border-dashed border-gray-300 p-3 text-center text-[10px] text-gray-400">
                                    Your stack is empty.
                                </p>
                            )}
                        </div>
                        {addedTechnologies.size > 0 && (
                            <button
                                type="button"
                                onClick={handleRemoveAll}
                                className="mt-3 w-full rounded-md border border-red-500 bg-transparent py-2 text-[9px] font-medium text-red-500 hover:bg-red-50"
                            >
                                Remove All
                            </button>
                        )}
                    </aside>
                </div>
            </div>
         </section>
    );
};

export default Technologies;