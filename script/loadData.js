

let package_controller = document.querySelector('.package-controller ');
let contentBox = document.querySelector('.content_box');
let limit_package;
let unlimited_package;
let content;
let icon_type = '<i class="fa-regular fa-moon"></i>';
let feature;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const area = urlParams.get('data');

if(area){

fetch("script/data.json")
.then((response) => response.json())
  .then((data) => {

    if (data[area].hasOwnProperty("family")) {



 

      createButton("فامیلی", "tab_btn active");


   

        contentBox.innerHTML += `
        <div class="content active">
          ${
            data[area]["family"].hasOwnProperty("limit") ? `
            <div class="limit"><h2>بسته های محدود</h2></div> 
            <div class="package-detail limit-package"></div>` : ``
          }
          ${
            data[area]["family"].hasOwnProperty("unlimited") ? `
            <div class="unlimited"><h2>بسته های نامحدود</h2></div>
            <div class="package-detail unlimited-package"></div>` : ``
          }
        </div>`;



      if (data[area]["family"].hasOwnProperty("limit")) {
        for (let i = 0; i < data[area]["family"]["limit"].length; i++) {

          if(data[area]["family"]["limit"][i].hasOwnProperty("feature")){
            feature = `
            <div class="package-data-speed package-data-night-speed">
            <i class="fa-regular fa-moon"></i>
            <p>${data[area]["family"]["limit"][i]["feature"]["feature_type"]}</p>
            <div class="night-speed-line"></div>
            <div class="night-speed-start"><span>${data[area]["family"]["limit"][i]["feature"]["start"]}</span></div>
            <div class="night-speed-end"><span>${data[area]["family"]["limit"][i]["feature"]["end"]}</span></div>
          </div>
            `;
          }else{
            feature = ``;
          }
          
          contentBox.firstElementChild.querySelector('.limit-package').innerHTML += `
        <div class="package">
            <div class="package-shape">
              <div class="package-top-shape-rectangle">
                <div class="package-top-shape-data">
                  <h2>${data[area]["family"]["limit"][i].amount}</h2>
                </div>
                <div class="package-shape-top-triangle"></div>
              </div>
            </div>
            <div class="package-data">
              <div class="package-data-money">
                <i class="fa-regular fa-money-bill"></i>
                <p> ${data[area]["family"]["limit"][i].money} افغانی</p>
              </div>
  
              <div class="package-data-duration">
                <i class="fa-solid fa-calendar-days"></i>
                <p>یک ماه</p>
              </div>
  
              <div class="package-data-speed">
                <i class="fa-regular fa-gauge"></i>
                <p>${data[area]["family"]["limit"][i].speed}</p>
              </div>
              ${feature}
              <div class="package-data-connectionType">
                <i class="fa-solid fa-signal-stream"></i>
                <p>اختصاصی</p>
              </div>
            </div>
            <div class="package-bottom-shape"></div>
          </div>
  
        `;

        }
      }


      if (data[area]["family"].hasOwnProperty("unlimited")) {
        for (let i = 0; i < data[area]["family"]["unlimited"].length; i++) {

          if(data[area]["family"]["unlimited"][i].hasOwnProperty("feature")){
            feature = `
            <div class="package-data-speed package-data-night-speed">
            <i class="fa-regular fa-moon"></i>
            <p>${data[area]["family"]["unlimited"][i]["feature"]["feature_type"]}</p>
            <div class="night-speed-line"></div>
            <div class="night-speed-start"><span>${data[area]["family"]["unlimited"][i]["feature"]["start"]}</span></div>
            <div class="night-speed-end"><span>${data[area]["family"]["unlimited"][i]["feature"]["end"]}</span></div>
          </div>
            `;
          }else{
            feature = ``;
          }

          contentBox.firstElementChild.querySelector('.unlimited-package').innerHTML += `
        <div class="package">
            <div class="package-shape">
              <div class="package-top-shape-rectangle">
                <div class="package-top-shape-data">
                  <h2>${data[area]["family"]["unlimited"][i].amount}</h2>
                </div>
                <div class="package-shape-top-triangle"></div>
              </div>
            </div>
            <div class="package-data">
              <div class="package-data-money">
                <i class="fa-regular fa-money-bill"></i>
                <p> ${data[area]["family"]["unlimited"][i].money} افغانی</p>
              </div>
  
              <div class="package-data-duration">
                <i class="fa-solid fa-calendar-days"></i>
                <p>یک ماه</p>
              </div>
              ${feature}
              <div class="package-data-connectionType">
                <i class="fa-solid fa-signal-stream"></i>
                <p>اختصاصی</p>
              </div>
            </div>
            <div class="package-bottom-shape"></div>
          </div>
  
        `;

        }
      }

    }

    if (data[area].hasOwnProperty("hostspot")) {


      
      contentBox.innerHTML += `
        <div class="content">
          ${
            data[area]["hostspot"].hasOwnProperty("limit") ? `
            <div class="limit"><h2>بسته های محدود</h2></div> 
            <div class="package-detail limit-package"></div>` : ``
          }
          ${
            data[area]["hostspot"].hasOwnProperty("unlimited") ? `
            <div class="unlimited"><h2>بسته های نامحدود</h2></div>
            <div class="package-detail unlimited-package"></div>` : ``
          }
        </div>`;

      if (contentBox.firstElementChild) {
        let firstChild = contentBox.firstElementChild;
        if (firstChild.nextElementSibling) {
          content = contentBox.firstElementChild.nextElementSibling;
          createButton("هاتسپات", "tab_btn");
        } else {
          content = contentBox.firstElementChild;
          content.classList.add('active');
          createButton("هاتسپات", "tab_btn active");
        }
      }

      if (data[area]["hostspot"].hasOwnProperty("limit")) {

        
        

        for (let i = 0; i < data[area]["hostspot"]["limit"].length; i++) {
          
          if(data[area]["hostspot"]["limit"][i].hasOwnProperty("feature")){
            feature = `
            <div class="package-data-speed package-data-night-speed">
            <i class="fa-regular fa-moon"></i>
            <p>${data[area]["hostspot"]["limit"][i]["feature"]["feature_type"]}</p>
            <div class="night-speed-line"></div>
            <div class="night-speed-start"><span>${data[area]["hostspot"]["limit"][i]["feature"]["start"]}</span></div>
            <div class="night-speed-end"><span>${data[area]["hostspot"]["limit"][i]["feature"]["end"]}</span></div>
          </div>
            `;
          }else{
            feature = ``;
          }
      
          content.querySelector('.limit-package').innerHTML += `
          <div class="package">
              <div class="package-shape">
                <div class="package-top-shape-rectangle">
                  <div class="package-top-shape-data">
                    <h2>${data[area]["hostspot"]["limit"][i].amount}</h2>
                  </div>
                  <div class="package-shape-top-triangle"></div>
                </div>
              </div>
              <div class="package-data">
                <div class="package-data-money">
                  <i class="fa-regular fa-money-bill"></i>
                  <p> ${data[area]["hostspot"]["limit"][i].money} افغانی</p>
                </div>
                <div class="package-data-duration">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p>یک ماه</p>
                </div>
                <div class="package-data-speed">
                  <i class="fa-regular fa-gauge"></i>
                  <p>${data[area]["hostspot"]["limit"][i].speed}</p>
                </div>
                ${feature}
                <div class="package-data-connectionType">
                  <i class="fa-solid fa-signal-stream"></i>
                  <p>اختصاصی</p>
                </div>
              </div>
              <div class="package-bottom-shape"></div>
            </div>
    
          `;

        }
      }


      
      if (data[area]["hostspot"].hasOwnProperty("unlimited")) {
        
     

        for (let i = 0; i < data[area]["hostspot"]["unlimited"].length; i++) {

          if(data[area]["hostspot"]["unlimited"][i]["type"] == "daily"){
            icon_type = '<i class="fa-regular fa-sun" style="font-size:15px;"></i>';
          }

          console.log(data[area]["hostspot"]["unlimited"].length);

          if(data[area]["hostspot"]["unlimited"][i].hasOwnProperty("feature")){
            feature = `
            <div class="package-data-speed package-data-night-speed">
            ${icon_type}
            <p>${data[area]["hostspot"]["unlimited"][i]["feature"]["feature_type"]}</p>
            <div class="night-speed-line"></div>
            <div class="night-speed-start"><span>${data[area]["hostspot"]["unlimited"][i]["feature"]["start"]}</span></div>
            <div class="night-speed-end"><span>${data[area]["hostspot"]["unlimited"][i]["feature"]["end"]}</span></div>
          </div>
            `;
          }else{
            feature = ``;
          }

          content.querySelector('.unlimited-package').innerHTML += `
          <div class="package">
              <div class="package-shape">
                <div class="package-top-shape-rectangle">
                  <div class="package-top-shape-data">
                    <h2>${data[area]["hostspot"]["unlimited"][i].amount}</h2>
                  </div>
                  <div class="package-shape-top-triangle"></div>
                </div>
              </div>
              <div class="package-data">
                <div class="package-data-money">
                  <i class="fa-regular fa-money-bill"></i>
                  <p> ${data[area]["hostspot"]["unlimited"][i].money} افغانی</p>
                </div>
    
                <div class="package-data-duration">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p>یک ماه</p>
                </div>
                ${feature}
                <div class="package-data-connectionType">
                  <i class="fa-solid fa-signal-stream"></i>
                  <p>اختصاصی</p>
                </div>
              </div>
              <div class="package-bottom-shape"></div>
            </div>
    
          `;

        }
      }


    }


    if (data[area].hasOwnProperty("commercial")) {

      
        contentBox.innerHTML += `
        <div class="content">
          ${
            data[area]["commercial"].hasOwnProperty("limit") ? `
            <div class="limit"><h2>بسته های محدود</h2></div> 
            <div class="package-detail limit-package"></div>` : ``
          }
          ${
            data[area]["commercial"].hasOwnProperty("unlimited") ? `
            <div class="unlimited"><h2>بسته های نامحدود</h2></div>
            <div class="package-detail unlimited-package"></div>` : ``
          }
        </div>`;

        if (contentBox.firstElementChild) {
          let firstChild = contentBox.firstElementChild;
          if (firstChild.nextElementSibling) {

            let secondChild = firstChild.nextElementSibling;
            if(secondChild.nextElementSibling){
              content = secondChild.nextElementSibling;
            }else{
              content = secondChild;
            }
            createButton("تجارتی", "tab_btn");

          } else {
            content = firstChild;
            content.classList.add('active');
            createButton("تجارتی", "tab_btn active");
          }
        }

      if (data[area]["commercial"].hasOwnProperty("limit")) {
        for (let i = data[area]["commercial"]["limit"].length - 1; i >= 0; i--) {

          if(data[area]["commercial"]["limit"][i].hasOwnProperty("feature")){
            feature = `
            <div class="package-data-speed package-data-night-speed">
            <i class="fa-regular fa-moon"></i>
            <p>${data[area]["family"]["limit"][i]["feature"]["feature_type"]}</p>
            <div class="night-speed-line"></div>
            <div class="night-speed-start"><span>${data[area]["family"]["limit"][i]["feature"]["start"]}</span></div>
            <div class="night-speed-end"><span>${data[area]["family"]["limit"][i]["feature"]["end"]}</span></div>
          </div>
            `;
          }else{
            feature = ``;
          }

          content.querySelector('.limit-package').innerHTML += `
          <div class="package">
              <div class="package-shape">
                <div class="package-top-shape-rectangle">
                  <div class="package-top-shape-data">
                    <h2>${data[area]["commercial"]["limit"][i].amount}</h2>
                  </div>
                  <div class="package-shape-top-triangle"></div>
                </div>
              </div>
              <div class="package-data">
                <div class="package-data-money">
                  <i class="fa-regular fa-money-bill"></i>
                  <p> ${data[area]["commercial"]["limit"][i].money} افغانی</p>
                </div>
    
                <div class="package-data-duration">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p>یک ماه</p>
                </div>
    
                <div class="package-data-speed">
                  <i class="fa-regular fa-gauge"></i>
                  <p>${data[area]["commercial"]["limit"][i].speed}</p>
                </div>
                ${feature}
                <div class="package-data-connectionType">
                  <i class="fa-solid fa-signal-stream"></i>
                  <p>اختصاصی</p>
                </div>
              </div>
              <div class="package-bottom-shape"></div>
            </div>
    
          `;

        }
      }


      if (data[area]["commercial"].hasOwnProperty("unlimited")) {
        for (let i = data[area]["commercial"]["unlimited"].length - 1; i >= 0; i--) {

          if(data[area]["commercial"]["unlimited"][i].hasOwnProperty("feature")){
            feature = `
            <div class="package-data-speed package-data-night-speed">
            <i class="fa-regular fa-moon"></i>
            <p>${data[area]["commercial"]["unlimited"][i]["feature"]["feature_type"]}</p>
            <div class="night-speed-line"></div>
            <div class="night-speed-start"><span>${data[area]["commercial"]["unlimited"][i]["feature"]["start"]}</span></div>
            <div class="night-speed-end"><span>${data[area]["commercial"]["unlimited"][i]["feature"]["end"]}</span></div>
          </div>
            `;
          }else{
            feature = ``;
          }

          content.querySelector('.unlimited-package').innerHTML += `
          <div class="package">
              <div class="package-shape">
                <div class="package-top-shape-rectangle">
                  <div class="package-top-shape-data">
                    <h2>${data[area]["commercial"]["unlimited"][i].amount}</h2>
                  </div>
                  <div class="package-shape-top-triangle"></div>
                </div>
              </div>
              <div class="package-data">
                <div class="package-data-money">
                  <i class="fa-regular fa-money-bill"></i>
                  <p> ${data[area]["commercial"]["unlimited"][i].money} افغانی</p>
                </div>
    
                <div class="package-data-duration">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p>یک ماه</p>
                </div>
    
                ${feature}
                <div class="package-data-connectionType">
                  <i class="fa-solid fa-signal-stream"></i>
                  <p>اختصاصی</p>
                </div>
              </div>
              <div class="package-bottom-shape"></div>
            </div>
    
          `;

        }
      }



    }

    handleTabButtonClick();
  })
  .catch((error) => {
    console.error("Error loading JSON file: " + error);
  });
}


function createButton(text, className) {

  let button = document.createElement("button");
  let node = document.createTextNode(text);
  button.appendChild(node);
  button.setAttribute("class", className);
  package_controller.appendChild(button);

}


function handleTabButtonClick() {
  const tabs = document.querySelectorAll(".tab_btn");
  const all_content = document.querySelectorAll(".content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
      all_content.forEach((content) => {
        content.classList.remove("active");
      });
      all_content[index].classList.add("active");
    });
  });
}