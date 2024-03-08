import './home.scss'

import Component from '../components/content/Component';
import { FaAnglesDown } from "react-icons/fa6";
import Input from '../components/content/Input';
import { useAppSelector } from '../hooks/useReduxHooks'

export default function Home() {
  const {theme} = useAppSelector(state => state.theme)

  const list = [
    {id: 'input', name: 'Inputs'},
    {id: 'accordion', name: 'Accordion'},
    {id: 'alert', name: 'Alerts'},
    {id: 'button', name: 'Buttons'},
    {id: 'card', name: 'Cards'},
    {id: 'date_time', name: 'Date and Time Picker'},
    {id: 'form', name: 'Forms'},
    {id: 'progress', name: 'Progress Bar'},
    {id: 'modal', name: 'Models'},
    {id: 'menu', name: 'Dropdown'},
    {id: 'navigation', name: 'Navigation'},
    {id: 'tab', name: 'Tabs'},
    {id: 'table', name: 'Tables'},
    {id: 'tag_badge', name: 'Tags and Badges '},
  ]

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    const offset = 50;
    if(section){
      const sectionPosition = section.offsetTop - offset;

      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <>
      <main className={theme}>
        <h1>Customized Styles for Components</h1>
        <p>Welcome to our showcase of various components with different customization! We showcase beautiful and functional components crafted for websites. Take a look at our collection below</p>
        <button onClick={()=>{scrollTo('collection')}}>
          <FaAnglesDown />
        </button>
      </main>
      <div id='collection' className={theme}>
        <aside>
          <ul>
            {
              list.map(link =>
                <li key={link.id}><button onClick={()=>{scrollTo(link.id)}}>{link.name}</button></li>
              )
            }
          </ul>
        </aside>
        <div>
          <Input />
          <Component />
          <Component />
        </div>
      </div>
    </>
  )
}
