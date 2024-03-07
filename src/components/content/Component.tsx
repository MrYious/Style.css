import './component.scss';

import { useAppSelector } from "../../hooks/useReduxHooks"

export default function ComponentTemplate() {

    const { theme } = useAppSelector(state => state.theme)

    return (
        <section id="sampleID" className={theme}>
            <h2>This is a sample Title</h2>
            <p>
                Sample Description
            </p>
            <p>
                Sample Description
            </p>
            <div className="preview">
                sample
            </div>
            <div></div>
        </section>
    )
}
