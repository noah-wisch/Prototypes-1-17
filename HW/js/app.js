
let Player = require('./player');
let Team = require('./team');
// let Flag = require('./flag');

window.addEventListener('load', function () {
    let chaserNames = ['Deshaun Watson', 'Mike Williams', 'Hunter Renfrow', 'Artavis Scott', 'Wayne Gallman'];
    let runnerNames = ['Jordan Leggett', 'Dabo Swinney', 'Brent Venebles', 'Jeff Scott', 'Jay Guillermo'];

    let c = new Team('chasers');
    let r = new Team('runners');

    for (let i = 0; i < chaserNames.length; i++) {
        let next = new Player(chaserNames[i]);
        c.add(next);
    }

    for (let i = 0; i < runnerNames.length; i++) {
        let next = new Player(runnerNames[i]);
        r.add(next);
    }

    console.log(c);
    console.log(r);

    // c.won(r);
    // r.won();

    // c.roster[0].tag(r.roster[0]); //freeze
    // r.roster[0].tag(c.roster[0]); // none
    // r.roster[1].tag(r.roster[0]); //unfreeze
    // c.roster[0].tag(r.roster[2]); //freeze
    // c.roster[1].tag(r.roster[4]); //freeze
    // r.roster[2].tag(r.roster[1]); //attempted freeze
});