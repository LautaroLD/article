function cambio() {
    var query = window.matchMedia("(max-width: 549px)")
    var personita = document.getElementById("persona")
    var sharesito = document.getElementById("share")
    if (query.matches) {
        if (personita.className == "person-container-dates" && sharesito.className == "share-section-none") {
            personita.className = "persona-none"
            sharesito.className = "share"
        } else {
            personita.className = "person-container-dates"
            sharesito.className = "share-section-none"
        }
    }
    else {
        if (sharesito.className == "share-section-none") {
            sharesito.className = "share-section-desktop"
        } else {
            sharesito.className = "share-section-none"            
        }
    }
}