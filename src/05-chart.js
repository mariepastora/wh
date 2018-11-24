import * as d3 from 'd3'
;(function() {
  var height = 200
  var width = 400

  var svg = d3
    .select('#chart5')
    .select('svg')
    .attr('height', height)
    .attr('width', width)

  var datapoints = [
    { hotdogs: 10, hamburgers: 10, animal: 'dog', name: 'Stevie' },
    { hotdogs: 3, hamburgers: 3, animal: 'cat', name: 'Nicholas' },
    { hotdogs: 2, hamburgers: 2, animal: 'cat', name: 'Bubbletree' },
    { hotdogs: 10, hamburgers: 3, animal: 'cow', name: 'Particle' },
    { hotdogs: 7, hamburgers: 5, animal: 'dog', name: 'Jumpup' },
    { hotdogs: 4, hamburgers: 9, animal: 'dog', name: 'Parlay' },
    { hotdogs: 3, hamburgers: 1, animal: 'cat', name: 'Hio' }
  ]

  // Build your scales here

  // X: Hamburgers
  var xScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([0, width])

  // Radius: Hot dogs
  var radiusScale = d3
    .scaleSqrt()
    .domain([0, 10])
    .range([0, 20])

  // Color: kind of animal
  var colorScale = d3
    .scaleOrdinal()
    .range([
      '#bebada',
      '#fb8072',
      '#80b1d3',
      '#fdb462',
      '#b3de69',
      '#fccde5',
      '#d9d9d9',
      '#bc80bd',
      '#ccebc5'
    ])

  // Add your circles and style them here
  svg
    .selectAll('circle')
    .data(datapoints)
    .enter()
    .append('circle')
    .attr('cx', d => {
      return xScale(d.hamburgers)
    })
    .attr('cy', height / 2)
    .attr('r', d => {
      return radiusScale(d.hotdogs)
    })
    .attr('fill', d => {
      return colorScale(d.animal)
    })
    .style('opacity', 0.5)
})()
