import jquery from "jquery";
export default (window.$ = window.jQuery = jquery);


$(document).ready(function(){
    $("#bday").inputmask({'alias': 'date', 'inputFormat': 'dd.mm.yyyy', placeholder: "ДД.ММ.ГГГГ"});
})