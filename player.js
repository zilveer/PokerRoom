var Player = function(id, username, chips, tableIndex, position, pStatus)
{
  var username = username || "INVALID_USER"
  var password, statistics;
  var chips = chips || 0 ;
  var tableIndex = tableIndex;
  var id;
  var position = position || 0 ;
  var isPlaying = pStatus || true;

  var getUsername = function()
  {
    return username;
  }

  var getPassword = function()
  {
    return password;
  }

  var getChips = function()
  {
    return chips;
  }

  var setChips = function(numChips)
  {
    chips = numChips;
  }

  var getId = function() {
	return id;
  }

  var getIsPlaying = function() {
    return isPlaying;
  }

  var setIsPlaying = function(pStatus) {
	isPlaying = pStatus;
  }

  var getTableIndex = function()
  {
    return tableIndex;
  }

  var setUsername = function(user)
  {
    username = user;
  }

  var setPassword = function(pw)
  {
    password = pw;
  }

  var addChips = function(numChips)
  {
    chips += numChips;
  }

  var deleteChips = function(numChips) {
	chips -= numChips;
  }

  var setTableIndex = function(index)
  {
    tableIndex = index;
  }

  var setPosition = function(num) {
	 position = num;
  }

  var getPosition = function() {
     return position;
  }

  return {
		getUsername: getUsername,
		getPassword: getPassword,
        getChips: getChips,
	    getId: getId,
	    getIsPlaying: getIsPlaying,
	    setIsPlaying: setIsPlaying,
        getTableIndex: getTableIndex,
	 	setUsername: setUsername,
		setPassword: setPassword,
        addChips: addChips,
	    deleteChips: deleteChips,
        setTableIndex: setTableIndex,
		id: id,
	    getPosition: getPosition,
	    setPosition: setPosition
	}
}

exports.Player = Player;
