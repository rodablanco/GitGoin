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




