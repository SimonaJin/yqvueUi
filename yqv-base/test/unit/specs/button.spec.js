import { createTest, destroyVM } from '../util';
import YqButton from '@yqv-base/components/button';

describe('YqButton', () => {
	let vm;
	afterEach(() => {
    destroyVM(vm);
  });
	it('create', () => {
    vm = createTest(YqButton, {
      type: 'primary'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('yq-button-primary')).to.be.true;
  });
	it('disabled', () => {
    vm = createTest(YqButton, {
      disabled: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('yq-button-disabled')).to.be.true;
  });
  it('size', () => {
    vm = createTest(YqButton, {
      size: 'normal'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('yq-button-normal')).to.be.true;
  });
  it('plain', () => {
    vm = createTest(YqButton, {
      plain: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('yq-button-plain')).to.be.true;
  });
	it('round', () => {
    vm = createTest(YqButton, {
      round: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-round')).to.be.true;
  });
  it('circle', () => {
    vm = createTest(YqButton, {
      circle: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-circle')).to.be.true;
  });
});
