/*MiladiDateConvert fonksioyunua Gonderilen Hicri yil, Miladi tarihe cevrilir  */
function MiladiDateConvert(HicriDate){
    return (HicriDate-Math.round(HicriDate/33))+622+1;}

    module.exports = {
        Miladi : MiladiDateConvert
    }