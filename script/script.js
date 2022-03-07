
function showSection(id){
  const sections = [...document.querySelectorAll('main section')];
  sections.forEach(section => {
    section.classList.add('hidden');
  });
  document.querySelector('main img').classList.add('hidden');
  document.querySelector(`.${id}`).classList.remove('hidden');
}

function initiateApp(){
  const sections = [...document.querySelectorAll('main section')];
  sections.forEach(section => {
    section.classList.add('hidden');
  });
  document.querySelector('main img').classList.remove('hidden');
}

initiateApp();
