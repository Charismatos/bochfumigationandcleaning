// menuDisplayControl();

/* ---------------------------------------------------- */
/* 2. Mobile Navigation Toggle (Assuming a Burger Menu)  */
/* ---------------------------------------------------- */
// function menuDisplayControl() {

const menuToggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu-list');


if (menuToggleButton && navMenu) {
    menuToggleButton.addEventListener('click', function (event) {
        /*Toggle the 'active' class on the on the menu list*/
        navMenu.classList.toggle('active');

        /*Toggle the 'active' class on the button it'self (for css Icon swap)*/
        menuToggleButton.classList.toggle('active');


        /*Update the ARIA attribute For Accessibility*/
        const isExpanded = navMenu.classList.contains('active');

        menuToggleButton.setAttribute('aria-expanded', isExpanded);

        /*To Prevent background scrolling when menu is open*/
        document.body.classList.toggle('no-scroll', isExpanded);
        console.log(event.key);
        /*Stop Click event from propagating to the body listener*/
        event.stopPropagation();
    });

    /*Close menu if if anypoint in the body isvlicked*/
    document.body.addEventListener('click', function (event) {
        const isMenuOpen = navMenu.classList.contains('active');
        const clickedInsideMenu = navMenu.contains(event.target);
        const clickedOnMenuToggleButton = menuToggleButton.contains(event.target);
        if (isMenuOpen && !clickedInsideMenu && !clickedOnMenuToggleButton) {
            navMenu.classList.remove('active');
            menuToggleButton.classList.remove('active');
            menuToggleButton.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        }
    });

    /*Close menu if link is clicked*/
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggleButton.classList.remove('active');
                menuToggleButton.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('no-scroll');
            }
        });
    });
}

// }