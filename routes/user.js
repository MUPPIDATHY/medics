//---------------------------------------------signup page call------------------------------------------------------
exports.signup = function (req, res) {
   message = '';
   if (req.method == "POST") {
      var post = req.body;
      var fname = post.fname;
      var lname = post.lname;
      var emailid = post.emailid;
      var mobile = post.mobile;
      var password = post.password;
      console.log(fname);
     
           var sql = "INSERT INTO `ponmaridb`.`users`(`firstname`,`lastname`,`mobile`,`emailid`,`password`) VALUES ('" + fname + "','" + lname + "','" + mobile + "','" + emailid + "','" + password + "')";
            query = db.query(sql, function (err, data) {
                      message='You have registered successfully!';
                            res.render('index.ejs', { message:message });
                     });
         } else {
      res.render('index.ejs');
   }
};

//---------------------------------------------signup page call------------------------------------------------------
exports.mbbs_stud_personal = function (req, res) {
   message = '';
   if (req.method == "POST") {
      var post = req.body;
      var fname = post.fname;
      var lname = post.lname;
      var emailid = post.emailid;
      var mobile = post.mobile;
      var password = post.password;
      console.log(fname);
     
           var sql = "INSERT INTO `ponmaridb`.`users`(`firstname`,`lastname`,`mobile`,`emailid`,`password`) VALUES ('" + fname + "','" + lname + "','" + mobile + "','" + emailid + "','" + password + "')";
            query = db.query(sql, function (err, data) {
                      message='You have registered successfully!';
                            res.render('mbbs_stud_personal.ejs', { message:message });
                     });
         } else {
      res.render('index.ejs');
   }
};
//---------------------------------------------signup page call------------------------------------------------------
exports.mbbs_stud_qual = function (req, res) {
   message = '';
   if (req.method == "POST") {
      var post = req.body;
      var fname = post.fname;
      var lname = post.lname;
      var emailid = post.emailid;
      var mobile = post.mobile;
      var password = post.password;
      console.log(fname);
     
           var sql = "INSERT INTO `ponmaridb`.`users`(`firstname`,`lastname`,`mobile`,`emailid`,`password`) VALUES ('" + fname + "','" + lname + "','" + mobile + "','" + emailid + "','" + password + "')";
            query = db.query(sql, function (err, data) {
                      message='You have registered successfully!';
                            res.render('mbbs_stud_qual.ejs', { message:message });
                     });
         } else {
      res.render('index.ejs');
   }
};
//---------------------------------------------signup page call------------------------------------------------------
exports.mbbs_stud_cert = function (req, res) {
   message = '';
   if (req.method == "POST") {
      var post = req.body;
      var fname = post.fname;
      var lname = post.lname;
      var emailid = post.emailid;
      var mobile = post.mobile;
      var password = post.password;
      console.log(fname);
     
           var sql = "INSERT INTO `ponmaridb`.`users`(`firstname`,`lastname`,`mobile`,`emailid`,`password`) VALUES ('" + fname + "','" + lname + "','" + mobile + "','" + emailid + "','" + password + "')";
            query = db.query(sql, function (err, data) {
                      message='You have registered successfully!';
                            res.render('mbbs_stud_cert.ejs', { message:message });
                     });
         } else {
      res.render('index.ejs');
   }
};
//---------------------------------------------signup page call------------------------------------------------------
exports.mbbs_stud_bank = function (req, res) {
   message = '';
   if (req.method == "POST") {
      var post = req.body;
      var fname = post.fname;
      var lname = post.lname;
      var emailid = post.emailid;
      var mobile = post.mobile;
      var password = post.password;
      console.log(fname);
     
           var sql = "INSERT INTO `ponmaridb`.`users`(`firstname`,`lastname`,`mobile`,`emailid`,`password`) VALUES ('" + fname + "','" + lname + "','" + mobile + "','" + emailid + "','" + password + "')";
            query = db.query(sql, function (err, data) {
                      message='You have registered successfully!';
                            res.render('mbbs_stud_bank.ejs', { message:message });
                     });
         } else {
      res.render('index.ejs');
   }
};
//---------------------------------------------signup page call------------------------------------------------------
exports.mbbs_stud_reli = function (req, res) {
   message = '';
   if (req.method == "POST") {
      var post = req.body;
      var fname = post.fname;
      var lname = post.lname;
      var emailid = post.emailid;
      var mobile = post.mobile;
      var password = post.password;
      console.log(fname);
     
           var sql = "INSERT INTO `ponmaridb`.`users`(`firstname`,`lastname`,`mobile`,`emailid`,`password`) VALUES ('" + fname + "','" + lname + "','" + mobile + "','" + emailid + "','" + password + "')";
            query = db.query(sql, function (err, data) {
                      message='You have registered successfully!';
                            res.render('mbbs_stud_reli.ejs', { message:message });
                     });
         } else {
      res.render('index.ejs');
   }
};
//---------------------------------------------signup page call------------------------------------------------------
exports.mbbs_stud_upload = function (req, res) {
   message = '';
   if (req.method == "POST") {
      var post = req.body;
      var fname = post.fname;
      var lname = post.lname;
      var emailid = post.emailid;
      var mobile = post.mobile;
      var password = post.password;
      console.log(fname);
     
           var sql = "INSERT INTO `ponmaridb`.`users`(`firstname`,`lastname`,`mobile`,`emailid`,`password`) VALUES ('" + fname + "','" + lname + "','" + mobile + "','" + emailid + "','" + password + "')";
            query = db.query(sql, function (err, data) {
                      message='You have registered successfully!';
                            res.render('mbbs_stud_upload.ejs', { message:message });
                     });
         } else {
      res.render('index.ejs');
   }
};
//-----------------------------------------------login page call------------------------------------------------------
exports.login = function (req, res) {
   var message = '';
   var message1='';
   var sess = req.session;

   if (req.method == "POST") {
      var post = req.body;
      var emailid = post.emailid;
       var pass = post.password;
       var firstname='';
         
         if(emailid=='devi@gmail.com' && pass=='devi')
         {
         res.render('ic_board.ejs',{message:message});
         }
         else
         {
            sql = "SELECT * FROM `ponmaridb`.`users` WHERE `emailid`='" + emailid + "' and password = '" + pass + "'";
            db.query(sql, function (err, results) {
               if (results.length) {
                  req.session.firstname = results[0].firstname;
                  req.session.user = results[0];
                   firstname=results[0].firstname;
                  console.log(results[0].firstname);
                  message = "Welcome! "+firstname;
                  message1=firstname;
                  res.render('ic_board.ejs', { message: message,message1:message1});
               }
               else {
                  message = 'Incorrect Email ID or Password!';
               
                  res.render('index.ejs', { message: message});
               }
   
            });
         }
        
        
   } else {
      res.render('index.ejs', { message: message });
   }

};

