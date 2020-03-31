$(document).ready(function(){
    $('.button-collapse').sideNav();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.datepicker').pickadate({
        selectMonths: true, 
        selectYears: 15,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false,
        format: "dd/mm/yyyy"
    });
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();
})