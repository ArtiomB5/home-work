import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'


// types
export type UserType = {
  _id: string // need to fix any
  name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<string>>([]) // need to fix any

  const addUserCallback = (name: string) => { // need to fix any
    setUsers([...users, name]) // need to fix
  }

  const borderStyle = {
    borderBottom: '1px solid #cf4936',
    padding: '10px'
  }

  return (
    <div style={borderStyle}>
      homeworks 3

      {/*should work (должно работать)*/}
      <GreetingContainer users={users} addUserCallback={addUserCallback}/>

      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeGreeting/>*/}
    </div>
  )
}

export default HW3
