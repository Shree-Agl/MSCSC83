var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width = screen.width;

    new_width = screen.width - 60;

    new_height = screen.height - 400;

if(width < 992){
    document.getElementById("myCanvas").width=new_width
    document.getElementById("mycanvas").height=new_height
    document.body.style.overflow="hidden";

}

    canvas.addEventListener("touchstart", my_touch_start);
    
    function my_touch_start(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

       console.log("touchstart");
last_position_of_x=e.touches[0].clientX-offsetLeft;
last_position_of_y=e.touches[0].clientY-offsetTop;
    }

    canvas.addEventListener("touchmove", my_touch_move);
    function my_touch_move(e)
    {
console.log("my_touch_move");
         current_position_of_mouse_x =e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

