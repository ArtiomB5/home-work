import React from 'react'
import style from './style/style.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: any // need to fix any
    id: number
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        return(
            props.deleteAffairCallback(props.id)
        )
    };
    // need to fix

    return (
        <div className={style.affair}>
            <div className={style.affair__content}>{props.affair}</div>
            <button onClick={deleteCallback} className={style.affair__deleteButton}>X</button>
        </div>
    )
}

export default Affair
