const navbarLinks = document.querySelectorAll(".nav-menu a");

navbarLinks.forEach(link => {

    link.addEventListener("click", function () {

        navbarLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});

console.log("Portfolio berhasil dijalankan!");