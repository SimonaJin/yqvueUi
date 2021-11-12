import { ZIcon } from 'yqv-plus/es/components/index';
export * from 'yqv-plus/es/components';

const components = [
    ZIcon
];
const install = (app) => {
    components.forEach((component) => app.use(component));
};
var index = {
    install,
};

export { index as default };
