


        // Navbar Script Start

        const navOpenBtn = document.querySelector(".navOpenBtn"),
            navCloseBtn = document.querySelector(".navCloseBtn");

        const navbar = document.querySelector(".sidebar");
        const overlay = document.querySelector('.overlay');

        navOpenBtn.addEventListener("click", () => {
            navbar.classList.toggle("show-menu");
            overlay.classList.toggle("show-overlay");
        });

        navCloseBtn.addEventListener("click", () => {
            navbar.classList.toggle("show-menu");
            overlay.classList.toggle("show-overlay");
        });

        overlay.addEventListener("click", () => {
          navbar.classList.toggle("show-menu");
          overlay.classList.toggle("show-overlay");
      });


        const menu = document.querySelector('.menu-item > div');
        const menus = document.querySelector(".sub-menu");
        const province = document.querySelectorAll(".province");
        const district = document.querySelectorAll(".districts");


        menu.addEventListener("click", () => {
            menu.firstElementChild.classList.toggle("fa-plus");
            menu.firstElementChild.classList.toggle("fa-minus")
            menus.classList.toggle("show-menu");
        })

        province.forEach(((item, index) => {
            item.addEventListener("click", () => {
                district[index].classList.toggle("show-menu");
                item.firstElementChild.classList.toggle("turn-angle")
            });
        }));




        window.matchMedia("(max-width: 768px)").addEventListener("change", (viewPort)=>{
        if (!viewPort.matches) {
            if(navbar.classList.contains("show-menu") && overlay.classList.contains("show-overlay")){
                navbar.classList.toggle("show-menu");
                overlay.classList.toggle("show-overlay");
            }
          } 
         });

         let navbar_menu = document.querySelectorAll(".menu-item  .section-links");
         navbar_menu.forEach(menu => {
             menu.addEventListener("click", (e) =>{
                navbar.classList.toggle("show-menu");
                overlay.classList.toggle("show-overlay");
             });
         });

        // Navbar Script End