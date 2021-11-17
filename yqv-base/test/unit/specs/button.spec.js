import Vue from 'vue';
import YqButton from '@yqv-base/components/button';

describe('Counter.vue', () => {

  it('点击按钮后, count的值应该为1', () => {
    // 获取组件实例
    const Constructor = Vue.extend(YqButton);
    // 挂载组件
    const vm = new Constructor().$mount();
    // 获取button
    const button = vm.$el.querySelector('button');
    // 新建点击事件
    const clickEvent = new window.Event('click');
    // 触发点击事件
    button.dispatchEvent(clickEvent);
    // 监听点击事件
    vm._watcher.run();

  });
});
