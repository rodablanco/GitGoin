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
//universal variable to change parameter value.
var ticker = "";
//named the function so we can call it inside other functions.
var News = function(symbol) {
ticker = $('.input').val().trim() || symbol; 
//the function pulls data from the api and creates a card to append to the news div. 
$.getJSON(`https://api.lunarcrush.com/v2?data=feeds&key=m28t77w3quhag6eg8jdnmd&symbol=${ticker}&limit=20&sources=news,urls`,function(data){
    console.log(data)
    //
    if (!data.data.length){
        return; 
    };
    //emptys previous news on every search.
    $('#news').empty();
    //turns data into an objec
    var dupeMap = [];
    for (i=0; i < data.data.length; i++) {
    var publisher = data.data[i].publisher; 
    var title = data.data[i].title; 
    var thumbnail = data.data[i].thumbnail;
    var description = data.data[i].description;
    var url = data.data[i].url;
    //a statemt to prevent duplicates  
    if(!dupeMap.includes(title)){
        dupeMap.push(title)
    //appends a card to the html to include all data gathered from api
    $('#news').append(`<a target="_blank" href=${url}>
    <div class=card>
    <p class="publisher">${publisher || 'Anonymous'}</p>
    <img src="${thumbnail}"onerror="this.src='https://www.regtechtimes.com/wp-content/uploads/2019/01/bitcoin125.jpg'"class="thumbnail">
    <p class="card-title">${title}</p>
    <p class="description">${description}</p>
  </div>
  </a>`)
    }
}

    
    //trying to catch errors on page. 
}).fail(function(error){
    console.error(error); 
})
}
//makes BTC the default news when page loads
News('BTC'); 
//search button calls News function
$('.search-btn').click(News);


$.getJSON("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=24h", function (data) {
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
    //calls news function to run data from card value
    News(data);
})



function renderList() {

    for (var i = 0; i < searched.length; i++) {
        var arrSymbol = searched[i];
        $('.saved-list').append(`
        <button id="delete">${arrSymbol}</button>`)
    }

  
}

// $('#delete').on('click', function(){
//     localStorage.removeItem("watchlist")
// })

$('#delete').dblclick(function(){
    

        searched.splice(Watchlist, 1)
    }
)
// $('saved').on('click', function(event) {

// })

// need to create localStorage
//need to link stocks with save buttons
// need to create remove button
// create search bar function

