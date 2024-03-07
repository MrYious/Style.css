import './navbar.scss'

import { Link } from "react-router-dom"
import ThemeToggleButton from './ThemeToggleButton'
import { useAppSelector } from '../hooks/useReduxHooks'

export default function NavBar() {

    const theme = useAppSelector(state => state.theme.theme)

    const links = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/flex',
            name: 'Flex Playground'
        },
        {
            path: '/grid',
            name: 'Grid Playground'
        },
    ]

    return(<nav className={`navbar ${theme}`}>
        <h1>
            Style<span className="filetype">.CSS</span>
        </h1>
        <ul className="links">
            {
                links.map(
                    link => <li key={link.name}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                )
            }
        </ul>
        <ThemeToggleButton />
    </nav>)
}