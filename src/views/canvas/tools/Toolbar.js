import Pencil from "./Pencil";
import Rectangle from "./Rectangle";
import Eraser from "./Eraser";
import MoveOnly from "./MoveOnly";
import Mirror from "./Mirror";
import Bucket from "./Bucket";
import {View} from "backbone";
import _ from "underscore";
import Line from "./Line";

const Toolbar = View.extend({
    events: {
        "click .tool": "handleClick"
    },
    initialize: function () {
        let tools = this.model.get('tools');

        tools.push(new Pencil(this.model));
        tools.push(new Line(this.model));
        tools.push(new Rectangle(this.model));
        tools.push(new Eraser(this.model));
        tools.push(new MoveOnly(this.model));
        tools.push(new Mirror(this.model));
        tools.push(new Bucket(this.model));

        this.model.set('tools', tools);

        _.templateSettings.variable = "tools";
        this.template = _.template($('#toolbar-template').html());
        this.$el.html(this.template(this.model.get("tools")));

        this.selectTool(0);
    },
    handleClick: function (e) {
        this.selectTool(e.currentTarget.dataset.index);
    },
    selectTool: function (index) {
        this.model.set('selectedTool', this.model.get('tools')[index]);
        $('.tool', this.el).removeClass('selected-tool');
        $('.tool', this.el).eq(index).addClass('selected-tool');
        this.model.get('selectedTool').onClick();
    }
});
export default Toolbar;