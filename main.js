const team = {
  _players: [{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
},
{   firstName: 'jorge',
    lastName: 'Briceño',
    age: 13
},
{   firstName: 'juan',
    lastName: 'tovar',
    age: 11
    }
],
  _games: [
{   opponent: 'Cats',
    teamPoints: 48,
    opponentPoints: 27.
},
{   opponent: 'Polars',
    teamPoints: 42,
    opponentPoints: 38,
},
{  opponent: 'Bears',
   teamPoints: 34,
   opponentPoints: 22,
}]
,
//getters
get players() {
  return this._players;
},
get games() {
  return this._games;
},
//methods---------------
addPlayer (firstName,lastName,age) {
  let player = {
    firstName : firstName,
    lastName : lastName,
    age  : age,
  }
 this.players.push(player);
},
addGame(opponent,teamPoints,opponentPoints){
  let game = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints,
  }
  this.games.push(game);
},
};
//add new players
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

//add new games
team.addGame('wolves',23,35)
team.addGame('Foxes',43,40)
team.addGame('Dogs',40,45)

//prints the first game and the players
console.log(team.games[0]);
console.log(team.players)
