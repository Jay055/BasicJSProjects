
// create chatroom class
class Chatroom {
    constructor(room, username){
        this.room = room; 
        this.username = username; 
        this.chats = db.collection('chats'); 
        // create a value without setting it up yet
        this.unsub;
    }
   
   // Add chat function
    async addChat(message){
        // format a chat object 
        const now = new Date(); 
        const chat = {
            message:message,
            username:  this.username,
            room:this.room, 
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        // save the chat document 
        const response = await this.chats.add(chat);
        return response; 
        
    }
    getChats(callback){ 
        //  set this.unsub
        this.unsub = this.chats
        // complex query with where 
        // we use == in fire store, we get from only the specified room 
          .where('room', '==', this.room)
           .orderBy('created_at')
 

            .onSnapshot(snapshot => {
            // get the document changes from the snap shot 
            snapshot.docChanges().forEach(change => { 
                if(change.type === 'added'){ 
                    //update the ui 
                    callback(change.doc.data());
                }

            });
        });
    }
    updateName(username){ 
        this.username = username;
        // storing username in local storage 
        localStorage.setItem('username', username); 

    }
    updateRoom(room){ 
        this.room = room; 
        console.log(`${this.room} room has been updated `); 
        // unsub to update changes to the new room, confirm if unsub has value 
        if(this.unsub){
        this.unsub(); 
        }
    }
}
