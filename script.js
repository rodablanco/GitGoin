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





var Ticker = document.querySelector(".input")

var Ticker = document.querySelector(".input");
var tickerMap = {};

$.getJSON(`https://api.coingecko.com/api/v3/coins/list`, function (data) {
    data.forEach(function (item) {
        tickerMap[item.symbol.toLowerCase()] = item.id
    })
    // console.log(tickerMap)
})



$('.search-btn').click(function () {
    var ticker = Ticker.value.trim().toLowerCase();
    var data = localStorage.getItem(ticker);
    if (data) {
        console.log(JSON.parse(data))
    } else {
        getData(ticker)
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

