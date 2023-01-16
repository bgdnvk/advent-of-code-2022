const fs = require('fs')

fs.readFile('day1.txt', 'utf-8', (err, data) => {
    //console.log(data.toString())
    const lines = data.split('\n')
    let max = -Infinity

    let temp = 0
    //starts at 1
    let iteration = 0
    let res = {'elf': 0, 'val': -Infinity}
//    const elves = []
    const elvesCalories = []

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
//            elves.push({
//                'elf': iteration,
//                'val': temp
//            })
            //only the calories val are needeed
            elvesCalories.push(temp)
            //reset counter for next iteration
            temp = 0
        }
    }
    console.log(res)
    console.log(elves)
    console.log(elvesCalories.sort())
    //js sort jfc
    const sorted = elvesCalories.sort((a, b) => b-a)
    console.log(sorted)
    //get the top 3 from the sorted arr in desc order
    top3calories = sorted[0] + sorted[1] + sorted[2]
    console.log(top3calories)

})

function res() {
    let max = { 'index': 0, 'val': -Infinity}

}

function compareMax(input, max) {

}

res()