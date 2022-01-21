
function openBody(){
    var accordionTitles = document.querySelectorAll('.accordion__title');
    accordionTitles.forEach(title => {
        title.onclick = function () {
            var parent = this.closest('.accordion');
            parent
                .classList
                .toggle('accordion_opened');
        };
    });
}


    function showMessage()
    {
    alert('Ваши пожелания отправлены')
    }

