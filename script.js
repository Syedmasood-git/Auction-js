const url = "https://gauravgitacc.github.io/postAppData/auctionData.json";
const container = document.getElementById("container");
async function fetchData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    renderData(result);
  } catch (error) {
    console.log({ error });
  }
}
function renderData(data) {
    console.log(data);
  // <div class="card">
  //         <div class="top">
  //             <div class="left">
  //                 <span class="badge">PENDING</span>
  //                 <span class="case-number">S230SKAN</span>
  //             </div>
  //             <div class="right">Mar 24, 2023, 5:03:24 PM</div>
  //         </div>
  //         <div class="bottom">
  //             <div class="from-location">Bengaluru International Airport</div>
  //             <div class="to-location">Koramangala 4th Block, Bengaluru, Karnataka, India</div>
  //             <div class="price">₹ 200</div>
  //         </div>
  //     </div>
  data.forEach((card) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card";
    cardContainer.innerHTML = `
                    <div class="top">
                        <div class="left">
                            <span class="badge ${card.status.toLowerCase()}">${card.status}</span>
                            <span class="case-number">${card.caseNumber}</span>
                        </div>
                        <div class="right">${card.date}</div>
                    </div>
                    <div class="bottom">
                        <div class="from-location">${card.fromLocation}</div>
                        <div class="to-location">${card.toLocation}</div>
                        <div class="price">${card.fare}</div>
                    </div>`;
    container.appendChild(cardContainer);
  });
}
fetchData();
