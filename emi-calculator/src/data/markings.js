export const priceMarkings = []
export const rateMarkings = []
export const tenureMarkings = []

for ( let i = 0; i < 9 ; i++ ){
    let val = i*25
    priceMarkings.push({
        value: val,
        label: (val<100) ? `${val}L`:`${val}Cr`
    })
}

for(let i = 0 ; i < 7 ; i++){
    let val = i*5
    tenureMarkings.push({
        value:val,
        label: `${val}Yr`
    })
}

for(let i = 4 ;i < 17;i++){
    rateMarkings.push({
        value:i,
        label:`${i}`
    })
}