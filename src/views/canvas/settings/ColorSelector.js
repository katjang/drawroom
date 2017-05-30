import {View} from "backbone";
import HelpFunctions from "../../../HelpFunctions";

const HelpLines = View.extend({
    events: {
        'click': 'clickHandler',
        'mousemove': 'hoverHandler'
    },
    initialize: function(){
        App.events.on("toggleColorSelector", () => this.toggle());
        setTimeout(() => this.initialiseColorSelector(), 1000);
    },
    toggle: function(){
        this.$el.toggle();
    },
    initialiseColorSelector: function(){
        this.selectColorCanvas = document.createElement('canvas');
        this.selectColorCanvas.width = $('img', this.$el).width();
        this.selectColorCanvas.height = $('img', this.$el).height();
        this.selectColorCanvas.getContext('2d').drawImage($('img', this.$el)[0], 0, 0, $('img', this.$el).width(), $('img', this.$el).height());
    },
    clickHandler: function(e){
        if(!$(e.target).is('img')){
            return false;
        }
        let pixelData = this.selectColorCanvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
        let hexColor = HelpFunctions.rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
        $('.selectedColorDisplay', this.$el).css('background-color', hexColor);
        this.model.set('selectedColor', hexColor);
    },
    hoverHandler: function(e){
        if(!$(e.target).is('img')){
            return false;
        }
        let pixelData = this.selectColorCanvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
        $('.red-display', this.$el).text(pixelData[0]);
        $('.green-display', this.$el).text(pixelData[1]);
        $('.blue-display', this.$el).text(pixelData[2]);
        $('.colorDisplay', this.$el).css('background-color', HelpFunctions.rgbToHex(pixelData[0], pixelData[1], pixelData[2]));
    },
});
export default HelpLines;

