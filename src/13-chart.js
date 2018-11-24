import * as d3 from 'd3'
;(function() {
  // Build your SVG here
  // using all of that cut-and-paste magic

  const margin = { top: 20, right: 20, bottom: 50, left: 70 }

  const width = 300 - margin.left - margin.right

  const height = 400 - margin.top - margin.bottom

  const svg = d3
    .select('#chart13')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // Build your scales here

  const yPositionScale = d3.scaleBand().range([height, 0])
  const xPositionScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([0, width])

  const colorScale = d3
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

  const heightScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([0, width])
  d3.csv(require('./eating-data.csv'))
    .then(ready)
    .catch(function(err) {
      console.log('Failed with', err)
    })

  function ready(datapoints) {
    // Set domain for scaleBand
    const names = datapoints.map(d => {
      return d.name
    })

    yPositionScale.domain(names)

    // Add and style your marks here
    svg
      .selectAll('rect')
      .data(datapoints)
      .enter()
      .append('rect')
      .attr('width', d => {
        return heightScale(d.hamburgers)
      })
      .attr('height', 45)
      .attr('fill', d => {
        return colorScale(d.animal)
      })
      .attr('y', d => {
        return yPositionScale(d.name)
      })

    const yAxis = d3.axisLeft(yPositionScale)
    svg
      .append('g')
      .attr('class', 'axis y-axis')
      .call(yAxis)

    const xAxis = d3.axisBottom(xPositionScale)
    svg
      .append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
  }
})()
