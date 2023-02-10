function isWinner () {
    document.getElementById("choose").innerText =
        "isWinner";
}
function GenerateButton () {
    let x = 0;
    x = document.getElementById('number').value;
    for (let i = 0; i < x; ++i) {
        document.getElementById("createButton").innerHTML +=
            '<br>' +
            '<div class="card-body" >\n' +
            '            <button type="button" onclick="isWinner()" \n' +
            '                class="btn btn-success">\n' +
            '            Choose\n' +
            '<h1 id = "choose" >' +
            '</h1>' +
            '</button>\n' +
            '</div>'
    }
}