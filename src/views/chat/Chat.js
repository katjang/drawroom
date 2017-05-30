import DataStreamHandler from "../../DataStreamHandler";

class Chat{
    constructor(){
        this.el = $('#chat');
        App.events.on('receivedMessage', (e) => this.handleMessage(e));
        $('#sendMessage', this.el).on('click', this.sendMessage);
        App.events.on('initializeRoom', () => this.init());

        $('input', this.el).on('keydown', (e) => this.handleKeyPress(e));
        $(window).hover(function(event) {
            window.isActive = !event.fromElement;
        });
    }
    init(){
        $('.messages', this.el).empty();
    }
    sendMessage(){
        let input = $('input[type=text]', this.el);
        if(input.val() != ''){
            DataStreamHandler.sendMessage(input.val());
            $('.messages', this.el).append($('<div>').append($('<span>').text("you: " + input.val())));
            input.val('');
        }
        $('.messages', this.el).scrollTop($('.messages', this.el)[0].scrollHeight);
    }
    handleKeyPress(e){
        if(e.keyCode == 13){
            this.sendMessage();
        }
    }
    handleMessage(e){
        let message = e.message;
        let type = e.type;


        $('.messages', this.el).append($('<div>').append($('<span>', {class: type=='server'? 'server-message' : ''}).text(message)));
        $('.messages', this.el).scrollTop($('.messages', this.el)[0].scrollHeight);
        if(window.isActive){
            new Audio('https://hydra-media.cursecdn.com/overwatch.gamepedia.com/4/41/Sombra_-_Boop%21.ogg').play();
        }else{
            new Audio('https://www.freesound.org//data/previews/341/341868_6114721-lq.ogg').play();
        }
    }
}
export default Chat;