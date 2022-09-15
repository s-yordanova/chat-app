import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg" alt="" />
        <div className="userChatInfo">
          <span>Tonya</span>
          <p>Let's go to eat</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://st3.depositphotos.com/4487369/13149/i/600/depositphotos_131491354-stock-photo-portrait-of-beautiful-girl-on.jpg" alt="" />
        <div className="userChatInfo">
          <span>Sisi</span>
          <p>What are you doin?</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://media.istockphoto.com/photos/depressed-girl-at-home-picture-id1165709528?k=20&m=1165709528&s=170667a&w=0&h=cIbwcyOjr0m4lWmTFUn8kql7WEc-QkSimkYljCWVlLU=" alt="" />
        <div className="userChatInfo">
          <span>Anna</span>
          <p>How are you?</p>
        </div>
      </div>
    </div>
  )
}

export default Chats