const fs=require('fs')
fs.writeFileSync('Append.txt','I am learning Node.js')
fs.appendFileSync('Append.txt',' \nThis is my first program in Node.js')
