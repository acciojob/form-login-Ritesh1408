document.getElementById('form1').onsubmit = function (event) {
    event.preventDefault(); 
    getFormvalue(); 
};

function getFormvalue() {
    let firstName = document.querySelector('input[name="fname"]').value.trim();
    let lastName = document.querySelector('input[name="lname"]').value.trim();

    let fullName = `${firstName} ${lastName}`;
    
    if (fullName.trim() !== "") {
        alert(fullName);
    } else {
        alert("Please enter your first and last name.");
    }
}
