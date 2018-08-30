const mongoose =  require('mongoose')
const User =  require('./user');
mongoose.connect('mongodb://localhost/ReadFile');
convertExcel = require('excel-as-json').processFile 
options = {
    sheet:'1',
    isColOriented: false,
    omitEmtpyFields: false
} 
convertExcel ('JournAlongDummy Data.xlsx', 'row.json', options, (err, data1) =>{
    if (err){
      console.log ("JSON conversion failure:EEEEEEEEEEEE #{err}",err)
    } else{
        console.log("ther are thew @@@@@@@@@",data1)
        User.create({user : data1});

}
    })
