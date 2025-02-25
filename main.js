console.log("change");

const images = [
  'url("images/rentAcar-img/slider-2.bg.jpg")',
  'url("images/rentAcar-img/slider-1.bg.jpg")',
  'url("images/rentAcar-img/slider-1.bg.jpg")'
];

let currentIndex = 0;


function changeBackground() {
  const container = document.getElementById('background-container');
  container.style.backgroundImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length; 
}

// Automatically change background every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 3000);


const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('nav-active'); // Toggle class to show/hide the menu
});

const scrollRevealSection = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

ScrollReveal().reveal(".bg-image img", {
    ...scrollRevealSection,
    origin: "right"
  });


  ScrollReveal().reveal(".bg-text h2", {
    ...scrollRevealSection,
    delay: 300
  });

  ScrollReveal().reveal(".bg-text hr", {
    ...scrollRevealSection,
    delay: 500
  });
  ScrollReveal().reveal(".bg-text p", {
    ...scrollRevealSection,
    delay: 1000
  });
  ScrollReveal().reveal(".bg-download-links", {
    ...scrollRevealSection,
    delay: 1500
  });


  ScrollReveal().reveal(".discount-dis", {
    ...scrollRevealSection,
    origin: "left"
  });
  ScrollReveal().reveal(".freeCancellation", {
    ...scrollRevealSection,
    delay: 500,
    origin:"right"
  });

  ScrollReveal().reveal(".theftprotection", {
    ...scrollRevealSection,
    delay: 1000,
    origin:"right"
  });

  
  ScrollReveal().reveal(".GPSonEveryVehicle", {
    ...scrollRevealSection,
    delay: 1000,
    origin:"left"
  });

  ScrollReveal().reveal(".RefuelingPolicy", {
    ...scrollRevealSection,
    delay: 1000,
    origin:"left"
  });

  
  ScrollReveal().reveal(".rentals-display", {
    ...scrollRevealSection,
    delay: 1200,
    interval: 500,
  });


  // ScrollReveal().reveal(".directions", {
  //   ...scrollRevealSection,
  //   interval: 700,
  // });


  ScrollReveal().reveal(".rentals-section .rentals-deal .rental-img img", {
    ...scrollRevealSection,
    origin: "left",
  });

  ScrollReveal().reveal(".js-scroll", {
    ...scrollRevealSection,
    delay: 300,
  });
  
  ScrollReveal().reveal(".rentals-desp h5", {
    ...scrollRevealSection,
    delay: 500,
  });
  ScrollReveal().reveal(".rentals-desp h4", {
    ...scrollRevealSection,
    delay: 600,
  });
  ScrollReveal().reveal(".rentals-display", {
    ...scrollRevealSection,
    delay: 700,
    // interval: 500,
  });


  ScrollReveal().reveal(".discover-section .js-discover-scroll img", {
    ...scrollRevealSection,
    origin: "left",
  });

  ScrollReveal().reveal(".discover-details", {
    ...scrollRevealSection,
    origin: "right",
  });

  ScrollReveal().reveal(".discover-details img", {
    ...scrollRevealSection,
    delay: 300,
  });

  ScrollReveal().reveal(".discover-details h2", {
    ...scrollRevealSection,
    delay: 500,
  });
  ScrollReveal().reveal(".discover-details span", {
    ...scrollRevealSection,
    delay: 1000,
  });
  ScrollReveal().reveal(".discover-section .js-discover-button-scroll", {
    ...scrollRevealSection,
    delay: 1500,
    // interval: 500,
  });

  ScrollReveal().reveal(".needHelp", {
    ...scrollRevealSection,
    delay: 300,
  });


  ScrollReveal().reveal(".js-booking1", {
    ...scrollRevealSection,
    delay: 500,
    origin:"right",
  });

  ScrollReveal().reveal(".js-booking2", {
    ...scrollRevealSection,
    delay: 800,
    origin:"right",
  });

  
  ScrollReveal().reveal(".js-booking3", {
    ...scrollRevealSection,
    delay: 900,
    origin:"left",
  });

  ScrollReveal().reveal(".js-booking4", {
    ...scrollRevealSection,
    delay: 1000,
    origin:"left",
  });


  ScrollReveal().reveal(".js-download-details", {
    ...scrollRevealSection,
    delay: 500,
    origin:"left",
  });

  ScrollReveal().reveal(".downloadimg img", {
    ...scrollRevealSection,
    delay: 1000,
    origin:"right",
  });

  ScrollReveal().reveal(".js-scroll-footer1", {
    ...scrollRevealSection,
    delay: 500,
    origin:"bottom",
  });

  ScrollReveal().reveal(".js-scroll-footer2", {
    ...scrollRevealSection,
    delay: 800,
    origin:"bottom",
  });

  ScrollReveal().reveal(".js-scroll-footer3", {
    ...scrollRevealSection,
    delay: 1000,
    origin:"bottom",
  });

  ScrollReveal().reveal(".js-scroll-footer4", {
    ...scrollRevealSection,
    delay: 1100,
    origin:"top",
  });

  ScrollReveal().reveal(".footersocials", {
    ...scrollRevealSection,
    delay: 1500,
    origin:"right",
  });


  document.addEventListener('DOMContentLoaded', () => {
    const dailyRate = 55; 
    const daysInput = document.getElementById('days');
    const totalPriceElement = document.getElementById('totalPrice');

   
    const calculateTotalPrice = () => {
        const numberOfDays = parseInt(daysInput.value);
        const totalPrice = dailyRate * numberOfDays;
        totalPriceElement.textContent = totalPrice.toFixed(2); // Update the total price display
    };

    
    daysInput.addEventListener('input', calculateTotalPrice);

   
    calculateTotalPrice();
});


