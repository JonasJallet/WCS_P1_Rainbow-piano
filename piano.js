/* son note do */
(function () {
  'use strict';

  const pianoDo = 'ressources/sons/do.mp3';

  const context = new AudioContext();
  const playButton = document.querySelector('.piano-do');

  let pianoBuffer;

  window.fetch(pianoDo)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      playButton.disabled = false;
      pianoBuffer = audioBuffer;
    });

  playButton.addEventListener('click', function () {
    play(pianoBuffer);
  })

  window.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "Digit1":
        playButton.classList.add("keypress");
        play(pianoBuffer);
    }
    event.preventDefault();
  }, false);

  window.addEventListener("keyup", (event) => {
    switch (event.code) {
      case "Digit1":
        playButton.classList.remove("keypress");
    }
    event.preventDefault();
  }, false);

  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
}());


/* son note re */
(function () {
  'use strict';

  const pianoRe = 'ressources/sons/re.mp3';

  const context = new AudioContext();
  const playButton = document.querySelector('.piano-re');

  let pianoBuffer;

  window.fetch(pianoRe)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      playButton.disabled = false;
      pianoBuffer = audioBuffer;
    });

  playButton.addEventListener('click', function () {
    play(pianoBuffer);
  })

  window.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "Digit2":
        playButton.classList.add("keypress");
        play(pianoBuffer);
    }
    event.preventDefault();
  }, false);

  window.addEventListener("keyup", (event) => {
    switch (event.code) {
      case "Digit2":
        playButton.classList.remove("keypress");
    }
    event.preventDefault();
  }, false);

  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
}());


/* son note mi */
(function () {
  'use strict';

  const pianoMi = 'ressources/sons/mi.mp3';

  const context = new AudioContext();
  const playButton = document.querySelector('.piano-mi');

  let pianoBuffer;

  window.fetch(pianoMi)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      playButton.disabled = false;
      pianoBuffer = audioBuffer;
    });

  playButton.addEventListener('click', function () {
    play(pianoBuffer);
  })

  window.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "Digit3":
        playButton.classList.add("keypress");
        play(pianoBuffer);
    }
    event.preventDefault();
  }, false);

  window.addEventListener("keyup", (event) => {
    switch (event.code) {
      case "Digit3":
        playButton.classList.remove("keypress");
    }
    event.preventDefault();
  }, false);

  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
}());



/* son note fa */
(function () {
  'use strict';

  const pianoFa = 'ressources/sons/fa.mp3';

  const context = new AudioContext();
  const playButton = document.querySelector('.piano-fa');

  let pianoBuffer;

  window.fetch(pianoFa)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      playButton.disabled = false;
      pianoBuffer = audioBuffer;
    });

  playButton.addEventListener('click', function () {
    play(pianoBuffer);
  })

  window.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "Digit4":
        playButton.classList.add("keypress");
        play(pianoBuffer);
    }
    event.preventDefault();
  }, false);

  window.addEventListener("keyup", (event) => {
    switch (event.code) {
      case "Digit4":
        playButton.classList.remove("keypress");
    }
    event.preventDefault();
  }, false);

  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
}());

/* son note sol */
(function () {
  'use strict';

  const pianoSol = 'ressources/sons/sol.mp3';

  const context = new AudioContext();
  const playButton = document.querySelector('.piano-sol');

  let pianoBuffer;

  window.fetch(pianoSol)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      playButton.disabled = false;
      pianoBuffer = audioBuffer;
    });

  playButton.addEventListener('click', function () {
    play(pianoBuffer);
  })

  window.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "Digit5":
        playButton.classList.add("keypress");
        play(pianoBuffer);
    }
    event.preventDefault();
  }, false);

  window.addEventListener("keyup", (event) => {
    switch (event.code) {
      case "Digit5":
        playButton.classList.remove("keypress");
    }
    event.preventDefault();
  }, false);

  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
}());


