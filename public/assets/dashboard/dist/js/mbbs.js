
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





      });
