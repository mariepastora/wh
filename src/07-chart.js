import * as d3 from 'd3'
;(function() {
  // Delete this line, redo it.
  var margin = { top: 50, right: 50, bottom: 50, left: 50 }

  var outerWidth = 400

  var outerHeight = 200
  var svg = d3
    .select('#chart7')
    .append('svg')
    .attr('width', outerWidth)
    .attr('height', outerHeight)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // DO NOT CHANGE THIS SECTION
  svg
    .append('rect')
    .attr('height', 100)
    .attr('width', 300)
    .attr('x', 0)
    .attr('y', 0)
  // DO NOT CHANGE THIS SECTION
})()
