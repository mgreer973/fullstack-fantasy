// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var connection = require('../../config/connection.js');
var path 			= require('path');
var moment = require('moment');
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases when a user visits a link 
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
	// ---------------------------------------------------------------------------

	app.get('/api/fsf', function(req, res){
		res.json(friendData);
	});
// fan data
var options = require('./options.js');
var fantasyData = require('fantasydata-api')(options);




	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	app.post('/update', function(req, res){
			console.log('req.body ', req.body);
			var good = 'good';
			console.log('date ', req.body.selDate);
//			res.json(good); 
var randomDate = req.body.selDate; // from client
var gDate = moment(new Date(randomDate));

var fanMLB = 0;
var fanNHL = 0;
var fanNBA = 0
var parm = '';
var sportsArr = [];
var playersArr = [];
var objPlayerId;
console.log('gDate ', gDate);

get_info(parm, function(result){
  console.log('result ', result);
  var sp = ' ';
  var firstTime = 'Y'
  for (var s = 0; s < result.length; s++) {
      if (firstTime == 'Y')  {
          firstTime = 'N';
          sp = result[s].sport;
          sportsArr.push(result[s].sport); 
      }
      if (result[s].sport != sp) {
          sp = result[s].sport;
          sportsArr.push(result[s].sport); 
      }
  }
  console.log('sportsArr ', sportsArr)
  for (var sp = 0; sp < sportsArr.length; sp++) {
    var sportSw = sportsArr[sp] 
    switch (sportSw) {
      case 'MLB':
        createPlayerArray(result, sportSw);
        console.log('playersArr is ',playersArr);
        getFantasyPointsMLB(gDate, playersArr);
        break; 
      case 'NBA':
        createPlayerArray(result, sportSw);
        console.log('playersArr is ',playersArr);
        getFantasyPointsNBA(gDate, playersArr);
            break; 
      case 'NHL':
        createPlayerArray(result, sportSw);
        console.log('playersArr is ',playersArr);
        getFantasyPointsNHL(gDate, playersArr);
        break; 
      default:
        console.log('invalid sport' + sportSw); 
        break;
    }; //switch
  } // for 
  console.log('fanNBA is ', fanNBA);
  console.log('fanMLB is ', fanMLB);
  console.log('fanNHL is ', fanNHL);
//  connection.end();
//  process.exit();
});


function get_info(data, callback){
  var sql = 'SELECT distinct p.player_id, p.sport FROM users_players up  LEFT JOIN players p ON up.player_id= p.player_id;';
  connection.query(sql, function(err, results){
    if (err){ 
      throw err;
    }
//  console.log(results); // good
    stuff_i_want = results;  // Scope is larger than function
    return callback(results);
  });
}

function createPlayerArray(result, sportFunc) {
  playersArr = [];
  var pl;
  var funcFirstTime = 'Y'
  console.log('sportFunc is ', sportFunc)
  for (var sf = 0; sf < result.length; sf++) {
    if (result[sf].sport == sportFunc) {
       playersArr.push(result[sf].player_id); 
    }
  }
}

function getFantasyPointsNBA(getDate, playersArr ) {
  console.log('into getFantasyPointsNBA');
  for (var bd = 0; bd < 7; bd++) {
    useDate = moment(gDate).add(bd,'day').format("YYYY-MMM-DD");    
//    console.log('useDate ', useDate);
    fanNBA++;
    fantasyData.nba.playerGameStatsByDate(useDate, function(err, bobj){
      for (var b = 0; b < bobj.length; b++) {
        objPlayerId = bobj[b].PlayerID;
        objFantasyPts = bobj[b].FantasyPoints
        for (var ba = 0; ba < playersArr.length; ba++) {
          if (playersArr[ba] == objPlayerId) {
//            console.log('file playerID ',objPlayerId)
//            console.log('fantasyPoints ', objFantasyPts);
            updateUsersPlayers(objPlayerId,objFantasyPts);
          }  // if
        } //for pArr
      } // for obj
    }); // fantasy
  } // for date
  console.log('fanNBA is ', fanNBA);
  console.log('out of getFantasyPointsNBA');
} // function

function getFantasyPointsNHL(getDate, playersArr ) {
  console.log('into getFantasyPointsNHL');
  for (var hd = 0; hd < 7; hd++) {
    useDate = moment(gDate).add(hd,'day').format("YYYY-MMM-DD");    
//    console.log('useDate ', useDate);
    fanNHL++;
    fantasyData.nhl.playerGameStatsByDate(useDate, function(err, hobj){
      for (var h = 0; h < hobj.length; h++) {
        objPlayerId = hobj[h].PlayerID;
        objFantasyPts = hobj[h].FantasyPoints
        for (var ha = 0; ha < playersArr.length; ha++) {
          if (playersArr[ha] == objPlayerId) {
//            console.log('file playerID ',objPlayerId)
//            console.log('fantasyPoints ', objFantasyPts);
            updateUsersPlayers(objPlayerId,objFantasyPts);
          }  // if
        } //for pArr
      } // for obj
    }); // fantasy
  } // for date
  console.log('fanNHL is ', fanNHL);
  console.log('out of getFantasyPointsNHL');
} // function

function getFantasyPointsMLB(getDate, playersArr ) {
  console.log('into getFantasyPointsMLB');
  for (var ld = 0; ld < 7; ld++) {
    useDate = moment(gDate).add(ld,'day').format("YYYY-MMM-DD");    
//    console.log('useDate ', useDate);
    fanMLB++;
    fantasyData.mlb.playerGameStatsByDate(useDate, function(err, mobj){
//      console.log('useDate is ', useDate , 'mobj ' , mobj);
      for (var l = 0; l < mobj.length; l++) {
        objPlayerId = mobj[l].PlayerID;
//        console.log('objPlayerId ', objPlayerId);
        objFantasyPts = mobj[l].FantasyPoints
        for (var la = 0; la < playersArr.length; la++) {
          if (playersArr[la] == objPlayerId) {
//            console.log('file playerID ',objPlayerId)
//            console.log('fantasyPoints ', objFantasyPts);
            updateUsersPlayers(objPlayerId,objFantasyPts);
          }  // if
        } //for pArr
      } // for obj
    }); // fantasy
  } // for date
  console.log('fanMLB is ', fanMLB);
  console.log('out of getFantasyPointsMLB');
} // function

function updateUsersPlayers(upPlayerID, upPts) {
  updateString = "UPDATE users_players SET fantasy_points = fantasy_points + " + upPts + " WHERE player_id = " + upPlayerID + ";";
  connection.query(updateString,function(err,upResult) {
    if (err) throw err;
    console.log('upResult', upResult);
  });
}
	});


}