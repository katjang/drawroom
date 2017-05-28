import CanvasSetting from "./CanvasSetting";
import HelpFunctions from "../../HelpFunctions";

class ColorSelector extends CanvasSetting{
    constructor(canvas){
        super(canvas, 'color');
        this.selectEl = $('.colorSelector');
        this.image = $('img', this.selectEl);

        setTimeout(() => this.initialiseColorSelector(), 100);

    }
    initialiseColorSelector(){
        this.selectColorCanvas = document.createElement('canvas');
        this.selectColorCanvas.width = this.image.width();
        this.selectColorCanvas.height = this.image.height();
        this.selectColorCanvas.getContext('2d').drawImage(this.image[0], 0, 0, this.image.width(), this.image.height());

        this.image.on('mousemove', (e) => this.hoverHandler(e));
        this.image.on('click', (e) => this.clickHandler(e));
    }
    clickHandler(e){
        let pixelData = this.selectColorCanvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
        let hexColor = HelpFunctions.rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
        $('.selectedColorDisplay', this.selectEl).css('background-color', hexColor);
        this.canvas.setSelectedColor(hexColor);
    }
    hoverHandler(e){
        let pixelData = this.selectColorCanvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
        $('.red-display', this.selectEl).text(pixelData[0]);
        $('.green-display', this.selectEl).text(pixelData[1]);
        $('.blue-display', this.selectEl).text(pixelData[2]);
        $('.colorDisplay', this.selectEl).css('background-color', HelpFunctions.rgbToHex(pixelData[0], pixelData[1], pixelData[2]));
    }
    onClick(e){
        this.selectEl.toggle();
        this.el.toggleClass('selected-tool');
        this.active = !this.active;
    }
}
export default ColorSelector;
