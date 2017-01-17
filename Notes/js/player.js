
module.exports = function Player(name) {
    this.name = name;
    this.team = null;
    this.frozen = false;
    this.hasFlag = false;
    this.tag = function (target) {
        if (this.team === 'chasers' && target.team === 'runners')
            console.log(this.name + ' froze ' + target.name);
        target.frozen = true;

        if (this.frozen === false && this.team === 'runner' && target.team === 'runners')
            console.log(this.name + ' thawed ' + target.name);
        target.frozen = false;
    };
    // return true if team has won and false if not yet
    this.won = function (enemy) {
        if (this.name === 'chasers') {
            for (let i = 0; i < enemy.roster.length; i++) {
                if (enemy.roster[i].frozen === false) {
                    return false;
                }
            }
            return true;
        }
        // if we've got the flag, return true
        if (this.name === 'runners') {
            for (let i = 0; i < this.roster.length; i++) {
                if (this.roster[i].hasFlag === true) {
                    return true;
                }
            }
            return false; // finish checking erryone before saying 'no'
        }
    };
    return this;
};
