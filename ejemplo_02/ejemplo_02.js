/**
 * Created by dsg on 5/10/16.
 */

$document.ready(iniciar);

function iniciar() {
    $("#setClass");
}




function addElem() {
    var div = $("<div></div>");
    var txt = $("#setClass").attr("class");
    div.addClass(txt);

    div.dblclick(borrame);

    div.appendTo("#contenidorDivs");
    div.html("<hola>")
}

function borrame() {
    $(this).remove();
}

function  setAttr() {
    var tex=$("input").val();
}
