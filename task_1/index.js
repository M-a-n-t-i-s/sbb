import {encoded, translations} from './data.js'

console.log("Let's rock")


const decodedFunc =(encoded,translations )=> {
    let arr=[]
    const decode = encoded.map(obj=>{
        let newObj ={}
        for (let key in obj) {
        if(obj.hasOwnProperty(key)){

            if (key.endsWith('Id') && key!=='groupId') {
                newObj[key]=translations[obj[key]] || null
                if (obj[key] in translations) {
                    arr.push(obj[key])
                }
            }
            else {
                newObj[key]=obj[key]
            }
        }
    }
        return newObj
}
    )

    let mySet =Array.from(new Set(arr))

    let countArr =[]
    for  (let el in mySet) {
        let count=0
        for (let i=0; i<arr.length; i++) {
            if (arr[i]===mySet[el]) {
                count++
            }
        }
        countArr.push(count)
    }

    let resultArr =[]
    for (let i=0; i<mySet.length; i++) {
        if (countArr[i]===1) {resultArr.push(mySet[i])}
    }

    console.log(resultArr) // список уникальных id, из encoded
    return decode

}

const decoded = decodedFunc(encoded,translations)



console.log(decoded)
