import Tool from "./Tool";

class Bucket extends Tool{
    constructor(model){
        super(model);
        this.name = 'Bucket';
        this.newPixels = [];
    }
    MouseDownHandler(e) {
        let indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
        if (indices) {
            let pixels = this.model.get("pixels");
            this.checkedPixels = [];
            let clickedColor = pixels[indices.x][indices.y];

            let width = this.model.get("width");
            let height = this.model.get("height");

            for(let i = 0; i < width; i ++){
                this.checkedPixels[i] = [];
                for(let j = 0; j < height; j++){
                    this.checkedPixels[i][j] = false;
                }
            }

           this.checkPixel(clickedColor, pixels, indices.x, indices.y);

            App.events.trigger("toolUpdatePixels", this.newPixels);
            this.newPixels = [];
        }
    }
    checkPixel(checkColor, pixels, x, y){
        if(this.checkedPixels[x][y]) return;

        if(pixels[x][y] == checkColor){
            this.newPixels.push({x: x, y: y, color: this.model.get('selectedColor')});
            this.checkedPixels[x][y] = true;
            if(x+1 < this.model.get("width") &&!this.checkedPixels[x+1][y]) {
                this.checkPixel(checkColor, pixels, x+1, y);
            }
            if(x-1 >= 0 && !this.checkedPixels[x-1][y]){
                this.checkPixel(checkColor, pixels, x-1, y);
            }
            if(y+1 < this.model.get("height") && !this.checkedPixels[x][y+1]){
                this.checkPixel(checkColor, pixels, x, y+1);
            }
            if(y-1 >= 0 && !this.checkedPixels[x][y-1]){
                this.checkPixel(checkColor, pixels, x, y-1);
            }
        }
    }
}
export default Bucket;