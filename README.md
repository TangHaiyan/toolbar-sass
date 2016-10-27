侧边栏：
demo：https://tanghaiyan.github.io/toolbar-sass/

一、html 侧边栏样式实现， 三种方法。

1、使用背景图。
   html结构简单
   兼容性良好，可以兼容到IE6
   使用了大量图片，对性能有一定影响，不利于修改
   
2、使用字体图标
   避免了图片的使用节约性能，修改方便
   html结构稍显复杂
   不兼容IE6、IE7
   
3、：after ：before伪元素结合字体图标
   结构简单，方便修改
   css结构复杂。

二 js  

回到顶部按钮功能，requirejs实现

   参数说明：
   mode:string 可选mode/go 选择直接回到指定位置，还是根据指定时间回去。
   pos:1000, number 屏幕滚动到那个位置出现回到顶部按钮  
   dest:500, number 点击回到顶部按钮，回到具体哪个位置。
   speed:5000，number 回去指定位置的时间。
		  
三 css

css样式采用sass编写
   主要应用：
   变量
   @mixin 混合样式
   样式嵌套&使用
   
   
   使用命令行watch实时编译scss文件为css
      sass --watch <文件路径>\index.scss:<文件路径>\index.css
      
   解决中文字符编译报错的问题
      命令行 path 查询路径 找到Ruby文件
      Ruby23-x64\lib\ruby\gems\2.3.0\gems\sass-3.4.22\lib\sass
      找到engine.rb文件
      添加代码Encoding.default_external = Encoding.find('utf-8');

   

