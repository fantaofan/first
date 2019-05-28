## vue 项目

目录
views 文件夹 页面级组件
app.vue 根组件
mains 主入口 webpack 配置的
router.js 路由配置文件
assets 文件夹 放静态资源
components 文件夹 放公共组件(基础组件)

1. 运行项目
   npm run serve
2. 打包项目
   npm run build 运行完成后会多一个 dist 文件夹 这个是最后上线用的 要在服务端运行
3. (额外)npm install
   http-server -g global 全局 在文件夹下面运行 http-server 自动把目录下的 index.html 当做首页
4. - es6 的模块语法  
     导出和引入的东西都是一个对象 moudle(对象)
     import 表示引入 必须是通过 export 导出的
     export 表示导出
     export default 默认导出
5. 我们可以把每个.vue 文件看成一个组件 // @ is an alias to /src @符号是/src 的别名
6. - 组件的使用三部曲

1) 通过 import 引入组件
2) 在 components 里面注册
3) 用标签的形式使用

7. - props 传值
     默认值如果是数组或者对象的时候必须用函数
     数组、对象、布尔值、数字需要使用 v-bind 动态传值 :s='1'
     2 种方式 数组和对象
     定义成对象的时候 可以设置默认值和验证数据类型
8. - 配置路由跳转

1) router-link 写跳转路径
2) 建立路由对应的.vue 文件
3) 配置 router.js

9. 路由懒加载
   通过箭头函数和 import 方式直接使用
10. spa 应用 单页面应用
11. 使用字体图标
    https://www.iconfont.cn/
    首页 列表页 购物车 返回 个人中心
    1.css 引入 放在 assets 文件夹里面 引入的时候用./ 2.常用 import 作为模块导入
12. 路由激活的样式
    router-link-exact-active router-link-active
    exact 严格匹配
13. - 导航组件 scoped
      导航越来越多的时候 需要怎么处理 抽离成公共组件
      style lang="less" 表示使用什么方式的 css 预处理语言 scoped 表示只对当前组件生效
14. 组件化的好处
    可复用 可组合 可维护
15. 轮播图组件
    在 src 同级目录下建立一个 mock 文件夹或者其他任何位置都可以 mock 文件夹用来放我们的 mock 数据 mock 里面的代码和前端代码是没有任何关系的
16. ajax 请求配置
    基于 promise 封装的 ajax

1) 在 src 文件夹下面建 api/ajax 文件夹 这里面放所有的请求 方便管理 在 api 文件夹下面建立一个 index.js 只要有 index.js index.js 会被作为默认的入口 写的时候可以省略
   拦截器 interceptors request response
   import {} from '../api' = '../api/index.js'
2) npm install axios
3) export let getBanner 等于导出一个 key，value 相对应的对象

17. - mock app.js 添加跨域配置(cors 跨域资源共享)
      域名 端口号 协议只要有一个不同就是跨域
      //允许哪个域名跨域
      res.setHeader('Access-Control-Allow-Origin',"\*")
      //允许哪个方法跨域
      res.setHeader('Access-Control-Allow-Methods','PUT,POST,GET,DELETE')
      //预检测存活时间，单位是 s
      res.setHeader('Access-Control-Max-Age',6)
      if(req.method==='OPITIONS'){
      res.end()//OPITIONS 请求不做任何处理
      }
18. 轮播图
    地址：https://github.com/surmon-china/vue-awesome-swiper
    下载 npm install vue-awesome-swiper --save
19. 列表页分页
    传参：页数(默认第一页) /list?page=1 1 页显示 5 条数据 加载更多 滚动加载更多 判断什么时候滚动到底部 scrollTop+clientHeight>scrollHeight
20. refs 可以获取元素或者组件
21. \*\* 路由跳转
    跳转到详情页
    使用标签的形式 router-link tag='li' 把 a 标签转成需要的标签名 a->li :to 跳转到哪里 完全等价 this.\$router.push({name:'detail',query:{id:item.id}}) 参数 params query

1)params 使用 path 的时候 params 会被忽略 需要手写完整的带有参数的 path 例子

```
:to='{path:`detail/${num}`}'
```

2)直接传参 params 不能用 path 用 name

3)params 需要去路由定义参数在 path 后面用 /:变量名 /:id 必须有,但是不固定 和 params 对象传过来的变量名一致 可以是多个 /:id/:name

4)this.\$route.params.变量名

5)query 直接使用 this.\$route.query  
 query 会以查询字符串的形式显示在地址栏 http://localhost:8080/#/detail?id=1