/* son note la */
(function () {
  'use strict';

  const pianoLa = 'ressources/sons/la.mp3';

  const context = new AudioContext();
  const playButton = document.querySelector('.piano-la');

  let pianoBuffer;

  window.fetch(pianoLa)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      playButton.disabled = false;
      pianoBuffer = audioBuffer;
    });

  playButton.addEventListener('click', function () {
    play(pianoBuffer);
  })

  window.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "Digit6":
        playButton.classList.add("keypress");
        play(pianoBuffer);
    }
    event.preventDefault();
  }, false);

  window.addEventListener("keyup", (event) => {
    switch (event.code) {
      case "Digit6":
        playButton.classList.remove("keypress");
    }
    event.preventDefault();
  }, false);

  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
}());

/* son note si */
(function () {
  'use strict';

  const pianoSi = 'ressources/sons/si.mp3';

  const context = new AudioContext();
  const playButton = document.querySelector('.piano-si');

  let pianoBuffer;

  window.fetch(pianoSi)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      playButton.disabled = false;
      pianoBuffer = audioBuffer;
    });

  playButton.addEventListener('click', function () {
    play(pianoBuffer);
  })

  window.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "Digit7":
        playButton.classList.add("keypress");
        play(pianoBuffer);
    }
    event.preventDefault();
  }, false);

  window.addEventListener("keyup", (event) => {
    switch (event.code) {
      case "Digit7":
        playButton.classList.remove("keypress");
    }
    event.preventDefault();
  }, false);

  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
}());

/* son note do2 */
(function () {
  'use strict';

  const pianoDo2 = 'ressources/sons/do2.mp3';

  const context = new AudioContext();
  const playButton = document.querySelector('.piano-do2');

  let pianoBuffer;

  window.fetch(pianoDo2)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      playButton.disabled = false;
      pianoBuffer = audioBuffer;
    });

  playButton.addEventListener('click', function () {
    play(pianoBuffer);
  })

  window.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "Digit8":
        playButton.classList.add("keypress");
        play(pianoBuffer);
    }
    event.preventDefault();
  }, false);

  window.addEventListener("keyup", (event) => {
    switch (event.code) {
      case "Digit8":
        playButton.classList.remove("keypress");
    }
    event.preventDefault();
  }, false);

  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
}());




//Défilement partition
const doNote = ["ressources/images/Do.png", "piano-do"];
const reNote = ["ressources/images/Ré.png", "piano-re"];
const miNote = ["ressources/images/Mi.png", "piano-mi"];
const faNote = ["ressources/images/Fa.png", "piano-fa"];
const solNote = ["ressources/images/Sol.png", "piano-sol"];
const laNote = ["ressources/images/La.png", "piano-la"];
const siNote = ["ressources/images/Si.png", "piano-si"];
const emptyNote = ["", ""];

let moonPartitionTable = [doNote, doNote, doNote, reNote, miNote, reNote, doNote, miNote, reNote, reNote, doNote, doNote, doNote, doNote, reNote, miNote, reNote, doNote, miNote, reNote, reNote, doNote, emptyNote, emptyNote, emptyNote, emptyNote, emptyNote];

const doKey = document.querySelector('#piano-do');
const reKey = document.querySelector('#piano-re');
const miKey = document.querySelector('#piano-mi');
const faKey = document.querySelector('#piano-fa');
const solKey = document.querySelector('#piano-sol');
const laKey = document.querySelector('#piano-la');
const siKey = document.querySelector('#piano-si');
const do2Key = document.querySelector('#piano-do2');

const note1 = document.querySelector("#note1");
const note2 = document.querySelector("#note2");
const note3 = document.querySelector("#note3");
const note4 = document.querySelector("#note4");
const note5 = document.querySelector("#note5");
const note6 = document.querySelector("#note6");
const note7 = document.querySelector("#note7");
const note8 = document.querySelector("#note8");
const reload = document.querySelector("#reload");

function displayNotesToPlay() {
  note1.src = moonPartitionTable[0][0];
  note2.src = moonPartitionTable[1][0];
  note3.src = moonPartitionTable[2][0];
  note4.src = moonPartitionTable[3][0];
  note5.src = moonPartitionTable[4][0];
  note6.src = moonPartitionTable[5][0];
  note7.src = moonPartitionTable[6][0];
  note8.src = moonPartitionTable[7][0];
}

