const mongoose =  require('mongoose')
const User =  require('./user');
mongoose.connect('mongodb://localhost/ReadFile');
let fileName = ``;

fileName = process.argv[2];
console.log(fileName);
convertExcel = require('excel-as-json').processFile 
options = {
    sheet:'1',
    isColOriented: false,
    omitEmtpyFields: false
} 
convertExcel (fileName, 'row.json', options, (err, data1) =>{
    if (err){
      console.log ("JSON conversion failure:EEEEEEEEEEEE #{err}",err)
    } else{
        
        User.insertMany(data1);

}
    })

    



    