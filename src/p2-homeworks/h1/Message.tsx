import React from 'react'
import mStyle from './Message.module.css'

type propsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: propsType) {
    return (
        <div>
            <div className={mStyle.message__wrapper}>
                <div className={mStyle.message__avatar} >
                    <img src={props.avatar} alt="User avatar photo" className={mStyle.message__img}/>
                </div>
                <div className={mStyle.message__Langle}>
                </div>
                <div className={mStyle.message__content}>
                    <div className={mStyle.message__name}>
                        {props.name}
                    </div>
                    <div className={mStyle.message__data}>
                        <div className={mStyle.message__text}>
                            {props.message}
                        </div>
                        <div className={mStyle.message__time}>
                            {props.time}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
