
    $(document).ready(function(){
            $('#exampleModalLong').modal({backdrop: 'static', keyboard: false,show:false})

        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });

        let tBody = document.getElementById('myTable');
let modal = document.getElementById('myModal');
let tr = tBody.getElementsByTagName('TR');
let span = document.getElementsByClassName("close")[1];


// When the user clicks on the button, open the modal 
for (let i = 0; i < tr.length; i++) {
  tr[i].onclick = function() {
    modal.style.display = "block";
    modal.style.overflow = "auto";
    modal.style.overflowX= "auto";


    console.log(this.firstElementChild.innerHTML + ' Selected'); 
  };
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// To make elements readonly
$('#myModal :input').prop('readonly', true); 
$('#sign12').prop('readonly', true);
$("#file").prop('disabled', true);



var c=document.getElementById('images').value;
if (c<1) {
  document.getElementById("demoo").innerHTML = "";
}else{
  alert(c);
  document.getElementById("demoo").innerHTML = c;

}



      });
      $(function () {
        $("#btnAddd").bind("click", function () {
            var div = $("<tr />");
            div.html(GetDynamicTextBox(""));
            $("#TextBoxContainerr").append(div);
        });
        $("body").on("click", ".remove", function () {
          if($("tr").length>1){
      
            $(this).closest("tr").remove();
          }
            else{
              alert("You have to upload at least one document.");
            } 
        });
        
       
        $("#closee").click(function(){
         
              alert("You have to upload at least one document.");
            
      
        }); 
      });
      function GetDynamicTextBox(value) {
        return '<td> <div class="form-group"style="position: relative;top: -13px;"><i class="fa fa-caret-down "id="drop"></i><select class="form-control" id="exampleFormControlSelect1" style="width: 200px;"><option hidde="" selected="">&nbsp;</option><option>Community Certificate</option><option>Transfer Certificate</option><option>Conduct Certificate</option><option>Eligiblity Certificate</option><option>Migration Certificate</option><option>Admission Commitee Form</option></select></div></td>'
       + '<td><input type="text" name="" class="form-control"></td>' + 
       '<td><input type="Date" name="" class="form-control"></td>' + 
       '<td><input type="text" name="" class="form-control"></td>' + 
       '<td><input type="text" name="" class="form-control"></td>' + 
      
       '<td><button type="button" class="btn-sm" data-toggle="modal" data-target="#upload"><i class="fa fa-upload text-primary"></i></button> <button type="button"id="close" class="btn-sm btn-danger remove"><i class="fa fa-times" aria-hidden="true"></i></button></td>'
      
      }
      
$(function () {
  $("#btnAdd").bind("click", function () {
      var div = $("<tr />");
      div.html(GetDynamicTextBox(""));
      $("#TextBoxContainer").append(div);
  });
  $("body").on("click", ".remove", function () {
    if($("tr").length>1){

      $(this).closest("tr").remove();
    }
      else{
        alert("You have to upload at least one document.");
      } 
  });

 
  $("#close").click(function(){
   
        alert("You have to upload at least one document.");
      

  }); 
});
function GetDynamicTextBox(value) {
  return '<td> <div class="form-group"style="position: relative;top: -13px;"><i class="fa fa-caret-down "id="drop"></i><select class="form-control" id="exampleFormControlSelect1" style="width: 200px;"><option hidde="" selected="">&nbsp;</option><option>Community Certificate</option><option>Transfer Certificate</option><option>Conduct Certificate</option><option>Eligiblity Certificate</option><option>Migration Certificate</option><option>Admission Commitee Form</option></select></div></td>'
 + '<td><input type="text" name="" class="form-control"></td>' + 
 '<td><input type="Date" name="" class="form-control"></td>' + 
 '<td><input type="text" name="" class="form-control"></td>' + 
 '<td><input type="text" name="" class="form-control"></td>' + 

 '<td><button type="button" class="btn-sm" data-toggle="modal" data-target="#upload"><i class="fa fa-upload text-primary"></i></button> <button type="button"id="close" class="btn-sm btn-danger remove"><i class="fa fa-times" aria-hidden="true"></i></button></td>'

}
