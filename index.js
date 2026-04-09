async function fetchData() {
  const response = await fetch('./data.json');
  const data = await response.json();

  return data;
}

async function loadExtensions(data) {
  const extensions_container = document.getElementById('extensions-container')
  extensions_container.innerHTML = ""
  data.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')


    card.innerHTML = `
    <div class = "content">
        <img src="${item.logo}" alt="${item.name}" />
        <div class = "text" >
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          </div>
          </div>
          <div class = "buttons" >
          <button class="remove"> Remove </button>
 <input type="checkbox" role="switch" class="switch ${item.isActive ? 'active' : 'inactive'}" ${item.isActive ? 'checked' : ''}/>          </div>
        `;

    const toggleSwitch = card.querySelector('.switch')
    toggleSwitch.addEventListener("change", () => {
      item.isActive = !item.isActive;
      toggleSwitch.classList.toggle('active', item.isActive);
      toggleSwitch.classList.toggle('inactive', !item.isActive);
    })




    extensions_container.appendChild(card);

  });
}
const extensions_container = document.getElementById('extensions-container')

async function renderData() {
  console.log("button clicked");

  const data = await fetchData();
  extensions_container.innerHTML = "";
  loadExtensions(data)
}

renderData();

// theme-changer code
const themeButton = document.querySelector('.theme');
themeButton.addEventListener('click', () => {
   const isDark = document.body.classList.toggle('light');

   themeButton.innerHTML = isDark
       ? `<img src="/assets/images/icon-sun.svg" alt="Switch to light theme" />`
       : `<img src="/assets/images/icon-moon.svg" alt="Switch to dark theme" />`;
  })

// status-btns funcgtionality

const allBtn = document.querySelector('.status.all');
const activeBtn = document.querySelector('.status.active');
const inactiveBtn = document.querySelector('.status.inactive');


activeBtn.addEventListener('click', async () => {
  const data = await fetchData();

  extensions_container.innerHTML = "";
  const activeExt = data.filter(item => item.isActive);
  loadExtensions(activeExt)
})


inactiveBtn.addEventListener('click', async () => {
  const data = await fetchData();

  extensions_container.innerHTML = "";
  const inactiveExt = data.filter(item => !item.isActive);
  loadExtensions(inactiveExt)

})

allBtn.addEventListener('click', async () => {
  const data = await fetchData();

  extensions_container.innerHTML = "";
  loadExtensions(data);

})

const buttons = document.querySelectorAll('.status');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    // remove active from all
    buttons.forEach(b => b.classList.remove('activebtn'));

    // add to clicked one
    btn.classList.add('activebtn');

  });
});

