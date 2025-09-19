// form submission
document.getElementById("lead-form")
.addEventListener("submit",function(e) {
    e.preventDefault();

    // Get form values
const firstname = this.elements[0].value;
const lastname = this.elements[1].value;
const emailaddress = this.elements[2].value;
const phone = this.elements[3].value;
const countrycode = this.elements[4].value;
const plan = this.elements[5].value;

// in real scenario, you would send this data to a server
console.log("Lead Captured: ", {firstname,lastname,emailaddress,phone,countrycode,plan});

// show configuration
alert("Thank you for your interest! We will contact you shortly with our plan details")

// Reset form
this.reset()
})


// show popup after 5 seconds
setTimeout(function(){
    document.getElementById("email-popup").style.display="flex"
},5000);

// close popup when X is clicked
document.querySelector(".close-btn").addEventListener("click",function(){
    document.getElementById("email-popup").style.display="none";
})

// close when clicking ouside content
document.getElementById("email-popup").addEventListener("click",function(e){
    if(e.target=== this){
        this.style.display="none";
    }
})

// ====================>Cookies<====================

function acceptCookies(){
    document.getElementById("cookie-banner").style.display="none";
    localStorage.setItem("cookiesAccepted", "true")
    loadAnalytics(); // GA4

}

function declineCookies(){
    document.getElementById("cookie-banner").style.display="none";
    localStorage.setItem("cookiesAccepted", "false")
    loadAnalytics(); // GA4

}

// on page load, check past choice

window.onload = function () {

    if(localStorage.getItem("cookiesAccepted")==="true"){
        loadAnalytics();
        this.document.getElementById("cookie-banner").style.display="none";

    }else if (localStorage.getItem("cookiesAccepted")==="false"){
        document.getElementById("cookie-banner").style.display ="none";
        }
    }








