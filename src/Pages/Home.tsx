import './home.scss'

import { FaAnglesDown } from "react-icons/fa6";
import { useAppSelector } from '../hooks/useReduxHooks'

export default function Home() {
  const {theme} = useAppSelector(state => state.theme)

  return (
    <>
      <main className={theme}>
        <h1>Dynamic Styles for Components</h1>
        <p>Welcome to our dynamic styles for customizing components! We showcase beautiful and functional components crafted for a website. Take a look at our collection below</p>
        <a href='#collection'>
          <FaAnglesDown />
        </a>
      </main>
      <section>
        <aside>
          
        </aside>
        We
      </section>
    </>
  )
}
