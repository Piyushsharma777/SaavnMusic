import { useState } from "react";

const Navbar = () => {
    const [language, setLanguage] = useState("English");

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <nav className="bg-[#1D2021] p-4 flex items-center justify-between">
            <div className="flex items-center">
                {/* Jio Saavn Logo and Name */}
                <img src="https://staticweb6.jiosaavn.com/web6/jioindw/dist/1738823255/_i/favicon.png" alt="Jio Saavn" className="h-8 mr-2" />
                <span className="text-white text-xl font-semibold">JioSaavn</span>
            </div>

            {/* Language Selection Dropdown */}
            <select
                value={language}
                onChange={handleLanguageChange}
                className="bg-[#1D2021] text-[#c1bbb3] rounded-full px-1 py-1 outline-none text-right"
            >
                <option value="Language">Languages</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
            </select>
        </nav>
    );
};

export default Navbar;