displayNotesToPlay();

//Version touch ou click
doKey.addEventListener('click', function () {
  keyPressed = doKey.className;
  if (keyPressed == moonPartitionTable[0][1]) {
    moonPartitionTable.splice(0, 1);
    displayNotesToPlay();
  }
})

reKey.addEventListener('click', function () {
  keyPressed = reKey.className;
  if (keyPressed == moonPartitionTable[0][1]) {
    moonPartitionTable.splice(0, 1);
    displayNotesToPlay();
  }
})

miKey.addEventListener('click', function () {
  keyPressed = miKey.className;
  if (keyPressed == moonPartitionTable[0][1]) {
    moonPartitionTable.splice(0, 1);
    displayNotesToPlay();
  }
})

faKey.addEventListener('click', function () {
  keyPressed = faKey.className;
  if (keyPressed == moonPartitionTable[0][1]) {
    moonPartitionTable.splice(0, 1);
    displayNotesToPlay();
  }
})

solKey.addEventListener('click', function () {
  keyPressed = solKey.className;
  if (keyPressed == moonPartitionTable[0][1]) {
    moonPartitionTable.splice(0, 1);
    displayNotesToPlay();
  }
})

laKey.addEventListener('click', function () {
  keyPressed = laKey.className;
  if (keyPressed == moonPartitionTable[0][1]) {
    moonPartitionTable.splice(0, 1);
    displayNotesToPlay();
  }
})

siKey.addEventListener('click', function () {
  keyPressed = siKey.className;
  if (keyPressed == moonPartitionTable[0][1]) {
    moonPartitionTable.splice(0, 1);
    displayNotesToPlay();
  }
})

do2Key.addEventListener('click', function () {
  keyPressed = do2Key.className;
  if (keyPressed == moonPartitionTable[0][1]) {
    moonPartitionTable.splice(0, 1);
    displayNotesToPlay();
  }
})

reload.addEventListener('click', function () {
  moonPartitionTable = [doNote, doNote, doNote, reNote, miNote, reNote, doNote, miNote, reNote, reNote, doNote, doNote, doNote, doNote, reNote, miNote, reNote, doNote, miNote, reNote, reNote, doNote, emptyNote, emptyNote, emptyNote, emptyNote, emptyNote];
  displayNotesToPlay();
})


// Version keyboard

window.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "Digit1":
      keyPressed = "piano-do";
      if (keyPressed == moonPartitionTable[0][1]) {
        moonPartitionTable.splice(0, 1);
        displayNotesToPlay();
      }
      break;

    case "Digit2":
      keyPressed = "piano-re";
      if (keyPressed == moonPartitionTable[0][1]) {
        moonPartitionTable.splice(0, 1);
        displayNotesToPlay();
      }
      break;

    case "Digit3":
      keyPressed = "piano-mi";
      if (keyPressed == moonPartitionTable[0][1]) {
        moonPartitionTable.splice(0, 1);
        displayNotesToPlay();
      }
      break;

    case "Digit4":
      keyPressed = "piano-fa";
      if (keyPressed == moonPartitionTable[0][1]) {
        moonPartitionTable.splice(0, 1);
        displayNotesToPlay();
      }
      break;

    case "Digit5":
      keyPressed = "piano-sol";
      if (keyPressed == moonPartitionTable[0][1]) {
        moonPartitionTable.splice(0, 1);
        displayNotesToPlay();
      }
      break;

    case "Digit6":
      keyPressed = "piano-la";
      if (keyPressed == moonPartitionTable[0][1]) {
        moonPartitionTable.splice(0, 1);
        displayNotesToPlay();
      }
      break;

    case "Digit7":
      keyPressed = "piano-si";
      if (keyPressed == moonPartitionTable[0][1]) {
        moonPartitionTable.splice(0, 1);
        displayNotesToPlay();
      }
      break;

    case "Digit8":
      keyPressed = "piano-do";
      if (keyPressed == moonPartitionTable[0][1]) {
        moonPartitionTable.splice(0, 1);
        displayNotesToPlay();
      }
      break;
  }
})
