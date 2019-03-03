
process.env.PORT = process.env.PORT || 3000

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


process.env.CADUCIDAD_TOKEN= 60*60*24*30
process.env.SEED= process.env.SEED || 'secretdev'

let urlDB;
if(process.env.NODE_ENV === 'dev'){
     urlDB= 'mongodb+srv://joasimar:ibFihLuoIcFoLMOr@cluster0-z2ne7.mongodb.net/cafe'
}else{
     urlDB= process.env.Mongo
}
process.env.URLDB = urlDB;