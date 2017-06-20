import {View} from 'backbone';

const Page = View.extend({
    hidePage(){
        return this.$el.fadeOut().promise();
    },
    showPage(){
        this.$el.fadeIn();
        App.events.trigger(('initialize'+this.name));
    }
});
export default Page;