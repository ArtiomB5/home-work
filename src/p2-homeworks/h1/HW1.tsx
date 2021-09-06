import React from 'react'
import Message from "./Message";


const messageData = {
  avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
  name: 'Some Name',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae erat convallis, dapibus ipsum ac, semper est. Praesent sagittis, dolor ac eleifend sodales, ipsum risus vulputate eros, ut suscipit mi lorem a nibh. Vivamus congue elit eros, eu venenatis elit auctor nec. Integer blandit sagittis dapibus. Donec a vulputate tortor. Praesent felis ante, ullamcorper in metus in, condimentum pulvinar arcu. Integer magna mi, eleifend gravida accumsan sit amet, hendrerit sed nibh. Integer odio tellus, euismod a scelerisque nec, facilisis vel mi. Pellentesque finibus dolor non interdum faucibus. Maecenas in nulla facilisis, lobortis felis quis, facilisis enim. Sed vitae risus neque. Integer molestie porttitor turpis, quis tempor tellus tristique non. Etiam congue dolor ac purus condimentum dignissim. Nam eget nibh neque. Nam suscipit dictum diam. Nullam elementum rutrum risus, at facilisis diam eleifend ac.',
  time: '22:00',
}

function HW1() {
  const borderStyle = {
    borderBottom: '1px solid #cf4936',
    padding: '10px'
  }
  return (
    <div style={borderStyle}>
      homeworks 1
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
    </div>
  )
}

export default HW1
