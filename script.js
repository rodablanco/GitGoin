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

var ticker = "BTC";
// var News = function() {
ticker = $('.input').val().trim()

$.getJSON(`https://api.lunarcrush.com/v2?data=feeds&key=m28t77w3quhag6eg8jdnmd&symbol=${ticker}&limit=20&sources=news,urls`,function(data){
    console.log(data);

    for (i=0; i < data.data.length; i++) {
    var publisher = data.data[i].publisher; 
    var title = data.data[i].title; 
    var thumbnail = data.data[i].thumbnail;
    var description = data.data[i].description;


    $('#news').append(`<div class=card>
    <p class="publisher">${publisher}</p>
    <img src="${thumbnail}" class="thumbnail">
    <p class="card-title">${title}</p>
    <p class="description">${description}</p>
  </div>`)
    }
    
})
// }

// $('.search-btn').click(News);


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

