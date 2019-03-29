// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN= '48h'


// ============================
//  SEED de autenticación
// ============================
process.env.SEED= process.env.SEED || 'secretdev'

// ============================
//  Base de datos
// ============================
let urlDB;
if(process.env.NODE_ENV === 'dev'){
     urlDB= 'mongodb://localhost:27017/cafe'
}else{
     urlDB= process.env.Mongo
}
process.env.URLDB = urlDB;


// ============================
//  Google Client ID
// ============================
process.env.CLIENT_ID= process.env.CLIENT_ID ||  '373598247322-e8sitr4t0j65gk70g05di69fd88r18vp.apps.googleusercontent.com';