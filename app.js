console.log(d3)


d3.select('div')
    .selectAll('p')
    .data([1, 2, 3])
    .enter()   // need it because we cannot bind the dato to unexisting element. enter() allows to create as much elements as wee need. For tjhis example 3 'p' elements
    .append('p')  // append new 'p' for every missing 'p'
    .text(dta => dta);