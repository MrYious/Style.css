import './home.scss'

import Component from '../components/content/Component';
import { FaAnglesDown } from "react-icons/fa6";
import { useAppSelector } from '../hooks/useReduxHooks'

export default function Home() {
  const {theme} = useAppSelector(state => state.theme)

  const list = [
    {id: '#input', name: 'Inputs'},
    {id: '#button', name: 'Buttons'},
    {id: '#alert', name: 'Alerts'},
    {id: '#card', name: 'Cards'},
    {id: '#navigation', name: 'Navigation'},
    {id: '#form', name: 'Forms'},
    {id: '#modal', name: 'Models'},
    {id: '#tab', name: 'Tabs'},
    {id: '#accordion', name: 'Accordion'},
    {id: '#table', name: 'Tables'},
    {id: '#date_time', name: 'Date and Time Picker'},
    {id: '#menu', name: 'Dropdown'},
    {id: '#tag_badge', name: 'Tags and Badges '},
    {id: '#footer', name: 'Footer'},
    {id: '#progress', name: 'Progress Bar'},
  ]

  return (
    <>
      <main className={theme}>
        <h1>Customized Styles for Components</h1>
        <p>Welcome to our showcase of various components with different customization! We showcase beautiful and functional components crafted for websites. Take a look at our collection below</p>
        <a href='#collection'>
          <FaAnglesDown />
        </a>
      </main>
      <div id='collection' className={theme}>
        <aside>
          <ul>
            {
              list.map(link =>
                <li key={link.id}><a href={link.id}>{link.name}</a></li>
              )
            }
          </ul>
        </aside>
        <div>
          <Component />
          <Component />
        </div>
      </div>
    </>
  )
}
