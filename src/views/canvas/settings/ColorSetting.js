import HelpFunctions from "../../../HelpFunctions";
import CanvasSetting from "./CanvasSetting";

const ColorSetting = CanvasSetting.extend({
    initialize: function(){
        this.name = 'color';
        CanvasSetting.prototype.initialize.apply(this, arguments);
        this.selectEl = $('.colorSelector');
        this.image = $('img', this.selectEl);
        setTimeout(() => this.initialiseColorSelector(), 1000);
    },
    initialiseColorSelector: function(){
        this.selectColorCanvas = document.createElement('canvas');
        this.selectColorCanvas.width = this.image.width();
        this.selectColorCanvas.height = this.image.height();
        this.selectColorCanvas.getContext('2d').drawImage(this.image[0], 0, 0, this.image.width(), this.image.height());

        this.image.on('mousemove', (e) => this.hoverHandler(e));
        this.image.on('click', (e) => this.clickHandler(e));
    },
    clickHandler: function(e){
        let pixelData = this.selectColorCanvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
        let hexColor = HelpFunctions.rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
        $('.selectedColorDisplay', this.selectEl).css('background-color', hexColor);
        this.model.set("selectedColor", hexColor);
    },
    hoverHandler: function(e){
        let pixelData = this.selectColorCanvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
        $('.red-display', this.selectEl).text(pixelData[0]);
        $('.green-display', this.selectEl).text(pixelData[1]);
        $('.blue-display', this.selectEl).text(pixelData[2]);
        $('.colorDisplay', this.selectEl).css('background-color', HelpFunctions.rgbToHex(pixelData[0], pixelData[1], pixelData[2]));
    },
    onClick: function(e){
        this.selectEl.toggle();
        this.el.toggleClass('selected-tool');
        this.active = !this.active;
    }
});
export default ColorSetting;
