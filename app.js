// d3.select('div')
//     .selectAll('p')
//     .data([1, 2, 3])
//     .enter()   // need it because we cannot bind the dato to unexisting element. enter() allows to create as much elements as wee need. For tjhis example 3 'p' elements
//     .append('p')  // append new 'p' for every missing 'p'
//     .text(dta => dta); //add text node to the elements 'p'
// // first data gives you access to the each data point


const SOME_DATA = [
    { id: 'd1', value: 10, region: 'USA' },
    { id: 'd2', value: 20, region: 'Belarus' },
    { id: 'd3', value: 30, region: 'Ukraine' },
    { id: 'd4', value: 40, region: 'Canada' }
]


d3.select('div')
    .selectAll('p')
    .data(SOME_DATA)
    .enter()
    .append('p')
    .text(dta => dta.region)