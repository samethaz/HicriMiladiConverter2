/**
 * Verilen Yil bilgisini Hicri ve Miladi Takvime cevirecektir.
 * FOnksiyonlar src klasorunde  yer alacak ve module.exports ile app.js gönderilecektir.
 * app.js de require ile gönderilen fonksiyonlar alinacak.
 * Consol da Tarih degisimini Template Literals araciligiyla yazdirilacaktir.
 */
const {Hicri}=require("./src/hicri-converter");
const {Miladi}=require("./src/miladi-converter");
console.log ("Hicri yil.......: "+ Hicri(2016));
console.log ("Miladi yil......: "+ Miladi(1350)); 

