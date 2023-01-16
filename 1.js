const fs = require('fs')

fs.readFile('day1.txt', 'utf-8', (err, data) => {
    //console.log(data.toString())
    const lines = data.split('\n')
    let max = -Infinity
    let temp = 0
    //starts at 1
    let iteration = 0
    let res = {'elf': 0, 'val': -Infinity}

    for(let line of lines) {
        temp +=Number(line)
        //check break and if last line then interrupt/collect sum
        if(line.length === 1 || line === lines[lines.length-1]) {
            iteration++
            if(temp > max) {
                max = temp
                res.elf = iteration
                res.val = temp
            }
            temp = 0
        }
    }
    console.log(res)
})

function res() {
    let max = { 'index': 0, 'val': -Infinity}

}

function compareMax(input, max) {

}

res()