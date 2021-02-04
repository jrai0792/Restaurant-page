const Nav = (()=> {
  const addNavBar = () => {
    const content = document.getElementById("content");
    const container = document.createElement("div");
    container.setAttribute('class','container');
    const navbar = document.createElement("nav");
    navbar.setAttribute('class','navbar');
    const logo = document.createElement("h1");
    logo.textContent = "Food Coma";
    logo.setAttribute('id','logo');
    const ul = document.createElement("ul");
    ul.setAttribute('class','navbar-nav, flex');
    ul.setAttribute('id','navbar-nav');
    const liHome = document.createElement("li");
    liHome.setAttribute('class','nav-item');
    const aHome = document.createElement("a");
    aHome.href = "#";
    aHome.innerText = "Home";
    aHome.classList.add("nav-link");
    aHome.setAttribute('id','home');
    aHome.setAttribute('class', 'nav-link, active');
    const liMenu = document.createElement("li");
    liMenu.setAttribute('class','nav-item');
    const aMenu = document.createElement("a");
    aMenu.href = "#";
    aMenu.innerText = "Menu";
    aMenu.classList.add("nav-link");
    aMenu.setAttribute('id','menu');
    const liInfo = document.createElement('li');
    liInfo.setAttribute('class','nav-item');
    const aInfo = document.createElement('a');
    aInfo.href = "#";
    aInfo.innerText = "Info";
    aInfo.classList.add("nav-link");
    aInfo.setAttribute('id','info');
    liInfo.appendChild(aInfo);
    liMenu.appendChild(aMenu);
    liHome.appendChild(aHome);
    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liInfo);
    navbar.appendChild(logo);
    navbar.appendChild(ul);
    container.appendChild(navbar);
    content.appendChild(container);
  
  };
  return {addNavBar};
  
})();


export default Nav;