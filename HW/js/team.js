
module.exports = function Team(name) {
    Team.prototype.name = function () {
        this.name = name;
    };

    Team.prototype.add = function (recruit) {
        this.roster.push(recruit);
        recruit.team = this.name;
    };
    return this;
}

function RunnerTeam() {
    this.name();
    this.roster = [];
    this.won = function (enemy) {
        if (this.name === 'chasers') {
            for (let i = 0; i < enemy.roster.length; i++) {
                if (enemy.roster[i].frozen === false) {
                    return false;
                }
            }
            return true;
        }
        if (this.name === 'runners') {
            for (let i = 0; i < this.roster.length; i++) {
                if (this.roster[i].hasFlag === true) {
                    return true;
                }
            }
            return false;
        }
    };
}

function ChaserTeam() {
    this.name();
    this.roster = [];
    this.won = function (enemy) {
        if (this.name === 'chasers') {
            for (let i = 0; i < enemy.roster.length; i++) {
                if (enemy.roster[i].frozen === false) {
                    return false;
                }
            }
            return true;
        }
        if (this.name === 'runners') {
            for (let i = 0; i < this.roster.length; i++) {
                if (this.roster[i].hasFlag === true) {
                    return true;
                }
            }
            return false;
        }
    };
}

//     Team.prototype.won = function (enemy) {
//         if (this.name === 'chasers') {
//             for (let i = 0; i < enemy.roster.length; i++) {
//                 if (enemy.roster[i].frozen === false) {
//                     return false;
//                 }
//             }
//             return true;
//         }
//         if (this.name === 'runners') {
//             for (let i = 0; i < this.roster.length; i++) {
//                 if (this.roster[i].hasFlag === true) {
//                     return true;
//                 }
//             }
//             return false;
//         }
//     };
//     return this;
// };