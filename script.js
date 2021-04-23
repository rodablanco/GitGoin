<<<<<<< HEAD
function setup() {
    createCanvas(800,800);
    loadJSON('')
}
=======
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coingecko.p.rapidapi.com/simple/token_price/%7Bid%7D?vs_currencies=undefined&contract_addresses=%3CREQUIRED%3E&include_24hr_vol=false&include_market_cap=false&include_last_updated_at=false&include_24hr_change=false",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "78fc83ea3bmsh1a6cb7063775dc8p1fb72fjsn15ccb9ecd5d2",
		"x-rapidapi-host": "coingecko.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

// need to create localStorage
//need to link stocks with save buttons
// need to create remove button
// create search bar function
>>>>>>> 7041506c73d77cf29629b783c40c30494e3f6e20
