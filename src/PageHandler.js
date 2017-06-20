class PageHandler{
    constructor(){
        this.pages = new Map();
    }
    goto(name){
        let promises = Array.from(this.pages.values()).map((obj) => {
            return obj.hidePage();
        });
        Promise.all(promises).then(() => {this.pages.get(name).showPage()});
    }
    addPage(page){
        this.pages.set(page.name, page);
    }
}
export default (new PageHandler);