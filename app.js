var crsr = document.querySelector("#cursor");
var crsr1 = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsr1.style.left = dets.x - 125 + "px";
  crsr1.style.top = dets.y - 125 + "px";
});

var h4all = document.querySelectorAll("nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    elem.style.color = "#10ecb99c";
    crsr.style.scale = 2;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "#16D99E";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    elem.style.color = "#fff";
    crsr.style.border = "0px solid #10ecb99c;";
    crsr.style.backgroundColor = "#059981";
  });
});

let scrollInterval;

// Function to start scrolling
function startScrolling() {
  // Start scrolling if not already scrolling
  if (!scrollInterval) {
    scrollInterval = setInterval(function () {
      window.scrollBy(0, 3000); // Scroll down by 5 pixels

      // Stop scrolling if we reach the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        clearInterval(scrollInterval);
        scrollInterval = null; // Reset the interval variable
      }
    }, 20); // Adjust the speed here (lower means faster)
  }
}

// Function to stop scrolling
function stopScrolling() {
  clearInterval(scrollInterval);
  scrollInterval = null; // Reset the interval variable
}

// Event listener for the arrow icon
document.getElementById("arrow").addEventListener("click", function (event) {
  // event.stopPropagation(); // Prevent click from bubbling up to the window
  startScrolling(); // Start scrolling
});

// Stop scrolling when the user clicks anywhere else or uses the scrollbar
window.addEventListener("scroll", stopScrolling); // Stops if the user manually scrolls
window.addEventListener("click", stopScrolling); // Stops if the user clicks elsewhere

// To prevent scrolling from stopping when clicking inside the arrow icon
document.getElementById("arrow").addEventListener("click", function (event) {
  event.stopPropagation(); // Prevents the stopScrolling function from being called
});
gsap.to("#nav", {
    backgroundColor: " rgb(20, 146, 133)",
    height: "80px",
    duration: 0.5,
  
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
gsap.to("#main", {
  backgroundColor: "rgba(0,60,70,255)",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

// gsap.from("#about-us img,#about-us-in",{
//     y:50,
//     opacity:0,
//     duration:1,
//     // stagger:0.4,//for moving objects one by one
//     scrollTrigger:{
//         trigger:"#about-us",
//         scroller:"body",
//         // marker:true,
//         start:"top 60%",
//         end:"top 58%",
//         scrub:3,
//     }
// })

gsap.from("#about-us img,#about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  // stagger:0.4,//for moving objects one by one
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // marker:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

// gsap.from(".card", {
//   scale: 0.7,
//   opacity: 0.5,
//   duration: 1,
//   stagger: 0.1, //for moving objects one by one
//   scrollTrigger: {
//     trigger: ".card",
//     scroller: "body",
//     // marker:false,
//     start: "top 70%",
//     end: "top 65%",
//     scrub: 1,
//   },
// });

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // marker:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    marker: true,
    start: "top 100%",
    end: "top 80%",
    scrub: 4,
  },
});
gsap.to("#page3", {
  backgroundColor: "#118370",
  scrollTrigger: {
    trigger: "#page3",
    // trigger:"nav",
    scroller: "body",
    // markers:true,
    start: "top 5%",
    end: "top 60%",
    scrub: 2,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    // trigger:"nav",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 70%",
    scrub: 3,
  },
});





let introSec=document.querySelector("#intro-section");
let workshopSec=document.querySelector("#workshops-section");
let teamSec=document.querySelector("#teams");
let supportSec=document.querySelector("#support-section");
let faqSec=document.querySelector("#faq-section");

let introNav=document.querySelector("#introNAV");
let workshopNav=document.querySelector("#workshopNAV");
let teamNav=document.querySelector("#teamsNAV");
let supportNav=document.querySelector("#supportNAV");
let faqNav=document.querySelector("#faqNAV");

// introSec.style.display="block";
// workshopSec.style.display="none";
// teamSec.style.display="none";
// supportSec.style.display="none";
// faqSec.style.display="none";


introNav.addEventListener("click",function(){
introSec.style.display="block";
workshopSec.style.display="none";
teamSec.style.display="none";
supportSec.style.display="none";
faqSec.style.display="none";
})
workshopNav.addEventListener("click",function(){
  introSec.style.display="none";
workshopSec.style.display="block";
teamSec.style.display="none";
supportSec.style.display="none";
faqSec.style.display="none";
})
teamNav.addEventListener("click",function(){
  introSec.style.display="none";
workshopSec.style.display="none";
teamSec.style.display="flex";
supportSec.style.display="none";
faqSec.style.display="none";
})
supportNav.addEventListener("click",function(){
  introSec.style.display="none";
workshopSec.style.display="none";
teamSec.style.display="none";
supportSec.style.display="flex";
faqSec.style.display="none";
})
faqNav.addEventListener("click",function(){
  introSec.style.display="none";
workshopSec.style.display="none";
teamSec.style.display="none";
supportSec.style.display="none";
faqSec.style.display="flex";
})


var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex"; // Use flex instead of block
    }
  });
}

  

document.getElementById("user").addEventListener("click", async () => {
  const dropdown = document.getElementById("dropdown");

  // Toggle the dropdown visibility
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";

  // Fetch user data from the backend
  const userData = await fetch("user-data.php") // PHP script URL
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching user data:", err));
    // document.querySelector("#user h1").textContent = userData.firstName;
  
  // Populate user details in the dropdown
  if (userData && !userData.error) {
    document.getElementById("user-name").textContent = `Name: ${userData.firstName} ${userData.lastName}`;
    document.getElementById("user-email").textContent = `Email: ${userData.email}`;
  } else {
    document.getElementById("user-name").textContent = "User not found";
    document.getElementById("user-email").textContent = "";
  }
});

// Logout functionality
document.getElementById("logout").addEventListener("click", () => {
  alert("Logged out successfully!");
  window.location.href = "logout.php"; // Redirect to a logout script
});



const form = document.getElementById('joinForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Send data to the PHP backend
    fetch('save_to_database.php', {
        method: 'POST',
        body: formData, // Directly pass the FormData object
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to save data to the database');
            }
            return response.json();
        })
        .then(result => {
            // Alert the message from the PHP response
            alert(result.message || 'Application saved successfully!');
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the application. Please try again.');
        });

    // Send data to Web3Forms
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            access_key: '2bf25d03-c324-4b06-92b1-435eafedb5d2', // Replace with your actual access key
            ...data, // Spread the form data into the request
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to submit to Web3Forms');
            }
            return response.json(); // Ensure that we process the Web3Forms response
        })
        .then(result => {
            alert(result.message || 'Application submitted successfully to Web3Forms!');
        })
        .catch(error => {
            console.error('Web3Forms Error:', error);
            alert('There was an error submitting the form to Web3Forms. Please try again.');
        });
});
