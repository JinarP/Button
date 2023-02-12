let optionNumber = 0;
let winnerButton = 0;

function random (min, max) {
    winnerButton = Math.floor(Math.random() * (max - min) + min);
    return winnerButton;
}
function isWinner () {
    let y = document.getElementById("number").value;
    console.log(random(0, y));
    document.getElementById("win").innerHTML =
        "you win";
}
function GenerateButton () {
    let x;
    x = document.getElementById('number').value;
    for (let i = 0; i < x; ++i) {
        document.getElementById("createButton").innerHTML +=
            '<br>' +
            '<div class="card-body" >\n' +
            '            <button type="button" \n onclick="isWinner()"' +
            '                class="btn btn-success">\n' +
            '            <p id = "win"> Choose\n'+ i
            '</p>'
            '</button>\n' +
            '</div>'
        ++optionNumber;
    }
}