var Ticker = document.querySelector(".input")


$('.search-btn').click(function(){
    var ticker = Ticker.value.trim();
    var data = localStorage.getItem(ticker);
    if(data){
        console.log(JSON.parse(data))
    }else{
        getData(ticker)
    }
})

function getData(ticker){

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://alpha-vantage.p.rapidapi.com/query?from_currency=${ticker}&function=CURRENCY_EXCHANGE_RATE&to_currency=USD`,
        "method": "GET",
        "headers": {
		"x-rapidapi-key": "6e2a194552msh708477475f34fd7p1cb828jsnac3379c4cc7d",
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
    console.log(response);
    localStorage.setItem(ticker, JSON.stringify(response))
});
}

var str = `${2>3}`

// need to create localStorage
//need to link stocks with save buttons
// need to create remove button
// create search bar function
