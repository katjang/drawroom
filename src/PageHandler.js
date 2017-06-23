class PageHandler{
    constructor(){
        this.pages = new Map();
    }
    goto(name){
        let pagesArray = [];
        for(let [key, value] of this.pages){
            pagesArray.push(value);
        }
        let promises = pagesArray.map((obj) => obj.hidePage());
        Promise.all(promises).then(() => {this.pages.get(name).showPage()});
    }
    addPage(page){
        this.pages.set(page.name, page);
    }
}
export default (new PageHandler);