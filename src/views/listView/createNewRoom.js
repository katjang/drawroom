class CreateNewRoom {
    constructor(){
        this.el = $('.create-new');
        $('input[type=button]', this.el).on('click', this.createRoom)
    }
    createRoom(){
        window.location = window.location.href + '/'+$('#roomName').val();
    }
}
export default CreateNewRoom
