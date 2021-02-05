const Menu = (() => {
  const menuList = () => {
    const container = document.getElementById('content');
    const div = document.createElement('div');
    div.classList.add('menu-div');
    const menuHead = document.createElement('h3');
    menuHead.setAttribute('class', 'menu-head');
    menuHead.textContent = 'Food Coma Menu';
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const breakDiv = document.createElement('div');
    breakDiv.classList.add('div-break');
    const h1 = document.createElement('h2');
    h1.innerText = 'Breakfast';
    const brkUl = document.createElement('ul');
    brkUl.classList.add('breakfast-ul');
    const brkList1 = document.createElement('li');
    brkList1.setAttribute('class', 'breakfast-list');
    brkList1.textContent = 'Omlette';
    const brkList2 = document.createElement('li');
    brkList2.setAttribute('class', 'breakfast-list');
    brkList2.textContent = 'Dosa';
    const brkList3 = document.createElement('li');
    brkList3.setAttribute('class', 'breakfast-list');
    brkList3.textContent = 'Pancakes';
    const brkList4 = document.createElement('li');
    brkList4.setAttribute('class', 'breakfast-list');
    brkList4.textContent = 'Poridge';
    const brkList5 = document.createElement('li');
    brkList5.setAttribute('class', 'breakfast-list');
    brkList5.textContent = 'Cereals';

    brkUl.appendChild(brkList1);
    brkUl.appendChild(brkList2);
    brkUl.appendChild(brkList3);
    brkUl.appendChild(brkList4);
    brkUl.appendChild(brkList5);
    breakDiv.appendChild(h1);
    breakDiv.appendChild(brkUl);


    const lunchDiv = document.createElement('div');
    lunchDiv.classList.add('div-lunch');
    const h2 = document.createElement('h2');
    h2.innerText = 'Lunch';
    const lunchUl = document.createElement('ul');
    lunchUl.classList.add('lunch-ul');
    const lunchList1 = document.createElement('li');
    lunchList1.setAttribute('class', 'lunch-list');
    lunchList1.textContent = 'Quinoa Bowl';
    const lunchList2 = document.createElement('li');
    lunchList2.setAttribute('class', 'lunch-list');
    lunchList2.textContent = 'Chicken Biryani';
    const lunchList3 = document.createElement('li');
    lunchList3.setAttribute('class', 'lunch-list');
    lunchList3.textContent = 'Khichdi';
    const lunchList4 = document.createElement('li');
    lunchList4.setAttribute('class', 'lunch-list');
    lunchList4.textContent = 'Rice Sambhar';
    const lunchList5 = document.createElement('li');
    lunchList5.setAttribute('class', 'lunch-list');
    lunchList5.textContent = 'Tacos';


    lunchUl.appendChild(lunchList1);
    lunchUl.appendChild(lunchList2);
    lunchUl.appendChild(lunchList3);
    lunchUl.appendChild(lunchList4);
    lunchUl.appendChild(lunchList5);
    lunchDiv.appendChild(h2);
    lunchDiv.appendChild(lunchUl);

    const dinnerDiv = document.createElement('div');
    dinnerDiv.classList.add('div-dinner');
    const h3 = document.createElement('h2');
    h3.innerText = 'Dinner';
    const dinnerUl = document.createElement('ul');
    dinnerUl.classList.add('dinner-ul');
    const dinnerList1 = document.createElement('li');
    dinnerList1.setAttribute('class', 'dinner-list');
    dinnerList1.textContent = 'Salad Bowl';
    const dinnerList2 = document.createElement('li');
    dinnerList2.setAttribute('class', 'dinner-list');
    dinnerList2.textContent = 'Sandwich';
    const dinnerList3 = document.createElement('li');
    dinnerList3.setAttribute('class', 'dinner-list');
    dinnerList3.textContent = 'Khichdi';
    const dinnerList4 = document.createElement('li');
    dinnerList4.setAttribute('class', 'dinner-list');
    dinnerList4.textContent = 'Pasta';
    const dinnerList5 = document.createElement('li');
    dinnerList5.setAttribute('class', 'dinner-list');
    dinnerList5.textContent = 'Noodles';


    dinnerUl.appendChild(dinnerList1);
    dinnerUl.appendChild(dinnerList2);
    dinnerUl.appendChild(dinnerList3);
    dinnerUl.appendChild(dinnerList4);
    dinnerUl.appendChild(dinnerList5);
    dinnerDiv.appendChild(h3);
    dinnerDiv.appendChild(dinnerUl);

    menu.appendChild(breakDiv);
    menu.appendChild(lunchDiv);
    menu.appendChild(dinnerDiv);

    div.appendChild(menuHead);
    div.appendChild(menu);
    container.appendChild(div);
  };

  const seeMenu = () => {
    const newMenu = document.getElementById('menu');
    newMenu.classList.add('active');
  };

  return { menuList, seeMenu };
})();

export default Menu;