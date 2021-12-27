var webpackConfig = require('../../build/webpack.test');
module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    // 测试框架
    frameworks: ['mocha', 'chai'],
    // 测试报告
    reporters: ['spec', 'coverage'],
    // 测试入口文件
    files: ['./specs/*.spec.js'],
    // karma plugin
    plugins: [
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-spec-reporter',
      'karma-coverage'
    ],
    // 预处理器 karma-webpack
    preprocessors: {
      './specs/*.spec.js': ['webpack', 'coverage']
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
