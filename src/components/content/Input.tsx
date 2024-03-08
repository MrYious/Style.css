import './component.scss';

import { useAppSelector } from "../../hooks/useReduxHooks"

export default function Input() {

    const { theme } = useAppSelector(state => state.theme)

    return (
        <section id="input" className={theme}>
            <h2>Input Elements</h2>
            <h3>
                Sample Description
            </h3>
            <div className="preview">
                sample
            </div>
            <p>
                Sample Description
            </p>
            <div className="preview">
                sample
            </div>
        </section>
    )
}
