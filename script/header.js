let header = `

<header class="header_nav">
        <input class="menu-btn" type="checkbox" id="menu-btn">
        <li class="phone"><a href="#">
            <button id="btn-message" class="button-message">
              <div class="content-avatar">
                <div class="status-user"></div>
                <div class="avatar">
                  <svg class="user-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z">
                    </path>
                  </svg>
                </div>
              </div>
              <div class="notice-content">
                <div class="username">Ammar Ahmed</div>
              </div>
            </button>
          </a></li>
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>




        <ul class="menu">

          <div class="loogo_link">


          
          
            <li> <a href="/ineed_unlock/index.html"><div class="img_logo"></div></a></li>

            <li> <a href/ineed_unlock/index.html">home</a></li>



            <li>
              <button onclick="toggleMenu('menu1')" class="_Service">Service Price  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
              </svg></button>
              <ul id="menu1" class="dropdownMenu" style="display: none;">
                  <li class="mapa"><a href="https://www.example.com"> Service Price</a></li>
                  <li class="mapa"><a href="https://www.example.com"> Service Price</a></li>
              </ul>
            </li>

            <li>
              <button onclick="toggleMenu('menu2')" class="_Service">lidrary tool  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
              </svg></button>
              <ul id="menu2" class="dropdownMenu" style="display: none;">
                  <li class="mapa"><a href="https://www.example.com"> lidrary tool</a></li>
                  <li class="mapa"><a href="https://www.example.com"> lidrary tool</a></li>
              </ul>
            </li>



            <li> <a href="/ineed_unlock/pages/dashboard.html">tutorials</a></li>

</div>

<li class="none">

  <ul class="use_user">

<li>    <div class="flex gap">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"></path>
  </svg>
  <a href="./pages/log_in.html">login</a>
  <span>-</span>
  <a href="./pages/sign_up.html">Register</a>
</div></li>

    
<li>   <div class="user_link">
  </div></li><li class="pc"><a href="#">
      <button id="btn-message" class="button-message">
        <div class="content-avatar">
          <div class="status-user"></div>
          <div class="avatar">
            <svg class="user-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z">
              </path>
            </svg>
          </div>
        </div>
        <div class="notice-content">
          <div class="username">Ammar Ahmed</div>
        </div>
      </button>
    </a></li>
</ul></li>

  </ul>





      

     

        

      </header>
`
let nav_bar = document.getElementById('nav_bar');





nav_bar.innerHTML= header;










function toggleMenu(menuId) {
  var menu = document.getElementById(menuId);
  var dropdowns = document.getElementsByClassName('dropdownMenu');
  for (var i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i] !== menu) {
          dropdowns[i].style.display = 'none';
      }
  }
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}
