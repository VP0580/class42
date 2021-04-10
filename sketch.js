// number and String

var num = 2;
console.log(num);
var name = "Siya Audi"
console.log(name)
console.log(name.length);
console.log(name.toUpperCase())
console.log(parseInt("123"))
// arithmetic operaters + ,-,/,*,%

console.log(2+3)
console.log(2-3)
console.log(5*7)
console.log(36/12)
console.log(12%5)

console.log( "hi" + "  Siya")
console.log("a" /"b")
console.log(1/0)

// booleans
var bool =true
// comparison operaters
console.log(2===3)
console.log(2>3)
console.log(2 <3)
console.log(2>=3)

console.log(2!=3)
console.log( 2<=3)

var test;
console.log(test)
test = null
console.log(test)

// conditional programming
// if else statement

if(3>2){
  console.log("happy")
}
else{
  console.log(" not happy")
}

// switch statement
var  name = "My Name";
switch(name){
case "my Name" : 
console.log( "condition 1");break;
case "My Name":
  console.log("condition 2");break;
  default: 
  console.log(" none of the conditions are true");break;
}

// loops
// for loop
for(var i=0;i<=5;i++)
{
  console.log(i)
}
// while
var i=0;
while(i<=5){
  console.log(i)
  i=i+1
}

// arrays

var friends =["frnd1","frnd2","frnd3"]
console.log(friends[0])

for(var index in friends)
console.log(friends[index])

console.log(friends.length)

friends.push("frnd4")
console.log(friends)

friends.pop()

console.log(friends)

// functions
function circumference(radius)
{
  var circumference = 2 * 3.14 * radius
  return circumference
}

 console.log(circumference(5))

 var paddle = new Object();

 paddle.length =60;
 paddle.showLength = function(){
   console.log(paddle.length)
 }

 paddle.showLength()




var fixedRect, movingRect;
function setup(){
    createCanvas(1200,800)
    fixedRect=createSprite(600,400,50,80);
    fixedRect.debug=true;
    fixedRect.shapeColor = "green"
    movingRect = createSprite(400,200,80,30)
    movingRect.debug=true;
    movingRect.shapeColor = "green"
}
function draw(){
  background(0)
  var string ="my name is vandana";
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.y-movingRect.y < fixedRect.width/2+movingRect.width/2)
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  
 
  drawSprites()
}