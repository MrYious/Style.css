import './themetogglebutton.scss'

import { FaMoon, FaSun } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '../hooks/useReduxHooks';

import { toggleTheme } from '../slicers/ThemeSlicer';

export default function ThemeToggleButton() {

    const { theme } = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()

    const handleToggleTheme = () => {
        dispatch(toggleTheme())
    }

    return(<button className={`toggleButton ${theme}`} onClick={handleToggleTheme}>
        <span>
            {
                theme === 'light' ? (
                    <FaSun id='light'/>
                ) : (
                    <FaMoon id='dark'/>
                )
            }
        </span>
    </button>)
}