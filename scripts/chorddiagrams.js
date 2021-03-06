

//    d3.csv("routeractivitybetweenregions.csv", function(data) {
//        console.log(data);
//    });


//    //https://gist.github.com/sghall/7859113
//    //http://www.delimited.io/blog/2013/12/8/chord-diagrams-in-d3

//    d3.csv('data/hair.csv', function (error, data) {
//     var mpr = chordMpr(data);
 
//      mpr
//        .addValuesToMap('has')
//        .setFilter(function (row, a, b) {
//           return (row.has === a.name && row.prefers === b.name)
//         })
//         .setAccessor(function (recs, a, b) {
//           if (!recs[0]) return 0;
//           return +recs[0].count;
//          });
//       drawChords(mpr.getMatrix(), mpr.getMap());
//  });

var margin      = {top: 50, right: 10, bottom: 10, left: 50},
width       = 960 - margin.left - margin.right,
height      = 600 - margin.top  - margin.bottom,
innerRadius = Math.min(width, height) * .35,
outerRadius = innerRadius * 1.1;

var svg = d3.select("body").append("svg")
.attr("width",  width  + margin.left + margin.right)
.attr("height", height + margin.top  + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
.append("g")
.attr("class", "chordgraph")
.attr("transform", "translate(" + width/2 + "," + height/2 + ")");

d3.csv("routeractivitybetweenregions.csv", function(d){

/*
 * IMPORTANT! Specify your first column of data here (see example data)
 *
 */
var firstColumn = "First_Column";

//store coloumn names
var fc = d.map(function(d){ return d[firstColumn]; }),
    fo = fc.slice(0),
    maxtrix_size = (Object.keys(d[0]).length - 1) + fc.length,
    matrix  = [];

//Create an empty square matrix of zero placeholders, the size of the ata
for(var i=0; i < maxtrix_size; i++){
    matrix.push(new Array(maxtrix_size+1).join('0').split('').map(parseFloat));
}

//go through the data and convert all to numbers except "first_column"
for(var i=0; i < d.length; i++){

    var j = d.length;//counter

    for(var prop in d[i]){
        if(prop != firstColumn){
            fc.push(prop);
            matrix[i][j] = +d[i][prop];
            matrix[j][i] = +d[i][prop];
            j++;
        }
    }
}

var chord = d3.layout.chord()
    .padding(.1)
    .sortSubgroups(d3.descending)
    .matrix(matrix);

var chordgroups = chord.groups()
    .map(function(d){ d.angle = (d.startAngle + d.endAngle)/2; return d; });

var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

var fill = d3.scale.category10();

svg.selectAll("path")
    .data(chord.groups)
    .enter()
    .append("path")
    .style("fill", function(d, i){ return (d.index+1) > fo.length ? fill(d.index): "#ccc";})
    .style("stroke", function(d, i) { return "#000"; })
    .style("cursor", "pointer")
    .attr("d", arc)
    .on("mouseover", function(d, i){
        chords.classed("fade", function(d){
            return d.source.index != i && d.target.index != i;
          })
    });


var chords = svg.append("g")
    .attr("class", "chord")
    .selectAll("path")
    .data(chord.chords)
    .enter()
    .append("path")
    //set the starting node. Change index from zero here.
    //to start with a target dataset, change d.source.index to d.target.index
    .classed("fade", function(d,i){return d.source.index == 0 ? false : true;})
    .attr("d", d3.svg.chord().radius(innerRadius))
    .style("fill", function(d) { return fill(d.source.subindex); })
    .style("stroke", function(d){ return "#000";});

svg.selectAll(".text")
    .data(chordgroups)
    .enter()
    .append("text")
    .attr("class", "text")
    .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
    .attr("transform", function(d){

        //rotate each label around the circle           
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" + 
               "translate(" + (outerRadius + 10) + ")" +
               (d.angle > Math.PI ? "rotate(180)" : "");

    })
    .text(function(d,i){
        //set the text content
        return fc[i];
    })
    .style({
        "font-family":"sans-serif",
        "font-size"  :"12px"
    })

});

