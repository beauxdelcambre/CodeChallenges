function filterOutlier(num){
    let even = num.filter(i => i % 2 ===0)
    let odd = num.filter(i => i % 2 !== 0)
    return even.length === 1 ? even[0] : odd[0]
}

console.log(filterOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))