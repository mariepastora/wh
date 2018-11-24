import * as d3 from 'd3'
;(function() {
  // Build your SVG here
  // using all of that cut-and-paste magic

  const margin = { top: 50, right: 50, bottom: 50, left: 50 }
  const outerWidth = 400

  const outerHeight = 400

  const width = outerWidth - margin.left - margin.right

  const height = outerHeight - margin.top - margin.bottom

  const svg = d3
    .select('#chart11')
    .append('svg')
    .attr('width', outerWidth)
    .attr('height', outerHeight)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // Build your scales here
  const xPositionScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([0, width])

  const yPositionScale = d3
    .scalePoint()
    .domain(['dog', 'cat', 'cow'])
    .range([height, 0])
    .padding(0.25)

  d3.csv(require('./eating-data.csv'))
    .then(ready)
    .catch(function(err) {
      console.log('Failed with', err)
    })

  function ready(datapoints) {
    // Add and style your marks here
    svg
      .selectAll('circle')
      .data(datapoints)
      .enter()
      .append('circle')
      .attr('cx', d => {
        return xPositionScale(d.hamburgers)
      })
      .attr('cy', d => {
        return yPositionScale(d.animal)
      })
      .attr('fill', 'lightpink')
      .attr('r', 10)
  }

  var yAxis = d3.axisLeft(yPositionScale)
  svg
    .append('g')
    .attr('class', 'axis y-axis')
    .call(yAxis)

  var xAxis = d3.axisBottom(xPositionScale)
  svg
    .append('g')
    .attr('class', 'axis x-axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)
})()
