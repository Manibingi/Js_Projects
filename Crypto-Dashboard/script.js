const cardContainer = document.querySelector(".card-container");
const apiUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";

fetch(apiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.map((item) => {
      cardContainer.innerHTML += `<div class="card">
        <div class="image">
            <img src=${item.image} />
        </div>
        
        <div class="details">
            <div class="row">
                <div class="name">${item.name}</div>
                <div class="price">${item.current_price}</div>
            </div>
            
            <div class="row">
                <div class="symbol">${item.symbol}</div>
                <div class="percent">${item.market_cap_change_percentage_24h}%</div>
            </div>
        </div>
        </div>`;
    });
  })
  .catch((error) => {
    console.error("There was a problem", error);
  });
