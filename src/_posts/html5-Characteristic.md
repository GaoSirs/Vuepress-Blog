---
category: 前端
tags:
  - HTML
date: 2019-05-05
title: HTML5 新特性!
vssue-title: HTML5 新特性!
---

## 一、语义化标签
语义化标签 为页面提供了更好的**页面结构**

<style>
table{
	width: 90%;
}
</style>

|  描述  |  属性  |
| :-----: | :-----: |
| `<header></header>` | 定义文档的头部区域 |
| `<footer></footer>` | 定义文档的尾部区域  |
| `<nav></nav>` | 定义文档的导航区域 |
| `<section></section>` | 定义文档的段落 |
| `<article></article>` | 定义页面独立的内容区域 |
| `<aside></aside>` | 定义页面侧边栏内容 |
| `<command></command>` | 定义命令按钮 |
| `<details></details>` | 标签包含 details 元素的标题 |
| `<dialog></dialog>` | 定义对话框 |


## 二、增强型表单
HTML5 提供了多个新的**表单输入类型**。


  | 输入类型	  | 描述  |
  | :-----: | :-----: |
  | color	  | 主要用于选取颜色  |
  | date	  | 从一个日期选择器选择一个日期  |
  | datetime	  | 选择一个日期（UTC 时间）  |
  | datetime-local	  | 选择一个日期和时间 (无时区)  |
  | email	  | 包含 e-mail 地址的输入域  |
  | month	  | 选择一个月份  |
  | number	  | 数值的输入域  |
  | range	  | 一定范围内数字值的输入域  |
  | search	  | 用于搜索域  |
  | tel	  | 定义输入电话号码字段  |
  | time	  | 选择一个时间  |
  | url	   | URL 地址的输入域  |
  | week	  | 选择周和年  |


同时，还增加了**新的表单属性**：

- 1、placehoder 属性，简短的提示在用户输入值前会显示在输入域上。即我们常见的输入框默认提示，在用户输入后消失。

- 2、required  属性，是一个 boolean 属性。要求填写的输入域不能为空

- 3、pattern 属性，描述了一个正则表达式用于验证 `<input>` 元素的值。

- 4、min 和 max 属性，设置元素最小值与最大值。

- 5、step 属性，为输入域规定合法的数字间隔。

- 6、height 和 width 属性，用于 image 类型的 `<input>` 标签的图像高度和宽度。

- 7、autofocus 属性，是一个 boolean 属性。规定在页面加载时，域自动地获得焦点。

- 8、multiple 属性 ，是一个 boolean 属性。规定 `<input>` 元素中可选择多个值。
<br/><br/>


## 三、音频和视频
HTML5 提供了 **音频和视频** 。

音频：**`<audio>`**

```html
<audio controls>
  <source src="xxx.ogg" type="audio/ogg">
  <source src="xxx.mp3" type="audio/mpeg">
您的浏览器不支持 audio 元素。
</audio>
```

视频：**`<video>`**
```html
<video width="500" height="300" controls>
  <source src="xxx.mp4" type="video/mp4">
  <source src="xxx.ogg" type="video/ogg">
您的浏览器不支持Video标签。
</video>
```
<br/><br/>


## 四、canvas 绘图
标签只是图形容器，必须使用脚本来绘制图形。

[详情点这里](http://www.w3school.com.cn/tags/html_ref_canvas.asp "详情点这里")
<br/><br/>


## 五、SVG 绘图
SVG是指可伸缩的矢量图形

**SVG 与 Canvas两者间的区别**

SVG 是一种使用 XML 描述 2D 图形的语言。

Canvas 通过 JavaScript 来绘制 2D 图形。

SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。

在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。
<br/><br/>


## 六、地理定位（Geolocation）

HTML5 Geolocation（地理定位）用于定位用户的位置。

```javascript
window.navigator.geolocation {
    getCurrentPosition:  fn  用于获取当前的位置数据
    watchPosition: fn  监视用户位置的改变
    clearWatch: fn  清除定位监视
}
```

获取用户定位信息：
```javascript
navigator.geolocation.getCurrentPosition(
    function(pos){
　　　　console.log('用户定位数据获取成功')
　　　　//console.log(arguments);
　　　　console.log('定位时间：',pos.timestamp)
　　　　console.log('经度：',pos.coords.longitude)
　　　　console.log('纬度：',pos.coords.latitude)
　　　　console.log('海拔：',pos.coords.altitude)
　　　　console.log('速度：',pos.coords.speed)

},    //定位成功的回调
function(err){ 
　　　　console.log('用户定位数据获取失败')
　　　　//console.log(arguments);

}        //定位失败的回调
)
```
<br/><br/>


## 七、拖放API 
在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放

[详情看这里...](https://www.cnblogs.com/ijjyo/p/4300717.html "详情看这里...")
<br/><br/>


## 八、Web Storage
使用HTML5可以在本地存储用户的浏览数据。

客户端存储数据的两个对象为：

**localStorage** ：没有时间限制的数据存储

**sessionStorage** ： 针对一个 session 的数据存储, 当用户关闭浏览器窗口后，数据会被删除。

不管是 **localStorage**，还是 **sessionStorage**，可使用的API都相同，常用的有如下几个（以localStorage为例）：

　　1、保存数据：localStorage.setItem(key,value);

　　2、读取数据：localStorage.getItem(key);

　　3、删除单个数据：localStorage.removeItem(key);

　　4、删除所有数据：localStorage.clear();

　　5、得到某个索引的key：localStorage.key(index);
<br/><br/>


## 九、WebSocket
**WebSocket** 是HTML5开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。

在WebSocket API中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。

两者之间就直接可以数据互相传送。

浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据。

当你获取 Web Socket 连接后，你可以通过 **send()** 方法来向服务器发送数据，并通过 **onmessage** 事件来接收服务器返回的数据。

```html
<!DOCTYPE HTML>
<html>
   <head>
   <meta charset="utf-8">
   <title>W3Cschool教程(w3cschool.cn)</title>

      <script type="text/javascript">
         function WebSocketTest()
         {
            if ("WebSocket" in window)
            {
               alert("您的浏览器支持 WebSocket!");

               // 打开一个 web socket
               var ws = new WebSocket("ws://localhost:9998/echo");

               ws.onopen = function()
               {
                  // Web Socket 已连接上，使用 send() 方法发送数据
                  ws.send("发送数据");
                  alert("数据发送中...");
               };

               ws.onmessage = function (evt)
               {
                  var received_msg = evt.data;
                  alert("数据已接收...");
               };

               ws.onclose = function()
               {
                  // 关闭 websocket
                  alert("连接已关闭...");
               };
            }

            else
            {
               // 浏览器不支持 WebSocket
               alert("您的浏览器不支持 WebSocket!");
            }
         }
      </script>

   </head>
   <body>

      <div id="sse">
         <a href="javascript:WebSocketTest()">运行 WebSocket</a>
      </div>

   </body>
</html>
```