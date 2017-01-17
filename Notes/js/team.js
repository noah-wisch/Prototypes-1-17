
module.exports = function Team(name) {
    this.name = name;
    this.roster = [];

    this.add = function (recruit) {
        this.roster.push(recruit);
        recruit.team = this.name;
    }
    return this;
};