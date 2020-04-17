// Changing rooms by attaching event listeners.

// dom queries 
const chatList = document.querySelector('.chat-list');
// sending new chats 
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
// rooms 
const rooms = document.querySelector('.chat-rooms');

// add a new chat 
newChatForm.addEventListener('submit', e=> {
    e.preventDefault()
    const message = newChatForm.message.value.trim(); 
    chatroom.addChat(message)
     .then(() => newChatForm.reset())
     .catch(err => console.log(err))
});

// update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault()
    // update name via chatroom 
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    // reset the form 
    newNameForm.reset(); 
    // show then hide the update message 
    updateMssg.innerText =  `Your name was updated to ${newName}`;
    setTimeout(() => updateMssg.innerText = '', 3000); 
});

// update the chat room 
rooms.addEventListener('click', e=> {
  
    if(e.target.tagName === 'BUTTON'){ 
        // calling the clear method from ui 
        chatUI.clear(); 
        // update the room from the ID attribute 
        chatroom.updateRoom(e.target.getAttribute('id'))    
        // setting up a listener for the new room, getting the chat data 
        chatroom.getChats(chat => chatUI.render(chat));
    }
})




// check local storage for existing name 
const username = localStorage.username ? localStorage.username : 'anon'; 


// class instances
const chatUI = new ChatUI(chatList);
// passing username parameter 
const chatroom = new Chatroom('gaming', username); 

// call back function 
// get chats and render 
chatroom.getChats((data) => { 
    // data single chat object
    chatUI.render(data);
})