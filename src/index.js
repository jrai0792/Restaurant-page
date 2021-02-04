import Nav from './modules/nav';
import Home from './modules/home';
import Menu from './modules/menu';
import Info from './modules/info';

function clearContent() {
  const content =document.getElementById('content');
  const navItems = document.querySelectorAll('nav li');
  content.removeChild(content.lastChild);
  navItems.forEach(navItems => navItems.classList.remove('active'));
}

const showHome = () => {
  clearContent();
  Home.homePage();
  const menuBtn = document.getElementById('btn-menu');
  menuBtn.addEventListener('click', showMenu);
}

const showMenu = () => {
  clearContent();
  Menu.menuList();
}

const showInfo = () => {
  clearContent();
  Info.infoDetails();
}

document.addEventListener('DOMContentLoaded', () => {
  Nav.addNavBar();
  Home.homePage();
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const info = document.getElementById('info');

  home.addEventListener('click', showHome);
  menu.addEventListener('click', showMenu);
  info.addEventListener('click', showInfo);

});
