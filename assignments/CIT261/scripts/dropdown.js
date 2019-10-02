function dropdown() {
    document.getElementById('todropdown').classList.toggle("show");
}

window.onclick = function(event) {
    if(!event.target.matches('.dropbutton')) {
        var dropdowns = document.getElementsByClassName("droplinks");
        for(var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}