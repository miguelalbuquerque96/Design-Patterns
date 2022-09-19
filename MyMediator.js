function participant(name){
    this.name = name;
    this.chatroom = null;
}
participant.prototype= {
    send: function (message,to) {
       chatroom.send(message,this,to)    
    },
    receive:function (message,from) {
        console.log(from.name + " to "+ this.name +message );
    } 
}

function ChatRoom(){
    var participants={}
    return {
        register: function(participant){
            participants[participant.name] = participant
            participant.chatroom = this;
        },
        send(message,from,to){
            if(participants[to])
            to.receive(message,from)
            else{
                for(key in participants){
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    }
}