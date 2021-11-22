var webpackConfig = require('../../build/webpack.test');
module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    // 测试框架
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    // 测试报告
    reporters: ['spec', 'coverage'],
    // 测试入口文件
    files: ['./index.js'],
    // 预处理器 karma-webpack
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    // Webpack配置
    webpack: webpackConfig,
    // Webpack中间件
    webpackMiddleware: {
      noInfo: true
    },
    // 测试覆盖率报告
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  });
};