document.addEventListener('DOMContentLoaded', () => {
  const bookButtons = document.querySelectorAll('.book-now-btn');

  bookButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); 

      const carType = button.getAttribute('data-car');

      if (carType === 'car1') {
        window.location.href = 'booking1.html';
      } else if (carType === 'car2') {
        window.location.href = 'booking2.html';
      } else if (carType === 'car3') {
        window.location.href = 'booking3.html';
      } else if (carType === 'car4') {
        window.location.href = 'booking4.html';
      }
    });
  });
});

  document.addEventListener('DOMContentLoaded', () => {
   
    const signInBtn = document.querySelector('.signInBtn');
    const signInPopup = document.getElementById('signInPopup');
    const closeSignInBtn = signInPopup.querySelector('.close-btn');

    const signUpBtn = document.querySelector('.signUpBtn');
    const signUpPopup = document.getElementById('signUpPopup');
    const closeSignUpBtn = signUpPopup.querySelector('.close-btn');

   
    signInBtn.addEventListener('click', (event) => {
      event.preventDefault();
      signInPopup.style.display = 'flex';
    });


    signUpBtn.addEventListener('click', (event) => {
      event.preventDefault();
      signUpPopup.style.display = 'flex';
    });

   
    closeSignInBtn.addEventListener('click', () => {
      signInPopup.style.display = 'none';
    });

    closeSignUpBtn.addEventListener('click', () => {
      signUpPopup.style.display = 'none';
    });

    
    window.addEventListener('click', (event) => {
      if (event.target === signInPopup) {
        signInPopup.style.display = 'none';
      } else if (event.target === signUpPopup) {
        signUpPopup.style.display = 'none';
      }
    });
  });



  
 
 
  ScrollReveal().reveal(".rentAcar-details", {
    ...scrollRevealSection,
    delay: 500,
    origin:"right",
  });

  ScrollReveal().reveal(".renting-s-ection", {
    ...scrollRevealSection,
    delay: 400,
    origin:"left",
  });

  ScrollReveal().reveal(".renting-s-ection .model", {
    ...scrollRevealSection,
    delay: 500,
    origin:"right",
  });

  ScrollReveal().reveal(".renting-s-ection .model2", {
    ...scrollRevealSection,
    delay: 500,
    origin:"right",
  });
  
  ScrollReveal().reveal(".service-details", {
    ...scrollRevealSection,
    delay: 600,
    origin:"right",
  });



  ScrollReveal().reveal(" .deatils-text", {
    ...scrollRevealSection,
    delay: 100,
    origin:"top",
  });


  ScrollReveal().reveal(".blog-details", {
    ...scrollRevealSection,
    delay: 500,
    origin:"right",
  });
  
  ScrollReveal().reveal(" .js-bloggings1", {
    ...scrollRevealSection,
    delay: 500,
    origin:"left",
  });

  ScrollReveal().reveal(" .js-bloggings2", {
    ...scrollRevealSection,
    delay: 700,
    origin:"top",
  });

  ScrollReveal().reveal(" .js-bloggings3", {
    ...scrollRevealSection,
    delay: 900,
    origin:"right",
  });


  ScrollReveal().reveal(" .js-bloggings4", {
    ...scrollRevealSection,
    delay: 500,
    origin:"left",
  });

  ScrollReveal().reveal(" .js-bloggings5", {
    ...scrollRevealSection,
    delay: 700,
    origin:"top",
  });

  ScrollReveal().reveal(" .js-bloggings6", {
    ...scrollRevealSection,
    delay: 900,
    origin:"right",
  });


  ScrollReveal().reveal(" .contactForm", {
    ...scrollRevealSection,
    delay: 900,
    origin:"left",
  });

  ScrollReveal().reveal(" .questionFoem", {
    ...scrollRevealSection,
    delay: 900,
    origin:"right",
  });

  ScrollReveal().reveal(" .bookingimg-", {
    ...scrollRevealSection,
    delay: 700,
    origin:"left",
  });

  ScrollReveal().reveal(" .price-calculator ", {
    ...scrollRevealSection,
    delay: 800,
    origin:"right",
  });

  ScrollReveal().reveal(" .reviews-car ", {
    ...scrollRevealSection,
    delay: 300,
    origin:"top",
  });





        // Optional: Basic JavaScript to display a success message on form submission
        const form = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevents form from actually submitting

            // Here you could add AJAX or other form processing logic

            formMessage.style.display = 'block'; // Shows the success message
            form.reset(); // Resets the form fields
        });

     