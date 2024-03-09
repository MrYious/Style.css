import './flex.scss'

import { useAppSelector } from "../hooks/useReduxHooks"

export default function Flex() {
  const { theme } = useAppSelector(state => state.theme)
  const flexSettings = useAppSelector(state => state.flex)

  const handleUpdateDirection = (e: any) => {
    
  }
  const handleUpdateWrap = (e: any) => {
    
  }
  const handleUpdateAlignItem = (e: any) => {
    
  }
  const handleUpdateJustifyContent = (e: any) => {
    
  }
  const handleUpdateGap = (e: any) => {
    
  }

  return (
    <main className={theme} id="flex">
      <section id='display'>

      </section>
      <aside id='controls'>
        <h2>Flex Settings</h2>
        <button onClick={()=>{}} >Add Flex Item</button>
        <div>
          <label htmlFor="name">Flex Direction</label>
          {/* <input type="text" name="name" value={name} onChange={handleUpdateName}/> */}
        </div>
        <div>
          <label htmlFor="name">Flex Wrap</label>
          {/* <input type="text" name="name" value={name} onChange={handleUpdateName}/> */}
        </div>
        <div>
          <label htmlFor="name">Justify Content</label>
          {/* <input type="text" name="name" value={name} onChange={handleUpdateName}/> */}
        </div>
        <div>
          <label htmlFor="name">Align Items</label>
          {/* <input type="text" name="name" value={name} onChange={handleUpdateName}/> */}
        </div>
        <div>
          <label htmlFor="name">Gap</label>
          <input type="number" name="name" value={flexSettings.gap} onChange={handleUpdateGap}/>
        </div>
      </aside>
    </main>
  )
}
