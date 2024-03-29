import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import Greeting from './Greeting'


type GreetingContainerPropsType = {
    users: Array<string> // need to fix any
    addUserCallback: (name:string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        setName(event.currentTarget.value);
        setError(false);
    }
    const addUser = () => {
        let inputName = name.trim();
        if (inputName === '') {
            setError(true);
        } else {
            addUserCallback(inputName);// need to fix
            alert(`Hello, ${inputName} !`); // need to fix
            setName('');
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
