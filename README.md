# my_blog

> 一个基于node.js+express+vue.js搭建的简单博客管理系统

## 基本功能

1.在未登录时，用户可以查看已有文章</br>
2.用户注册登录</br>
3.用户注册登录后，可以添加、删除和修改文章

## 技术实现

1.Vue.js</br>
2.Node.js</br>
3.Express框架</br>
4.Mongodb数据库</br>
5.Element.ui

## Build Setup

``` bash
# clone project
git clone https://github.com/obrcnh/blog.git

# install dependencies
cd my_blog
npm install

# start the mongodb service
mongod

# start the server
cd server
node server.js

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
