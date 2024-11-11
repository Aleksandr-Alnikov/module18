import {useContext} from "react";
import {ThemeContext} from "../../App";

const SwitchTheme = () => {

    const currentTheme = useContext(ThemeContext);

    const handleClick = () => {
        if (currentTheme?.theme === 'dark') {
            currentTheme.setTheme('light');
        } else {
            currentTheme?.setTheme('dark');
        }
    };

    return (
        <div onClick={handleClick}>{currentTheme?.theme}</div>
    );
};


export  default SwitchTheme;