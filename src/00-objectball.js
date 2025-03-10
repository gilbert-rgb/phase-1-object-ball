function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
  }
  console.log(numPointsScored("Alan Anderson")); // 22

  function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
  }
  console.log(shoeSize("Reggie Evans")); // 14

  function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
  }
  console.log(teamColors("Brooklyn Nets")); // ["Black", "White"]

  
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]

  
  function playerNumbers(teamName) {
    const game = gameObject();
    const team = game[teamName === "Brooklyn Nets" ? "home" : "away"];
    const playerNumbers = [];
    for (let player in team.players) {
      playerNumbers.push(team.players[player].number);
    }
    return playerNumbers;
  }
  console.log(playerNumbers("Brooklyn Nets")); // [0, 30, 11, 1, 31]


  function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName];
      }
    }
  }
  console.log(playerStats("Alan Anderson"));
  // Returns:
  // {
  //   number: 0,
  //   shoe: 16,
  //   points: 22,
  //   rebounds: 12,
  //   assists: 12,
  //   steals: 3,
  //   blocks: 1,
  //   slamDunks: 1
  // }

  

  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;
  
    for (let team in game) {
      for (let player in game[team].players) {
        const playerStats = game[team].players[player];
        if (playerStats.shoe > largestShoeSize) {
          largestShoeSize = playerStats.shoe;
          playerWithLargestShoe = player;
        }
      }
    }
    
    return game.home.players[playerWithLargestShoe]?.rebounds || game.away.players[playerWithLargestShoe]?.rebounds;
  }
  console.log(bigShoeRebounds()); 


  function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        const points = game[team].players[player].points;
        if (points > mostPoints) {
          mostPoints = points;
          playerWithMostPoints = player;
        }
      }
    }
    return playerWithMostPoints;
  }
  console.log(mostPointsScored()); // "Ben Gordon" (33 points)

  

  function winningTeam() {
    const game = gameObject();
    const homePoints = Object.values(game.home.players).reduce((total, player) => total + player.points, 0);
    const awayPoints = Object.values(game.away.players).reduce((total, player) => total + player.points, 0);
  
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  console.log(winningTeam()); // "Charlotte Hornets"

  
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  console.log(playerWithLongestName()); // "Brendan Haywood"

  

  function doesLongNameStealATon() {
    const longestName = playerWithLongestName();
    const game = gameObject();
    let mostSteals = 0;
  
    for (let team in game) {
      for (let player in game[team].players) {
        const steals = game[team].players[player].steals;
        if (steals > mostSteals) {
          mostSteals = steals;
        }
      }
    }
  
    const longestPlayerSteals = game.home.players[longestName]?.steals || game.away.players[longestName]?.steals;
    
    return longestPlayerSteals === mostSteals;
  }
  console.log(doesLongNameStealATon()); // Returns whether the player with the longest name also has the most steals
  
  
  