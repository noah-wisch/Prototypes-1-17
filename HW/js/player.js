
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

    return this;
};
