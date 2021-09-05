import React from 'react'
import Affair from './Affair'
import {AffairType} from './HW2'
import style from './style/style.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (param: 'all' | 'high' | 'low' | 'middle') => void
    deleteAffairCallback: (param: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            id={a._id}
            affair={a.name}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={style.affairs}>

            {mappedAffairs}
            <div className={style.affairs__buttonsBlock}>
                <button onClick={setAll} className={style.affairs__button}>All</button>
                <button onClick={setHigh} className={style.affairs__button}>High</button>
                <button onClick={setMiddle} className={style.affairs__button}>Middle</button>
                <button onClick={setLow} className={style.affairs__button}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
