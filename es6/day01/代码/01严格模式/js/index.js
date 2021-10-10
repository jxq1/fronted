"use strict";
var ab=10;

function abc(){
	console.log(this)
}

// abc()

function Student(){
	this.name = "小红";
	this.age = 18;
	this.school = "北大青鸟"
}

var s1 = new Student();
var s2 = Student();