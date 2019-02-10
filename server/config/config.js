
process.env.PORT = process.env.PORT || 3000

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


let urlDB;
if(process.env.NODE_ENV === 'dev'){
     urlDB= 'mongodb://localhost:27017/cafe'
}else{
     urlDB= 'mongodb+srv://joasimar:Jessika2526.@cafe-9xm9a.mongodb.net/test?retryWrites=true'
}

process.env.URLDB = urlDB;