const Info = (() => {
  const infoDetails = () => {
    const content = document.getElementById('content');
    const section = document.createElement('section');
    section.setAttribute('id', 'info-section');
    section.setAttribute('class', 'info-section');
    const infoHead = document.createElement('h3');
    infoHead.setAttribute('class', 'info-head');
    infoHead.innerText = "Send your queries, our team will reach out to you soon!!";
    const formDiv = document.createElement('div');
    formDiv.setAttribute('id', 'form-div');
    const form = document.createElement('form');
    form.setAttribute('class', 'form');
    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('name','email address');
    email.setAttribute('placeholder', 'Email');
    email.setAttribute('id', 'email');
    const message = document.createElement('input');
    message.setAttribute('type', 'text');
    message.setAttribute('name', 'message');
    message.setAttribute('placeholder','Write your message here.');
    message.setAttribute('id', 'message');
    const btn = document.createElement('button');
    btn.setAttribute('type','submit');
    btn.textContent="Submit";

    const infoExtra = document.createElement('div');
    infoExtra.setAttribute('id','info-extra');
    infoExtra.setAttribute('class','info-extra');
    const infoUl = document.createElement('ul');
    infoUl.setAttribute('id','info-ul');
    infoUl.setAttribute('class','info-ul');
    infoUl.classList.add('flex');
    const li1 = document.createElement('li');
    li1.textContent = 'About Us';
    li1.setAttribute('class','info-li');
    const li2 = document.createElement('li');
    li2.textContent = "Gallery";
    li2.setAttribute('class','info-li');
    const li3 = document.createElement('li');
    li3.textContent = "Packages";
    li3.setAttribute('class','info-li');
    const li4 = document.createElement('li');
    li4.textContent = "Terms and Conditions";
    li4.setAttribute('class','info-li');
    const li5 = document.createElement('li');
    li5.textContent = "Privacy Policy";
    li5.setAttribute('class','info-li');


    const br1 = document.createElement('br');
    const br2 = document.createElement('br');
    form.appendChild(email);
    form.appendChild(br1);
    form.appendChild(message);
    form.appendChild(br2);
    form.appendChild(btn);
    formDiv.appendChild(form);
    section.appendChild(infoHead);
    section.appendChild(formDiv);

    infoUl.appendChild(li1);
    infoUl.appendChild(li2);
    infoUl.appendChild(li3);
    infoUl.appendChild(li4);
    infoUl.appendChild(li5);
    infoExtra.appendChild(infoUl);

    section.appendChild(infoExtra);
    content.appendChild(section);

  };

  const seeInfo = () => {
    const newInfo = document.getElementById('info');
    newInfo.classList.add('active');
  };

  return {infoDetails, seeInfo};
})();

export default Info;