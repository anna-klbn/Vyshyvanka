// const mobMenuButton = document.querySelector('.mob-menu-btn');
// const mobMenu = document.querySelector('.mob-menu');
// const closeMenuButton = document.querySelector('.menu-close-btn');

// mobMenuButton.addEventListener('click', () => {
//     mobMenu.classList.add('is-open');
// });

// closeMenuButton.addEventListener('click', () => {
//     mobMenu.classList.remove('is-open');
// });
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();


const form = document.querySelector('.modal');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const email = e.currentTarget.elements.email.value;
    const texterea = document.querySelector('comment');

    if (name === '' || email === '') {
        alert('Fill in all fields')
        return 
    }
    const object = {
        name: name,
        email: email  
    }
    
    console.log(object)
    e.target.reset()
 
})