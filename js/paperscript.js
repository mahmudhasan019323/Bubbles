var circles = [];
var keys = 'qwertyuiopasdfghjklzxcvbnm';

function onKeyDown(e){
    test(e.key);
}

function onMouseDown(){
  var key = keys[Math.round(Math.random() * keys.length)];
  test(key);
}

function test(key){
  if(keyData[key]){
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var radius = 300;
    var newCircle = new Path.Circle(point, radius);
    keyData[key].sound.play();
    newCircle.fillColor = keyData[key].color;
    circles.push(newCircle);
    console.log(circles);
  }
}

  function onFrame(){
      circles.forEach(function(circle,index){
      circle.fillColor.hue++;
      circle.scale(.94);
      if(circle.area < 1){
        circle.remove();
        circles.splice(index,1);
      }

    });
  }

