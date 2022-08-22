
    function addRow() {
        const div = document.createElement('div');
        div.className = 'row';
        for (var i = 0; i < 5; i++) {
            div.innerHTML += `
     <div class="card" style="margin-top: 10px">
         <h5 class="card-header">Featured</h5>
         <div class="card-body">
             <h5 class="card-title">Special title treatment</h5>
             <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
         </div>
     </div>
 `;
        }
        document.getElementById('content').appendChild(div);
    }

    var dropdown = document.getElementsByClassName("dropdown-btn");
    for (var i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            this.nextElementSibling.style.display = this.nextElementSibling.style.display === "block" ? "none" : "block";
        });
    }

    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            this.nextElementSibling.style.display = this.nextElementSibling.style.display === "block" ? "none" : "block";

        });
    }

    function openModal(id){
        var modal = document.getElementById(id);
        modal.style.display = "block";
    }  

    function closeModal(id){
        var modal = document.getElementById(id);
        modal.style.display = "none";
    }
