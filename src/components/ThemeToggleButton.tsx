import './themetogglebutton.scss'

import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggleButton() {

    return(<div className="toggleButton light">
        <button>
            <FaMoon />
        </button>
        <button>
            <FaSun />
        </button>
    </div>)
}