6. 详情页数据
   请求详情页 需要传 id 根据 id 来返回对应的数据
7. \*\* $router $route

1) router 表示路由的实例 方法都在 router 上
2) route 路由对象信息 放路由的属性

24. input type="check" 使用 v-model 的时候出现 was assigned to but it has no setter，我们需要设置 get 和 set
    computed 属性如果是单个值，直接使用函数，如果需要 get 和 set 则需要写成对象
25. - 手动给对象的属性增加监听
      this.\$set/Vue.set 等于给这个对象后增加的 key 添加了 defineProprety 属性
      三个参数：对象、key、value
      注意事项：对象后增加的属性并不会被劫持，需要我们手动设置
26. 把一个组件当做一个带着事件和数据的 html 片段，只是我们这个组件可以随便拆分，随处使用。
    拆分组件尽量遵循一个组件只实现一个功能的原则
27. - vue-cli3.0 配置跨域 在根目录建立一个 vue.config.js(名字不能变)
28. express 的使用
    npm install express -s
    封装了 req 和 res 有很多中间件可以配合使用
    npm install cors cors 跨域中间件
    npm install body-parser 解析数据用的
    express koa egg
    cnpm install -g nodemon node 代码修改后会自动重启 可以做到实时看服务器代码
29. - 路由重定向 hash 模式 history 模式 redirect
      注意要配置在路由列表数组的底部
      history 模式下面 需要加下面这段 hash 模式可以不加

```
component: () => import("./views/Home.vue")
```

30. - keep-alive 缓存
      router-view 路由对应的视图
      路由元信息 meta 对象 meta: { keepAlive: true }
31. src 建一个文件夹 lib
    lib 工具类 建一个文件 axios.js

##报错

1. can not find moudle
   路径引错 或者文件不存在(范康文)

51 作业
用 vue 写 todolist
http://www.todolist.cn/

加一个回到顶部的按钮

promise：解决异步编程。
如何创建一个 promise?
构造函数调用，函数的参数是一个立即执行函数，叫做立即执行器，这个立即执行函数接收两个参数，
resolve 和 reject。
Var promise = new Promsie((resolve,reject) => {})
每个 promise 都有 then 方法。
Promise 的三种状态。进行中（pending） 成功(resolved) 失败(reject)
Promise 的两个静态方法 all race
Promise.all：接收一个参数数组，必须等所有 promise 对象执行完毕以后才会返回一个结果，并且结果放在了数组里面。
Promise.race：接收一个数组作为参数，谁执行的快就会返回谁。
Promise 的使用，代码，运动案例

常用的指令：
v-bind：用来绑定属性的，可以操作 class 列表的内联样式等
v-for：基于源数据多次渲染元素或模板块
v-html：更新元素的 innerHTML
v-model：在表单控件或者组件上创建双向绑定
v-if：根据表达式的值的真假条件渲染元素
v-show：根据表达式之真假值，切换元素的 display CSS 属性

v-show 和 v-if 的区别：
频繁切换用 v-show
v-show="表达式" v-if="表达式"
相同点：都是通过表达式的真假值来控制
不同点：
1、v-if 是控制 Dom 元素的添加和删除，v-show 只是控制 css 的 display 属性
2、编译过程：v-if 是一个局部的切换过程，切换过程中是销毁和重建的过程，v-show 和编译无关，只是样式的切换
3、性能消耗上：v-if 有切换消耗，而 v-show 是渲染消耗

namespaced: true 开启命名空间

strict: process.env.NODE_ENV == 'development'只是给开发人员看的 严格模式下 state 不用 mutations 修改会
报错
actions 可以多次提交
一般 mutations 只用来修改 state 状态
通过 this.\$refs.自定义名，不止可以调用方法也可以拿到子组件的实例
put 表示数据修改 post 表示新增 delete 表示删除 get 表示获取

cors 跨域就是后端针对前端请求的不同设置不同的响应头
数组的方法不能通过 defineProperty 来检测更新 所以 vue 重写了数组的方法 push pop shift...

异步的终极解决方案 async await es7：
async await 配套使用 async 后跟函数，表示函数里面有异步操作 返回值是 promise await 后面通常跟 promise 也可以跟普通值 跟普通值会直接成功 表示 promsie 执行的结果 await 会按顺序执行

createServer 创建服务器
listen 表示监听的是哪个端口号
res.end()后端响应数据

withCredentials 允许携带 cookie
