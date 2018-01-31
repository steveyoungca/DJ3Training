

//d3.select("body")
//    .append("p")
//    .text("New Paragraph!!");

    // var dataset1 = [5,10,15,20,25];
//    d3.csv("bar-data.csv", function(data) {
 //       console.log(data);
//    })

 //   d3.csv("food.csv", function(data) {
 //       console.log(data);
 //   });


 //var dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 12, 17, 18, 10, 24, 18, 25, 9, 3 ];
    
//  var dataset = [];  						 //Initialize empty array
//  for (var i = 0; i < 25; i++) {			 //Loop 25 times
//      var newNumber = Math.random() * 30;  //New random number (0-30)
//      dataset.push(newNumber);			 //Add new number to array
//  }


//  d3.select("body").selectAll("div")
//      .data(dataset)
//      .enter()
//      .append("div")
//      .attr("class", "bar")
//      .style("height", function(d) {
//          var barHeight = d * 5;
//          return barHeight + "px";
//      });

		//Width and height
        var w = 500;
        var h = 100;
        var barPadding = 1;
        
        var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                        11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
        
        //Create SVG element
        var svg = d3.select("body")
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);

        svg.selectAll("rect")
           .data(dataset)
           .enter()
           .append("rect")
           .attr("x", function(d, i) {
                   return i * (w / dataset.length);
           })
           .attr("y", function(d) {
                   return h - (d * 4);
           })
           .attr("width", w / dataset.length - barPadding)
           .attr("height", function(d) {
                   return d * 4;
           })
           .attr("fill", "teal");
