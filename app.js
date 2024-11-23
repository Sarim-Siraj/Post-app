var box = document.querySelector('.apna'); 
var selectedColor = "#ffffff"; 

function changebg(color) {
    selectedColor = color; 
    box.style.backgroundColor = color; 
}
function uploadPost() {
    var userName = document.getElementById('UserName')
    var tiTle = document.getElementById('Title')
    var description = document.getElementById('Description')
    var Currentdate = new Date().toUTCString()


    if (userName.value.trim() !== "") {
        if (tiTle.value.trim() !== "") {
            if (description.value.trim() !== "") {
                Listingcon.innerHTML += ` <div class="card my-4">
                <div class="card-header d-flex justify-content-between">
                    <span>
                        ${userName.value}
                    </span>
                    <span>
                       ${Currentdate}
                    </span>
                </div>
                <div style="background-color:${selectedColor}" class="card-body postCardBody">
                    <h5 class="card-title">${tiTle.value}</h5>
                    <p class="card-text">${description.value}</p></div><hr/>
                <div class="card-body postCardBody d-flex justify-content-between">
               <div class="">Like</div>
               <div class="">Comment</div>
               <div class="">Share</div>
                </div>    `
                userName.value = ''
                tiTle.value = ''
                description.value = ''



            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Enter Description",

                });
            }

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Enter Title",

            });
        }

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter UserNAme",

        });
    }

}
// function changebg(color){
//     box.style.backgroundColor = color;
// }