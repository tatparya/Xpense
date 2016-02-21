

console.log( timeRad );

var slider = document.getElementById('investment');
var timeRad = document.getElementById('time');

var calculate = function(){
    console.log( "Calculate!!" );

    console.log( slider.value );

    var rad1 = document.getElementById('val1').checked;
    var rad2 = document.getElementById('val2').checked;
    var rad3 = document.getElementById('val3').checked;

    var time = 1;
    if( rad1 ){
        time = 0.5;
    }
    else if( rad2 ){
        time = 1;
    }
    else{
        time = 5;
    }
    console.log( time );

    var savingsTotal    =   ( slider.value * time * 0.0075 ) ;
    var mfTotal         =   ( slider.value * time * 0.0086 ) ;
    var bondsTotal      =   ( slider.value * ((time == 5)? 5:0) * 0.0146 );


    var width = 500;
    var height = 500;

    var arr = [savingsTotal, mfTotal, bondsTotal];
    var arr2 = ["Capital One Savings +( $" + Math.round(savingsTotal) +" )" , "Mutual Fund +( $" + Math.round(mfTotal) +" )" , "US Treasury Bond +( $" + Math.round(bondsTotal) +" )" ];

    var widthScale = d3.scale.linear()
        .domain([0, Math.max(savingsTotal, mfTotal, bondsTotal)])
        .range([0, width]);


    d3.select(".invSvg").remove();

    var canvas = d3.select(".invGraph")
        .append("svg")
        .attr("class", "invSvg")
        .attr("width", 650)
        .attr("height", 300)
        .append("g")
        .attr("transform", "translate (30, 10)");

    var xaxis = d3.svg.axis()
        .ticks(5)
        .scale(widthScale);

    var bars = canvas.selectAll("rect")
        .data(arr)
        .enter()
            .append("rect")
            .attr("width", 0)
            .transition().duration(2000)
            .delay(function(d,i) {return i * 100;})
            .attr("width", function(d) {return widthScale(d);})
            .attr("height", 50)
            .attr("y", function(d, i) {return i* 80});

    var labels = canvas.selectAll("text")
        .data(arr2)
        .enter()
            .append("text")
            .attr("id", "svText")
            .attr("transform", "translate (20, 5)")
            .attr("y", function(d, i) {return i * 80 + 24;})
            .text(function(d) {return d;})

    canvas.append("g")
        .attr("transform", "translate (0, 250)")
        .call(xaxis);

}

var graph = function(){

    var gauge1 = loadLiquidFillGauge("fillgauge1", 1500 / 4000 * 100);
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FF7777";
    config1.textColor = "#FF4444";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#FFDDDD";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;

}

slider.addEventListener( "mouseup", calculate );
timeRad.addEventListener( "click", calculate );
