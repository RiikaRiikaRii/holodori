// note
/* notes */

const boostInput = document.getElementById("boost");
const eventNameInput = document.getElementById("eventName");
const jumpsInput = document.getElementById("jumps");
const timberInput = document.getElementById("timber");
const nailsInput = document.getElementById("nails");
const stoneInput = document.getElementById("stone");
const hologoldInput = document.getElementById("hologold");
const autoTicketsInput = document.getElementById("autoTickets");
const eventPointsInput = document.getElementById("eventPoints");
const runForm = document.getElementById("runForm");
const result = document.getElementById("result");
const runTableBody = document.getElementById("runTableBody");

const savedRuns = localStorage.getItem("holodoriRuns");
const runs = savedRuns ? JSON.parse(savedRuns) : [];

function displayRuns() {    // table

    runTableBody.innerHTML = "";

    runs.forEach(function(run, index) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${run.jumps}</td>
            <td>${run.boost}</td>
            <td>${run.wood}</td>
        `;

        runTableBody.appendChild(row);
    });
}

function calculateWood(jumps, boost) {  // wood math
    return jumps * boost;
}

runForm.addEventListener("submit", function(event) { // button form event listener

    event.preventDefault();
    
    const boost = Number(boostInput.value);
    const eventName = eventNameInput.value;

    const jumps = Number(jumpsInput.value);

    const timber = Number(timberInput.value);
    const nails = Number(nailsInput.value);
    const stone = Number(stoneInput.value);
    const hologold = Number(hologoldInput.value);
    const autoTickets = Number(autoTicketsInput.value);
    const eventPoints = Number(eventPointsInput.value);

    const run = {
        boost,
        jumps,
        eventName,
        timber,
        nails,
        stone,
        hologold,
        autoTickets,
        eventPoints
    };

    runs.push(run);

    localStorage.setItem("holodoriRuns", JSON.stringify(runs));

    result.textContent = `Recorded ${runs.length} runs!`;

    console.log(runs);
});

displayRuns();