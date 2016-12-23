$(function(){
    canvasruns();
    function canvasruns(){
        var canvas=document.getElementById('Canvas');
        var context=canvas.getContext('2d');
        context.beginPath();//起始一条路径，或重置当前路径
        context.arc(320,240,200,0,2*Math.PI);//创建圆形或部分圆-x轴、y轴、半径、起始角、结束角
        context.fillStyle='yellow';//设置或返回用于填充绘画的颜色、渐变或模式
        context.fill();//填充当前绘图（路径）
        context.strokeStyle='black';//设置或返回用于笔触的颜色、渐变或模式
        context.stroke();//填充已定义的路径线条颜色
        context.closePath();//关闭从当前点回到起始点的路径

        context.beginPath();
        context.arc(270,175,30,0,2*Math.PI);
        context.fillStyle='white';
        context.fill();
        context.stroke();
        context.closePath();

        context.beginPath();
        context.arc(370,175,30,0,2*Math.PI);
        context.fill();
        context.stroke();
        context.closePath();

        context.beginPath();
        context.arc(320,240,150,0,1*Math.PI);
        context.strokeStyle='red';
        context.stroke();
        context.closePath();
    }

});
