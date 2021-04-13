var speed = 70; /* The speed/duration of the effect in milliseconds */
var pause = 3000; /* The pause between typing and deleting in milliseconds */

var fields = [
    "computer vision.",
    "behavioral science.",
    "physics.",
    "mathematics.",
    "chemistry.",
    "quantitative finance.",
    "statistics.",
    "electrical engineering.",
    "natural language processing.",
    "psychedelics.",
    "artificial intelligence.",
    "economics.",
    "neuroscience.",
    "computer security.",
    "graphics.",
    "quantum physics.",
    "educational psychology.",
    "astrophysics.",
    "aerospace engineering.",
    "game theory.",
    "occupational science.",
    "virology.",
    "cardiology.",
    "biology.",
    "environmental science.",
    "materials engineering.",
    "nano technology.",
    "biotechnology.",
    "chemical engineering."
]

var field = "";
function typewriter() {
    field = pickField(field);
    typeWord(0, field);
}

async function removeWord(idx, word) {
    var current = document.getElementById("dynamic").innerHTML;
    document.getElementById("dynamic").innerHTML = current.slice(0, current.length - 1);
    if (idx > -1) {
        setTimeout(()=>{ removeWord(idx-1, word) }, speed);
    } else {
        typewriter();
    }
}

async function typeWord(idx, word) {
    document.getElementById("dynamic").innerHTML += word.charAt(idx);
    if (idx < word.length) {
        setTimeout(() => typeWord(idx+1, word), speed);
    } else {
        setTimeout(() => removeWord(idx-1, word), pause);
    }
    return true
}

function pickField(current_field) {
    var random_field = current_field;
    while (current_field.localeCompare(random_field) == 0) {
        random_field = fields[Math.floor(Math.random() * fields.length)];
    }
    return random_field;
}