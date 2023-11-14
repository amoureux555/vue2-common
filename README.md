## common 
    vue2 通用项目 模板

## 安装依赖
```
npm i
```

### 项目启动
```
npm run dev
```

### 项目打包
```
npm run build
```

### 代码审查
```
npm run lint
```

## 已配置
- ##### 全局路径 @
- ##### 全局样式 reset.scss
- ##### axios + request

  ```
  // get请求
  export const getXXX = () => {
    return request({
      url: '/XXXX/XXXX',
      method: "get",
    });
  };

  // post请求
  export const postXXXX= (data) => {
    return request({
      url: '/XXXX/XXXX',
      method: "post",
      data,
    });
  };
  ```

- ##### Element-ui (已注册)
- ##### directive  自定义指令
  - 对话框拖拽:[vue2 自定义指令 实现全屏 、对话框拖拽](https://blog.csdn.net/qq_46123200/article/details/127424402?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167885269316800192211664%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=167885269316800192211664&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-127424402-null-null.blog_rank_default&utm_term=%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E4%BB%A4&spm=1018.2226.3001.4450)
  - 全屏:[vue2 自定义指令 实现全屏 、对话框拖拽](https://blog.csdn.net/qq_46123200/article/details/127424402?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167885269316800192211664%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=167885269316800192211664&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-127424402-null-null.blog_rank_default&utm_term=%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E4%BB%A4&spm=1018.2226.3001.4450)
  - 图片懒加载

- ##### 项目适配
  - 配置方法参考:[vue适配pc端](https://blog.csdn.net/sunyyyyy1/article/details/125275077)
  - 项目适配 rem
  - 浏览器缩放无影响
  - 电脑显示设置中设置缩放、分辨率对项目影响不大


