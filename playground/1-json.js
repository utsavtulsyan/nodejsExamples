const fs=require('fs')
// const book={
//     title: 'Ego is the enemy',
//     author:'Ryan Holiday'
// }
// const bookJSON=JSON.stringify(book)
// console.log(bookJSON)

// const parsedData=JSON.parse(bookJSON)
// console.log(parsedData)
const dataBuffer=fs.readFileSync('1-json.json')
const dataJSON=dataBuffer.toString()
const data=JSON.parse(dataJSON)
data.name='utsav'
const newJSON=JSON.stringify(data)
fs.writeFileSync('1-json.json',newJSON)