const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://alpha-vantage.p.rapidapi.com/query?from_currency=BTC&function=CURRENCY_EXCHANGE_RATE&to_currency=USD",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6e2a194552msh708477475f34fd7p1cb828jsnac3379c4cc7d",
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
