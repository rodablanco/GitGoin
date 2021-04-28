$.getJSON("https://api.coingecko.com/api/v3/search/trending", function (data) {
    console.log(data);
    for (let i = 0; i < data.coins.length; i++) {
        const element = data.coins[i]
        console.log(element)
        var symbol = data.coins[i].item.symbol;
        $("#navbarBasicExample").append(`
    <a class="navbar-item" id="item1">
            ${symbol} <img src="${element.item.thumb} style: max-width: 100px, margin-left: 4px, position: relative, top: 6.5px"/>
        </a>`);
    }

})


var Ticker = "";

Ticker = $('.input').val().trim();

$.getJSON('https://api.lunarcrush.com/v2?data=feeds&key=m28t77w3quhag6eg8jdnmd',function(data){
    console.log(data);

    for (i=0; i < data.data.length; i++) {
    var displayNAme = data.data[i].display_name; 
    var screenName = data.data[i].twitter_screen_name; 
    var profileImg = data.data[i].profile_image;
    var body = data.data[i].body;

    $('#news').append(`<div class=card>
    <p class="displayName">${displayNAme}</p>
    <img src="${profileImg}" class="profileImage">
    <p class="screenName">@${screenName}</p>
    <p class="body">${body}</p>
  </div>`)
    }
})



$.getJSON("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h", function (data) {
    console.log(data);


    for (var i = 0; i < data.length; i++) {
        var id = data[i].symbol.toUpperCase()
        var image = data[i].image
        var price = data[i].current_price
        var marketCapRank = data[i].market_cap_rank
        $("#market").append(`
        <div class="card">
        <li>${marketCapRank}</li>
        <li>${id}</li>
        <div class="card-image"><img src="${image}"/>
        </div>
        <li>$ ${price}.00</li>
        
        </div>
        `)

    }

})








// need to create localStorage
//need to link stocks with save buttons
// need to create remove button
// create search bar function

