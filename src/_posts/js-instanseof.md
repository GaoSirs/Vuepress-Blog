---
category: 前端
tags:
  - JavaScript
date: 2019-05-06
title: JS instanseof 运算符!
vssue-title: JS instanseof 运算符!
---

## 概述
instanceof运算符用来判断一个构造函数的prototype属性所指向的对象是否存在另外一个要检测对象的原型链上。
<br/>


## 语法
```javascript
obj instanceof Object; // true 
```
<br/>


## 描述
用于判断一个引用类型是否属于某构造函数；
<br/>


## 底层原理
```javascript
function fnInstanseof(L,R){ // L 表示左表达式，R 表示右表达式
	var O = R.prototype, // 取 R 的显示原型
		L = L.__proto__; // 取 L 的隐式原型

	while(true) {

		if(L === null) {
			return false;
		}

		if(O === L) { // 当 O显式原型 严格等于  L隐式原型 时，返回true
			return true;
		}

		L = L.__proto__;
	}
}
```
<br/>


## 举例
```javascript
function Person(name,age,sex){
 
     this.name = name;
 
     this.age = age;
 
     this.sex = sex;
 
 }
 
 var per = new Person("小明"，20，“男”)；
 
 console.log(per instanceof Person);  // true
 
 console.log(per instanceof Object);  // true
```
<br/>



## 工作流程分析
```javascript
function fnInstanseof(L,R){ // L即per ；  R即Person
	var O = R.prototype, // O 为 Person.prototype
		L = L.__proto__; // L 为 per._proto_

	while(true) { //执行循环

		if(L === null) { //不通过
			return false;
		}

		if(O === L) { //判断：Person.prototype === per.__proto__
			return true; //如果等于就返回true，证明per是Person类型
		}

		L = L.__proto__;
	}
}
```
<br/>


## 参考
[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)

[https://www.jianshu.com/p/6c99d3678283](https://www.jianshu.com/p/6c99d3678283)