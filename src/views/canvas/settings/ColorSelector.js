import {View} from "backbone";
import HelpFunctions from "../../../HelpFunctions";

const ColorSelector = View.extend({
    events: {
        'click img': 'clickHandler',
        'mousemove img': 'hoverHandler'
    },
    initialize: function(){
        App.events.on("toggleColorSelector", () => this.toggle());
        this.selectColorCanvas = document.createElement('canvas');
        this.selectColorCanvas.width = this.$('img').width();
        this.selectColorCanvas.height = this.$('img').height();
        this.selectColorCanvas.getContext('2d').drawImage(this.$('img')[0], 0, 0, this.$('img').width(), this.$('img').height());
        this.$('.selectedColorDisplay').css('background-color', this.model.get('selectedColor')); // changing CSS in javascript is ugly but hard to do with classes.
    },
    toggle: function(){
        this.$el.toggle();
    },
    clickHandler: function(e){
        let pixelData = this.selectColorCanvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
        let hexColor = HelpFunctions.rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
        this.$('.selectedColorDisplay').css('background-color', hexColor);
        this.model.set('selectedColor', hexColor);
    },
    hoverHandler: function(e){
        let pixelData = this.selectColorCanvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
        this.$('.red-display').text(pixelData[0]);
        this.$('.green-display').text(pixelData[1]);
        this.$('.blue-display').text(pixelData[2]);
        this.$('.colorDisplay').css('background-color', HelpFunctions.rgbToHex(pixelData[0], pixelData[1], pixelData[2]));
    }
});
export default ColorSelector;

