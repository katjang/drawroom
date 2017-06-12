import {View} from "backbone";

const Tool = View.extend({
    onClick: function (e) {
    },
    DragHandler: function (e) {

    },
    MouseDownHandler: function (e) {
        this.DragHandler(e);
    },
    MouseUpHandler: function(e) {

    },
    MouseMoveHandler: function(e){

    }
});
export default Tool;