


window.addEventListener('DOMContentLoaded', event => {
   
    // Функция появления белого фона при прокрутке страницы
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            //При прокрутке до верхней границы страницы фон исчезает
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            //иначе, появляется белый фон в меню
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();
    
    document.addEventListener('scroll', navbarShrink);


   
     // function showHelp(help){
    //     document.getElementById('help').innerHTML=help;
    // }
    // function setupHelp(){
    //     var helpText={'id':'em','help':'Чарльз Рихтер – крупнейший американский сейсмолог'};
    //     document.getElementById(helpText.id).onfocus=function(){
    //         showHelp(helpText.help);
    //     }
    // }
    // setupHelp();


});
// window.addEventListener('DOMContentLoaded', event => {
    
// var link = document.getElementById('RihterL')
// var element = document.getElementById('Rihter')
// var isHelpShow = true;
// link.onclick=function(){
//     if(isHelpShow){
//     element.textContent="Чарльз Рихтер – крупнейший американский сейсмолог";
//     isHelpShow=false;
//     }else{
//         element.textContent="";
//         isHelpShow=true;
//     }
// }
// });




