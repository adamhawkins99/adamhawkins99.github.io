//transitions
addEventListener('load', function() {
    var sections = document.getElementsByClassName('open');
    var i = 0;
    for (i = 0; i < sections.length; i++) {
        sections[i].addEventListener('click', openSection); 
    }
});
        
        
    function openSection(e) {
            var eventid = e.srcElement.parentNode;
            if (eventid.classList.contains('open')) {
            eventid.classList.toggle('expand');
        }
    };