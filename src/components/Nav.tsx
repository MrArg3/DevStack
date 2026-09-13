import logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <div>
                    <img src={logo} alt="Logo" className="h-8 w-auto" />
                </div>

                <div>
                    <ul className="flex items-center gap-7 text-sm">
                        <li>
                            <a href="#" className="text-pink-500 font-semibold hover:text-pink-700 transition">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#" className="text-gray-600 hover:text-pink-500 transition">
                                Technologies
                            </a>
                        </li>

                        <li>
                            <a href="#" className="text-gray-600 hover:text-pink-500 transition">
                                Projects
                            </a>
                        </li>

                        <li>
                            <a href="#" className="text-gray-600 hover:text-pink-500 transition">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#" className="text-gray-600 hover:text-pink-500 transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex justify-between">
                    <button className="text-xs md:text-sm text-gray-600 px-2 hover:text-pink-500 transition">
                        Sign In
                    </button>

                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs md:text-sm px-4 py-2 rounded-full transition-all hover:brightness-110 hover:shadow-md active:scale-95">
                        Sign Up
                    </button>
                </div>


                {/* <div className="flex items-center gap-2 md:flex-1 md:justify-end">
                    <button className="text-xs md:text-sm text-gray-600 px-2 hover:text-pink-500 transition">
                        Sign In
                    </button>

                    <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs md:text-sm px-4 py-2 rounded-full transition-all hover:brightness-110 hover:shadow-md active:scale-95">
                        Sign Up
                    </button>
                </div> */}


            </div>
        </nav>

    );
};

export default Navbar;