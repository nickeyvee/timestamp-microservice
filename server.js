const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.get( "/:date" , ( request, response ) => {

  let naturalDate = new Date( request.params.date );
  let date = new Date( request.params.date * 1000 );

  const month = date.toString().split(' ')[1];
  const day = date.toString().split(' ')[2];
  const year = date.toString().split(' ')[3];


 if ( date.toString() === "Invalid Date" && naturalDate.toString() === "Invalid Date" ) {
   response.send( JSON.stringify(
     { "unix" : null, "natural" : null }
   ));
 } else
 if ( date.toString() === "Invalid Date" ) {
   response.send( JSON.stringify(
      { "unix" : naturalDate.getTime(),
      "natural" : request.params.date }
    ));
  } else
  if( naturalDate.toString() === "Invalid Date" ) {
      response.send( JSON.stringify(
        { "unix" : date.getTime(), "natural" : month + " " + day + ", " + year }
      ));
    }
});

app.get( "/", ( request, response ) => {
    response.write( "TimeStamp Microservice!");
    response.end();
});

app.listen( port , ( data ) => {
  console.log( 'listening on ' + port );
});
