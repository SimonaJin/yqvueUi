import { YqIcon } from './components/index';
export * from './components';

const components = [
    YqIcon
];
const install = (app) => {
    components.forEach((component) => app.use(component));
};
var index = {
    install,
};

export { index as default };
