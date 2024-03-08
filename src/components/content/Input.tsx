import './input.scss';

import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks"

import { setName } from '../../slicers/ContentSlicer';

export default function Input() {

    const { theme } = useAppSelector(state => state.theme)
    const { name } = useAppSelector(state => state.content)
    const dispatch = useAppDispatch()

    const handleUpdateName = (e: any) => {
        dispatch(setName(e.target.value))
    }

    return (
        <section id="input" className={theme}>
            <h2>Input Elements</h2>
            <h3>
                Text
            </h3>
            <div className="preview">
                <input type="text" name="name" value={name} onChange={handleUpdateName} placeholder='Name'/>
                <div id='group1'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={handleUpdateName}/>
                </div>
                <div id='group2'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={handleUpdateName}/>
                </div>
                <div id='group3'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={handleUpdateName}/>
                </div>
            </div>
            {/* <h3>
                Sample Description
            </h3>
            <div className="preview">
                sample
            </div> */}
        </section>
    )
}