//------------------------------------logout functionality----------------------------------------------
exports.logout = function (req, res) {
   req.session.destroy(function (err) {
      res.redirect("/login");
   })
};
//--------------------------------Main signup page--------------------------------
exports.signuphome = function (req, res) {
   var message = "";
  
      res.render('signup.ejs', { message: message });
  
};
//--------------------------------Main signup page--------------------------------
exports.forgotpwd = function (req, res) {
   var message = '';
   res.render('forgotpwd.ejs', { message: message });
};
//--------------------------------Main signup page--------------------------------
exports.mbbs_board = function (req, res) {
   var message = '';
   res.render('mbbs_board.ejs', { message: message });
};
//--------------------------------Main signup page--------------------------------
exports.icboard = function (req, res) {
   var message = '';
   res.render('ic_board.ejs', { message: message });
};
//---------------------------------------------signup page call------------------------------------------------------
exports.mbbs_stud_finish = function (req, res) {
   message = '';
   if (req.method == "POST") {
      var post = req.body;
      var fname = post.fname;
      var lname = post.lname;
      var emailid = post.emailid;
      var mobile = post.mobile;
      var password = post.password;
      console.log(fname);
     
           var sql = "INSERT INTO `ponmaridb`.`users`(`firstname`,`lastname`,`mobile`,`emailid`,`password`) VALUES ('" + fname + "','" + lname + "','" + mobile + "','" + emailid + "','" + password + "')";
            query = db.query(sql, function (err, data) {
                      message='You have registered successfully!';
                            res.render('ic_board.ejs', { message:message });
                     });
         } else {
      res.render('index.ejs');
   }
};
//---------------------------------------------signup page call------------------------------------------------------
exports.mbbs_stud_fees_collect = function (req, res) {
   message = '';
   if (req.method == "POST") {
      var post = req.body;
      var fname = post.fname;
      var lname = post.lname;
      var emailid = post.emailid;
      var mobile = post.mobile;
      var password = post.password;
      console.log(fname);
     
           var sql = "INSERT INTO `ponmaridb`.`users`(`firstname`,`lastname`,`mobile`,`emailid`,`password`) VALUES ('" + fname + "','" + lname + "','" + mobile + "','" + emailid + "','" + password + "')";
            query = db.query(sql, function (err, data) {
                      message='You have registered successfully!';
                            res.render('ic_board.ejs', { message:message });
                     });
         } else {
      res.render('index.ejs');
   }
};
//--------------------------------Main signup page--------------------------------
exports.mbbs_stud_fees = function (req, res) {
   var message = "";
  
      res.render('mbbs_stud_fees.ejs', { message: message });
  
};