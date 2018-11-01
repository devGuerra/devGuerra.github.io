var homeBtn = document.querySelector('#home')
var aboutBtn = document.querySelector('#about')
var projectsBtn = document.querySelector('#projects')
var contactBtn = document.querySelector('#contact')

homeBtn.onclick = function(){
    document.querySelector('.about').classList.add('itemNone')
    document.querySelector('.projects').classList.add('itemNone')
    document.querySelector('.contact').classList.add('itemNone')

    document.querySelector('.home').classList.remove('itemNone')
}
aboutBtn.onclick = function(){
    document.querySelector('.home').classList.add('itemNone')
    document.querySelector('.projects').classList.add('itemNone')
    document.querySelector('.contact').classList.add('itemNone')

    document.querySelector('.about').classList.remove('itemNone')
}
projectsBtn.onclick = function(){
    document.querySelector('.home').classList.add('itemNone')
    document.querySelector('.about').classList.add('itemNone')
    document.querySelector('.contact').classList.add('itemNone')

    document.querySelector('.projects').classList.remove('itemNone')
}
contactBtn.onclick = function(){
    document.querySelector('.home').classList.add('itemNone')
    document.querySelector('.about').classList.add('itemNone')
    document.querySelector('.projects').classList.add('itemNone')

    document.querySelector('.contact').classList.remove('itemNone')
}