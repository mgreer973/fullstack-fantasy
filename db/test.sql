SELECT * FROM users_players up
	JOIN players p ON
		up.player_id=p.player_id
        JOIN users u ON
		up.user_id = u.id
order by p.sport;


update users_players set fantasy_points = fantasy_points + 20 where player_id = 20000874

update users_players set fantasy_points = 0 where fantasy_points > 0;

SELECT u.nick_name, sum(up.fantasy_points) as 'points' FROM users_players up LEFT JOIN players p ON p.player_id=up.player_id
   LEFT JOIN users u ON u.id = up.user_id GROUP BY u.nick_name ORDER BY 2 DESC;