const Home = (() => {
  const homePage = () => {
    const content = document.getElementById('content');

    const main = document.createElement('main');
    main.classList.add('home-page');

    const div = document.createElement('div');
    div.classList.add('home-div');

    const subHead = document.createElement('h2');
    subHead.innerText = 'Welcome to Food Coma!! We serve : ';

    const serveList = document.createElement('h3');
    serveList.innerHTML = '<span>Breakfast</span> <br> <span>Lunch</span> <br> <span>Dinner</span> ';

    const btn = document.createElement('button');
    btn.classList.add('btn-menu');
    btn.setAttribute('id', 'btn-menu');
    btn.innerText = 'Check Menu';

    div.appendChild(subHead);
    div.appendChild(serveList);

    div.appendChild(btn);
    main.appendChild(div);
    content.appendChild(main);
  };

  const seeHome = () => {
    const homeItem = document.getElementById('home');
    homeItem.classList.add('active');
  };
  return { homePage, seeHome };
})();

export default Home;
