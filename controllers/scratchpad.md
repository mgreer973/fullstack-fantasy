PROJECT:

Draft players:

<form action="/draftTeam" method="POST">
	<input type="hidden" name="_method" value="POST">
	<input type="hidden" name="player_id" value="{{this.player_id}}">
	//this will match req.body.player_id
	<button type="submit>"Draft Team!</button>

	pressing submit will then submit this data to the app.post('draftTeam', function(req, res){
		connection.query('INSERT INTO user_players (user_id, player_id) VALUES (user_id = ?, player_id = ?', [req.session.user_id, req.body.player_id]'
		
		function(err, result){
		if (err) throw err;
		res.redirect('/:team')
		//CAN YOU REDIRECT TO :TEAM?
		});
	});

