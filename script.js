document.addEventListener('DOMContentLoaded', function () {
    var mobView = window.matchMedia("(max-width: 767.99px)")

    var hamIcon = document.querySelector('.ham-icon');
    var hamCross = document.querySelector('.ham-cross');

    var navList = document.querySelector('.nav-list');

    navDropdown = document.querySelectorAll('.nav-item-0.nav-arrow');

    hamIcon.addEventListener("click", function () {
        this.style.display = "none";
        hamCross.style.display = "block";
        navList.classList.add("active");
    });

    hamCross.addEventListener("click", function () {
        this.style.display = "none";
        hamIcon.style.display = "block";
        navList.classList.remove("active");
    });


    if (mobView.matches) {
        for (i = 0; i < navDropdown.length; i++) {
            navDropdown[i].addEventListener("click", function () {
                this.classList.toggle("active");
            });
        }
    }


});

// const scriptURL = 'https://script.google.com/macros/s/AKfycbzYNhlz55CJnSouhO5F4IGb9DN3y_n8CZa1caLB8ORNhiIV7MRjWBCnE5YHfd1mtOg/exec'

// const form = document.forms['contact-form']

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => alert("Thank you! your form is submitted successfully."))
//         .then(() => { window.location.reload(); })
//         .catch(error => console.error('Error!', error.message))
// })
