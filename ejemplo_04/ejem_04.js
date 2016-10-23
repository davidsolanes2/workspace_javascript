/**
 * Created by dsg on 19/10/16.
 */

$(document).ready(iniciar);  {
    $("#sendAjax").click(sendAjax);
}

function sendAjax() {
    $.ajax({
       type : "POST",
        url : "ejem_04.php",
        dataType : "json",
        data : {"repe":repe2},

        success:function (ejem_04) {
            var txt = ejem_04.paraula;
            $("#resposta").html(txt);
        }
    });
}
