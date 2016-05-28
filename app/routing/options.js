var options = {
  timeout: 15000, // Service call timeout
  mlb: {
    version: 'mlb/v2',
    key: '4cea9ba79a524f47885b570e69536d19' // <-- Pass in your mlb key here
  },
  nba: {
    version: 'nba/v2',
    key: '13e90b2b39074d9492f3ef7ba3f6b0f6' // <-- Pass in your nba key here
  },
  nfl: {
    version: 'nfl/v2',
    key: 'c41e26151e6d44b185dd22ff38f7a57b' // <-- Pass in your nfl key here
  },
  nhl: {
    version: 'nhl/v2',
    key: '65921bcad1764bf9ad67c4d4faeadcdb' // <-- Pass in your nhl key here
  }
};


module.exports = options;