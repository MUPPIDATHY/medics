/**
* Module dependencies.
*/
const multer = require('multer');
const exphbs=require('express-handlebars');
const express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
//const methodOverride = require('method-override');
const session = require('express-session');
const app = express();
const mysql      = require('mysql');
// Handlebars Middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
let bodyParser=require("body-parser");

//Server port
var db_config = {
 /* host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'ponmaridb',
  port:3306*/
};

var connection;

function handleDisconnect() {
connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                // the old one cannot be reused.

connection.connect(function(err) {              // The server is either down
  if(err) {                                     // or restarting (takes a while sometimes).
    console.log('error when connecting to db:', err);
    setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
  }                                     // to avoid a hot loop, and to allow our node script to
});                                     // process asynchronous requests in the meantime.
                                        // If you're also serving http, display a 503 error.
connection.on('error', function(err) {
  console.log('db error', err);
  if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
    handleDisconnect();                         // lost due to either server restart, or a
  } else {                                      // connnection idle timeout (the wait_timeout
    throw err;                                  // server variable configures this)
  }
});
}

handleDisconnect();
 //Server port
 
global.db = connection;
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

// app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 6000000000 }
}))

// Public Folder
app.use(express.static('./public'));

// development only
 
app.get('/', routes.index);
app.get('/signup', user.signup);
app.post('/signup', user.signup);

app.get('/login', routes.index);
app.get('/logout', user.logout);
app.get('/forgotpwd', user.forgotpwd);
app.post('/login', user.login);
app.get('/signuphome', user.signuphome);
app.get('/home/logout', user.logout);
app.get('/mbbs_board', user.mbbs_board);
app.get('/icboard', user.icboard);
app.get('/mbbs_stud_personal', user.mbbs_stud_personal);
app.post('/mbbs_stud_personal', user.mbbs_stud_personal);
app.get('/mbbs_stud_qual', user.mbbs_stud_qual);
app.post('/mbbs_stud_qual', user.mbbs_stud_qual);
app.get('/mbbs_stud_cert', user.mbbs_stud_cert);
app.post('/mbbs_stud_cert', user.mbbs_stud_cert);
app.get('/mbbs_stud_bank', user.mbbs_stud_bank);
app.post('/mbbs_stud_bank', user.mbbs_stud_bank);
app.get('/mbbs_stud_reli', user.mbbs_stud_reli);
app.post('/mbbs_stud_reli', user.mbbs_stud_reli);
app.get('/mbbs_stud_upload', user.mbbs_stud_upload);
app.post('/mbbs_stud_upload', user.mbbs_stud_upload);
app.get('/mbbs_stud_finish', user.mbbs_stud_finish);
app.post('/mbbs_stud_finish', user.mbbs_stud_finish);
app.get('/mbbs_stud_fees', user.mbbs_stud_fees);
app.post('/mbbs_stud_fees', user.mbbs_stud_fees);


//Middleware
server.listen(80)
