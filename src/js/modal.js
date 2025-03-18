function gestionModal() {
    const modal = document.getElementById('modal')
    const openBtn = document.getElementById("openModal")
    const closeBtn = document.getElementsByClassName('closeModal')

    openBtn.addEventListener("click", function () {
        modal.classList.add("show");
    })

    
    for (btnclose in closeBtn) {
        btnclose.addEventListener("click", function () {
            modal.classList.remove('show')
        })
    }

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("show")
        }
    })
}
    