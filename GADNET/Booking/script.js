emailjs.init("X5T-igwno04hnKLtO"); // Replace with your EmailJS public key

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var templateParams = {
        from_name: "GADNET",
        item_name: document.getElementById("item_name").value,
        pickup_date: document.getElementById("pickup_date").value,
        complete_date: document.getElementById("complete_date").value,
        item_quantity: document.getElementById("item_quantity").value,
        reply_to: document.getElementById("user_email").value || "no-reply@example.com"
    };

    emailjs.send("gadnet_23", "template_7ik3sso", templateParams)
    .then(function(response) {
        alert("Booking request sent successfully!");
        document.getElementById("bookingForm").reset();
    }, function(error) {
        alert("Failed to send booking request.");
        console.log(error);
    });
});
