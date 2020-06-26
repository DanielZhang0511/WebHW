/*
window.onload=function(){
    //document.write("Hello JavaScript!");
}
*/

$(document).ready(function(){
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></tr>"
    );

    let topicCount = topicsArray.length;

    let oneDayMilliseconds = 24*60*60*1000;

    for(let x=0; x<topicCount; x++){
        let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds);
        $("#courseTable").append(
            "<tr>"+
            "<td>"+(x+1)+"</td>"+
            "<td>"+thisDate.toLocaleDateString().slice(5)+"</td>"+
            "<td>"+ topicsArray[x]+"</td>"+
            "</tr>"
        );
    }
});