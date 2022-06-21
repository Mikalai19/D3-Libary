// d3.select('div')
//     .selectAll('p')
//     .data([1, 2, 3])
//     .enter()   // need it because we cannot bind the dato to unexisting element. enter() allows to create as much elements as wee need. For tjhis example 3 'p' elements
//     .append('p')  // append new 'p' for every missing 'p'
//     .text(dta => dta); //add text node to the elements 'p'
// // first data gives you access to the each data point


const SOME_DATA = [
    { id: 'd1', value: 10, region: 'USA' },
    { id: 'd2', value: 12, region: 'Belarus' },
    { id: 'd3', value: 14, region: 'Ukraine' },
    { id: 'd4', value: 16, region: 'Canada' }
]


// d3.select('div')
//     .selectAll('p')
//     .data(SOME_DATA)
//     .enter()
//     .append('p')
//     .text(dta => dta.region)


const container = d3.select('div')
    .classed('container', true)
    .style('border', '1px solid red');


const bar = container
    .selectAll('.bar')
    .data(SOME_DATA)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '50px')
    .style('height', data => (data.value * 15) + 'px')

