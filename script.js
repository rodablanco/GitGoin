$.getJSON("https://api.coingecko.com/api/v3/search/trending", function (data) {
    console.log(data);
    for (let i = 0; i < data.coins.length; i++) {
        const element = data.coins[i]
        console.log(element)
        var symbol = data.coins[i].item.symbol;
        $("#navbarBasicExample").append(`
    <a class="navbar-item is-mobile" id="item1">
            ${symbol} <img src="${element.item.thumb} style: max-width: 100px, margin-left: 4px, position: relative, top: 6.5px"/>
        </a>`);
    }

})
var searched = JSON.parse(localStorage.getItem('watchlist')) || []
renderList()
var ticker = "BTC";
// var News = function() {
ticker = $('.input').val().trim()

$.getJSON(`https://api.lunarcrush.com/v2?data=feeds&key=m28t77w3quhag6eg8jdnmd&symbol=${ticker}&limit=20&sources=news,urls`, function (data) {
    console.log(data);
    var dupeMap = [];
    for (i = 0; i < data.data.length; i++) {
        var publisher = data.data[i].publisher;
        var title = data.data[i].title;
        var thumbnail = data.data[i].thumbnail;
        var description = data.data[i].description;

        if (!dupeMap.includes(title)) {
            dupeMap.push(title)
            $('#news').append(`<div class=card>
        <p class="publisher">${publisher || "Anonymous"}</p>
        <img src="${thumbnail}" onerror="this.src='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2090134/settings_images/5K2UMED5Qh6365tuYK1v_bitcoin1.jpg'" class="thumbnail">
        <p class="card-title">${title}</p>
        <p class="description">${description}</p>
        </div>`)
        }
    }

})
// }

// $('.search-btn').click(News);


$.getJSON("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h", function (data) {
    console.log(data);


    for (var i = 0; i < data.length; i++) {
        var cryptoName = data[i].symbol.toUpperCase()
        var image = data[i].image
        var price = data[i].current_price
        var marketCapRank = data[i].market_cap_rank

        $("#market").append(`
        
        <button id=${i} class="data-card" data-symbol=${cryptoName}>
        <li>${marketCapRank}</li>
        <li>${cryptoName}</li>
        <div class="card-image"><img src="${image}"/>
        </div>
        <li>$ ${price}.00</li>
        
        </button>
       
        `)

    }

})
//watchlist 

var click = $(".data").on('click', '.data-card', function () {
    var data = $(this).attr('data-symbol');
    if (!searched.includes(data)) searched.push(data)
    localStorage.setItem("watchlist", JSON.stringify(searched))
})
function renderList() {

    for (var i = 0; i < searched.length; i++) {
        var arrSymbol = searched[i];
        $('.saved-list').append(`
        <button>${arrSymbol}</button>`)
    }


}







// need to create localStorage
//need to link stocks with save buttons
// need to create remove button
// create search bar function

