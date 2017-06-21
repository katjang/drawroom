import Pencil from "./Pencil";
import Eraser from "./Eraser";
import MoveOnly from "./MoveOnly";
import Mirror from "./Mirror";
import Bucket from "./Bucket";
import {View} from "backbone";
import _ from "underscore";

const Toolbar = View.extend({
    events: {
        "click .tool": "handleClick"
    },
    initialize: function () {
        this.tools = [];

        this.tools.push(new Pencil(this.model));
        this.tools.push(new Eraser(this.model));
        this.tools.push(new MoveOnly(this.model));
        this.tools.push(new Mirror(this.model));
        this.tools.push(new Bucket(this.model));

        _.templateSettings.variable = "tools";
        this.template = _.template($('#toolbar-template').html());
        this.$el.html(this.template(this.tools));

        this.selectTool(0);

        App.events.on('toolMouseDrag', (e) => this.selectedTool.DragHandler(e));
        App.events.on('toolMouseDown', (e) => this.selectedTool.MouseDownHandler(e));
        App.events.on('toolMouseUp', (e) => this.selectedTool.MouseUpHandler(e));
        App.events.on('toolMouseMove', (e) => this.selectedTool.MouseMoveHandler(e));
    },
    handleClick: function (e) {
        this.selectTool(e.currentTarget.dataset.index);
    },
    selectTool: function (index) {
        this.selectedTool = this.tools[index];
        $('.tool', this.el).removeClass('selected-tool');
        $('.tool', this.el).eq(index).addClass('selected-tool');
        this.selectedTool.onClick();
    }
});
export default Toolbar;