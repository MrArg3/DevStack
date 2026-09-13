import banner from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="w-full md:w-1/2">

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                            Build Your Ideal<br />
                            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mt-4 text-sm leading-6 text-gray-500 max-w-lg">
                            Explore frontend, backend, database, and tooling options, compare them side by side, and build the perfect technology stack for your next project.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 text-white text-sm font-medium px-5 py-2.5 rounded-md inline-block transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95">
                                Explore Technologies
                            </a>

                            <a className="border border-gray-300 text-gray-600 text-sm px-6 py-2.5 rounded-md inline-block transition-all duration-200 hover:border-pink-400 hover:text-pink-500 hover:bg-pink-50 hover:-translate-y-1 hover:shadow-sm active:translate-y-0 active:scale-95">
                                Learn More
                            </a>
                        </div>
                    </div>
            
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img alt="Development Stack" className="w-[250px] md:w-[350px] transition-transform duration-300 hover:scale-105" src={banner} />
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Banner;