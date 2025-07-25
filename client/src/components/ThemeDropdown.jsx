import { useEffect } from "react";

const ThemeDropdown = () => {
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "default";
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const handleThemeChange = (e) => {
        const theme = e.target.value;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme); // Save theme choice
    };

    return (
        <div className="dropdown  mr-5">
            <div tabIndex={0} role="button" className="btn m-1">
                Theme
                <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>

            <ul tabIndex={0} className="dropdown-content bg-base-300 w-28 rounded-box z-30  p-2 shadow-2xl">
                {["light", "synthwave", "luxury", "black"].map((theme) => (
                    <li key={theme} className="z-30">
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller  btn btn-sm btn-block btn-ghost justify-start z-30"
                            aria-label={theme}
                            value={theme}
                            onChange={handleThemeChange}
                            defaultChecked={localStorage.getItem("theme") === theme}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ThemeDropdown;
