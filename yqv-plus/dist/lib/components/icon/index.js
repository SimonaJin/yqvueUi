'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const withInstall = (comp) => {
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};

const icionProps = {
    size: {
        type: Number
    },
    color: {
        type: String
    }
};

var script = vue.defineComponent({
    name: "ZIcon",
    props: icionProps,
    setup(props) {
        const style = vue.computed(() => {
            if (!props.size && !props.color) {
                return {};
            }
            return Object.assign(Object.assign({}, (props.size ? { 'font-size': props.size + 'px' } : '')), (props.color ? { 'color': props.color } : ''));
        });
        return {
            style
        };
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("i", {
    class: "z-icon",
    style: vue.normalizeStyle(_ctx.style)
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 4 /* STYLE */))
}

script.render = render;
script.__file = "packages/components/icon/src/icon.vue";

const ZIcon = withInstall(script);

exports.ZIcon = ZIcon;
exports["default"] = ZIcon;
