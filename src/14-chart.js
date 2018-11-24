import * as d3 from 'd3'
;(function() {
  // Build your SVG here
  // using all of that cut-and-paste magic

  const margin = { top: 20, right: 20, bottom: 20, left: 20 }

  const width = 400 - margin.left - margin.right

  const height = 300 - margin.top - margin.bottom

  const svg = d3
    .select('#chart14')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // Build your scales here

  const xPositionScale = d3.scaleBand().range([width, 0])
  const yPositionScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([height, 0])

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
    .range([0, height])
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

    xPositionScale.domain(names)

    // Add and style your marks here
    svg
      .selectAll('rect')
      .data(datapoints)
      .enter()
      .append('rect')
      .attr('height', d => {
        return heightScale(d.hamburgers)
      })
      .attr('width', 45)
      .attr('fill', d => {
        return colorScale(d.animal)
      })
      .attr('x', d => {
        return xPositionScale(d.name)
      })
      .attr('y', d => {
        return yPositionScale(d.hamburgers)
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
