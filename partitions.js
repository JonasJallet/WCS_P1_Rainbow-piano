
function displayPartition(partition) {
    const chosenPartition = document.querySelector(`.${partition}`)
    chosenPartition.addEventListener('click', function () {
        const partitionsNames = document.querySelector(".partitionsNames");
        const entirePartition = document.querySelector(`#${partition}Partition`);
        const crossButton = document.querySelector("#crossButton");
        const bearPicture = document.querySelector("#drawingBear");
        partitionsNames.classList.toggle("hideElement");
        partitionsNames.style.pointerEvents = "none";
        entirePartition.style.display = "block";
        crossButton.style.display = "block";
        bearPicture.style.display = "none";
    })
}

displayPartition("moon");
displayPartition("pig");
displayPartition("cherry");
displayPartition("fox");

function undisplayPartition(partition) {
    const crossButton = document.querySelector("#crossButton")
    crossButton.addEventListener('click', function () {
        const partitionsNames = document.querySelector(".partitionsNames");
        const entirePartition = document.querySelector(`#${partition}Partition`);
        const crossButton = document.querySelector("#crossButton");
        const bearPicture = document.querySelector("#drawingBear")
        partitionsNames.classList.remove("hideElement");
        entirePartition.style.display = "none";
        crossButton.style.display = "none";
        bearPicture.style.display = "initial";
        partitionsNames.style.pointerEvents = "initial";


    })
}

undisplayPartition("moon");
undisplayPartition("pig");
undisplayPartition("cherry");
undisplayPartition("fox");