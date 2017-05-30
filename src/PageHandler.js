class PageHandler{
    goto(id){
        $('.page').stop().fadeOut({complete: () => this.showPage(id)})
    }
    showPage(id){
        $('#'+id+'-page').fadeIn();
        App.events.trigger('initialize'+id);
    }
}
export default (new PageHandler);