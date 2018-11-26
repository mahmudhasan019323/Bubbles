var circles = [];

function onKeyDown(e){
    if(keyData[e.key]){
      var maxPoint = new Point(view.size.width, view.size.height);
      var randomPoint = Point.random();
      var point = maxPoint * randomPoint;
      var radius = 300;
      var newCircle = new Path.Circle(point, radius);
      keyData[e.key].sound.play();
      newCircle.fillColor = keyData[e.key].color;
      circles.push(newCircle);
      console.log(circles);
    }
  }

  function onFrame(e){
      circles.forEach(function(circle,index){
      circle.fillColor.hue++;
      circle.scale(.94);
      if(circle.area < 1){
        circle.remove();
        circles.splice(index,1);
        console.log(circles);
      }

    });
  }

