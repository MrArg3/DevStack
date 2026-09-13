import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
<footer className="border-t border-gray-100 bg-white">
    <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Brand */}
            <div>
                <img
                    alt="Dev Stack"
                    className="w-[105px]"
                    src={logo}
                />

                <p className="text-[10px] text-gray-500 leading-4 mt-3 max-w-[260px]">
                    Curated tools, technologies, and resources for developers
                    building modern software.
                </p>

                <div className="flex items-center gap-4 mt-5">
                    <a className="text-[10px] text-gray-700 hover:text-pink-500">
                        GitHub
                    </a>
                    <a className="text-[10px] text-gray-700 hover:text-pink-500">
                        Twitter
                    </a>
                    <a className="text-[10px] text-gray-700 hover:text-pink-500">
                        LinkedIn
                    </a>
                </div>
            </div>

            {/* Product */}
            <div>
                <h3 className="text-[10px] font-semibold text-gray-900 uppercase">
                    Product
                </h3>

                <div className="flex flex-col gap-3 mt-4">
                    <a className="text-[10px] text-gray-500 hover:text-pink-500">
                        Home
                    </a>
                    <a className="text-[10px] text-gray-500 hover:text-pink-500">
                        Technologies
                    </a>
                    <a className="text-[10px] text-gray-500 hover:text-pink-500">
                        Projects
                    </a>
                </div>
            </div>

            {/* Company */}
            <div>
                <h3 className="text-[10px] font-semibold text-gray-900 uppercase">
                    Company
                </h3>

                <div className="flex flex-col gap-3 mt-4">
                    <a className="text-[10px] text-gray-500 hover:text-pink-500">
                        About
                    </a>
                    <a className="text-[10px] text-gray-500 hover:text-pink-500">
                        Contact
                    </a>
                    <a className="text-[10px] text-gray-500 hover:text-pink-500">
                        Careers
                    </a>
                </div>
            </div>

            {/* Legal */}
            <div>
                <h3 className="text-[10px] font-semibold text-gray-900 uppercase">
                    Legal
                </h3>

                <div className="flex flex-col gap-3 mt-4">
                    <a className="text-[10px] text-gray-500 hover:text-pink-500">
                        Privacy Policy
                    </a>
                    <a className="text-[10px] text-gray-500 hover:text-pink-500">
                        Terms of Service
                    </a>
                </div>
            </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 mt-8 pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[9px] text-gray-400">
                © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-5">
                <a className="text-[9px] text-gray-400 hover:text-pink-500">
                    Privacy
                </a>
                <a className="text-[9px] text-gray-400 hover:text-pink-500">
                    Terms
                </a>
            </div>
        </div>
    </div>
</footer>
    )
};

export default Footer;