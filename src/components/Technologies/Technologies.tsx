import { use} from "react";
import type { TechType } from "../Type/TechType";
import YourStack from "./Techs";

interface TechProps {
    techData: Promise<TechType[]>;
}

const Technologies = ({ techData }:  TechProps) => {
    // console.log(techData);
    const techDatas = use(techData);
    // console.log(techDatas);
    // const [buttonType, setButtonType] = useState('Added to Stack');
    // console.log(techuse);
    return (
         <section>
            <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Explore the <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">Technologies</span></h2>
                    <p className="text-[10px] text-gray-400 mt-1">Pick technologies to build your ideal development stack.</p>
                </div>

                <div className="flex justify-between">
                    <div>
                        <YourStack techData={techDatas} />
                    </div>
                    <aside className="w-full lg:w-[250px] border border-gray-200 rounded-xl p-4 bg-white h-fit lg:sticky lg:top-24">
                        {
                        // techDatas.map(({techdaLists}: TechType) => <li>{techdaLists.name}</li>)
                        }
                    </aside>
                </div>
            </div>
         </section>
    );
};

export default Technologies;