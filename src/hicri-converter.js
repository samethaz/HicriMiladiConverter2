/*HicriDateConvert fonksioyunua Gonderilen Miladi yil, Hicri tarihe cevrilir  */
function HicriDateConvert(MiladiDate){
    return (MiladiDate-Math.round(MiladiDate/33))-622-1;
}

    module.exports = {
        Hicri : HicriDateConvert
    }