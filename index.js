const stage = new Konva.Stage({
    height: window.innerHeight,
    width : window.innerWidth,
    container: "konva-holder", 
})

const layer = new Konva.Layer();    
stage.add(layer);

// create an array to store the bounding box coordinates
var boundingBoxes =[];

// event handler for mouse clicks relative to the stage 

stage.on("click",function(e){
    // get the coordinates of teh click on thecnavas
    var x = e.evt.offsetX;
    var y = e.evt.offsetY;

    // store the coordinates to draw bounding boxes later 
    boundingBoxes.push({x:x, y:y});

    // just for the visualization draw a circle at the clicked coordinates
    var circle = new Konva.Circle({
        x:x,
        y:y,
        radius: 5,
        fill:"red"
    });

    // add the circle to the layer
    layer.add(circle);

    // redraw to see the change 
    layer.draw();
});

stage.add(layer);


// const rect = new Konva.Rect({
//     x: 50,
//     y: 50,
//     fill : "blue",
//     height: 100,
//     width: 200,
//     stroke:"orange",
//     strokeWidth: 8,
//     cornerRadius: 8,
//     draggable: true,
// })

// layer.add(rect); 


// load the image on the canvas
var imageObj = new Image();
imageObj.onload = function(){

    var imageWidth = imageObj.width;
    var imageHeight = imageObj.height;

    var scaleX = stage.width() / imageWidth;
    var scaleY = stage.height()/ imageHeight;
    var scale = Math.min(scaleX, scaleY);


    // create a konva image object
    var konvaImage = new Konva.Image({
        x:0,
        y:0,
        image: imageObj,
        width : imageWidth * scale,
        height : imageHeight * scale,
        
    });

    layer.add(konvaImage);
    stage.add(layer);
    layer.draw();
};

imageObj.src="./assets/biryani.jpg"