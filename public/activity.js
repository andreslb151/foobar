var connection = new Postmonger.Session();
var cfg = "";

// Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function( data ) {
  // document.getElementById( 'configuration' ).value = JSON.stringify( data, null, 2 );
  cfg = JSON.stringify( data, null, 2 );
  alert(cfg);
});

// Save Sequence
connection.on('clickedNext', function() {
  // var configuration = JSON.parse( document.getElementById( 'configuration' ).value );
  
  
  cfg["metaData"]["isConfigured"] = true;
  connection.trigger( 'updateActivity', cfg );
});
