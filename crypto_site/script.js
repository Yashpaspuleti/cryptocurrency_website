let dge = document.getElementById("dogecoin");
let eth = document.getElementById("ethereum");
let shi = document.getElementById("shiba");

let settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin%2Cethereum%2Cshiba&vs_currencies=usd",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  dge.innerHTML = response.dogecoin.usd;
  eth.innerHTML = response.ethereum.usd;
  shi.innerHTML = response.shiba.usd;
});
