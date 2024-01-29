/*function showForm() {
    var userType = document.getElementById("userType").value;
    if (userType == "designer") {
        document.getElementById("designerForm").style.display = "block";
        document.getElementById("clientForm").style.display = "none";
    } else {
        document.getElementById("clientForm").style.display = "block";
        document.getElementById("designerForm").style.display = "none";
    }
}
*/

function showForm() {
    var userType = document.getElementById("userType").value;
    var designerForm = document.getElementById("designerForm");
    var clientForm = document.getElementById("clientForm");

    // Hide both forms initially
    designerForm.style.display = "none";
    clientForm.style.display = "none";

    // Show the corresponding form based on the user type selected
    if (userType === "designer") {
        designerForm.style.display = "block";
    } else if (userType === "client") {
        clientForm.style.display = "block";
    }
}

// Call the function to set the correct form display on page load
window.onload = showForm;
