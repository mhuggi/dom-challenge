window.onload = function() {
    // Lyssna efter händelser
    var team = document.getElementsByClassName("team-member");
    console.log(team)
    for (i = 0; i < team.length; i++) {
        team[i].addEventListener("click", editTitle)
        team[i].addEventListener("mouseover", effectOn)
        team[i].addEventListener("mouseout", effectOff)



    }

}
var editTitle = function(e) {
    // Ändra "team-title"
    console.log("Trigger");
    var newTitle = window.prompt("new title?");
    this.children[2].innerText = newTitle
};

function effectOn(id){
    // Rita en ram runt personen, kanske lite drop shadow?
    this.classList.add("hovering")
}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
    this.classList.remove("hovering")
}
