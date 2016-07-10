'use strict';
function ModelFilter__parseForm() {
    return false
}

$(".hidden_sort_click").click(function () {
    $(".hidden-sort").toggle("slow")
});
$("ul.nav").removeClass("active");
$(".front_page_nav").addClass("active");
/*
function DataLoaded(data)
{
    console.log('загруженные через AJAX данные:');
    console.log(data);
    document.getElementById('IPlace').innerHTML=data;
}

function ErrorHandler(jqXHR,StatusStr,ErrorStr)
{
    console.log(StatusStr+' '+ErrorStr);
}
    */