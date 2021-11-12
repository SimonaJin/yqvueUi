## 文档目录说明
├── build                           // 打包脚本 webpack
    ├── bin                         // 自动化脚本
├── examples                        // 示例代码（本地开发环境）vuepress
├── lib                             // 组件库上传
├── dist                             // 打包结果
├── src                             // 组件库启动
    ├── utils                       // 公共函数
├── packages                        // 所有组件源码
|  	├── components                  // 所有组件
      ├── [componentName]           // 单个组件
    ├── theme_chalk                 // 样式 -gulp
├── tests                           // 测试
    ├── __tests__                   // 组件测试文件
├── .babelrc                        // babel配置
├── components.json                 // 所有组件路径地址
├── .eslintrc                       // eslint 配置
├── .publish-ci.yml                 // npm 包发布、站点部署 CI 脚本
├── jest.config.js                  // Jest 配置文件
├── .gitignore                      // package.json
└── package.json                    // package.json