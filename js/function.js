//Expression function (không hỗ trợ hoisting)
var whatIsLove = function () {
  console.log(`What is Love?`);
};
whatIsLove();

//Declaration function (Hỗ trợ hoisting)
function isLove() {
  console.log(
    `'Love is not jealousy, ambition, 
    fulfilment or becoming; 
    love is not desire or pleasure' 
    ‘When you love, everything will come right. 
    Love has its own action’ Founded by J Krishnamurti.`
  );
}
isLove();


