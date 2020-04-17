// render chat templates to the dom 
// clear the list of chats {when the room changes}

class ChatUI{
    constructor(list){
        this.list = list; 
    }
    // updating room with a clear method 
    clear(){ 
        this.list.innerHTML = ''; 

    }

    // responsible for html template we get back and rendering to the dom. data single chat object.
    render(data){
        // changing the timing format
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix: true }
        );
        const html = `
        <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when}</dvi>
        </li>
        `;
        this.list.innerHTML += html
    }
}

