import Pencil from "./Pencil";
import Eraser from "./Eraser";
import MoveOnly from "./MoveOnly";
import Mirror from "./Mirror";
import Bucket from "./Bucket";
import {View} from "backbone";
import _ from "underscore";

const Toolbar = View.extend({
    events: {
        "click": "handleClick"
    },
    initialize: function () {
        this.tools = new Map();

        let pencil = new Pencil({model: this.model});
        let eraser = new Eraser({model: this.model});
        let move = new MoveOnly({model: this.model});
        let mirror = new Mirror({model: this.model});
        let bucket = new Bucket({model: this.model});

        this.tools.set(pencil.name, pencil);
        this.tools.set(eraser.name, eraser);
        this.tools.set(move.name, move);
        this.tools.set(mirror.name, mirror);
        this.tools.set(bucket.name, bucket);

        _.templateSettings.variable = "tools";
        let template = _.template($('#toolbar-template').html());
        let underScoreArray = [];
        for (let tool of this.tools.values()) {
            underScoreArray.push(tool);
        }
        this.$el.html(template(underScoreArray));

        this.selectTool(pencil);

        App.events.on('toolMouseDrag', (e) => this.selectedTool.DragHandler(e));
        App.events.on('toolMouseDown', (e) => this.selectedTool.MouseDownHandler(e));
        App.events.on('toolMouseUp', (e) => this.selectedTool.MouseUpHandler(e));
        App.events.on('toolMouseMove', (e) => this.selectedTool.MouseMoveHandler(e));
    },
    handleClick: function (e) {
        console.log(e);
        let target = $(e.target).hasClass('tool') ? $(e.target) : ($(e.target).parents('.tool').length) ? $(e.target).parents('.tool') : false;
        if (target) {
            let tool = this.tools.get(target.attr('data-name').replace('data-', ''));
            this.selectTool(tool, target);
        }
    },
    selectTool: function (tool, target) {
        this.selectedTool = tool;
        $('.tool', this.el).removeClass('selected-tool');
        $(target).addClass('selected-tool');
        this.selectedTool.onClick();
    }
});
export default Toolbar;