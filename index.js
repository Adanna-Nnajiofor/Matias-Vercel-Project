window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-menu')
    if (window.pageYOffset > 0) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled');
    }
})



// for the side bar button
document.getElementById("desktop-bar").addEventListener("click", function () {
    document.getElementById("sidebar").style.right = "0";
    document.getElementById("nav-button").classList.add("opened");
});
document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("sidebar").style.right = "-300px";
    document.getElementById("nav-button").classList.remove("opened");
});

window.addEventListener('resize', function () {
    resizeImage();
});


window.addEventListener('resize', function () {
    moveImage();
});



// for the let's talk button on the nav
document.addEventListener("DOMContentLoaded", function() {
    const scrollToHero = document.querySelector('.nav-button button');
    const heroSection = document.querySelector('.hero-section');

    scrollToHero.addEventListener('click', function() {
        heroSection.scrollIntoView({ behavior: 'smooth' });
    });
});




function toggleMobileBarContent() {
    var mobileBarContent = document.getElementById("mobileBarContent");
    var closeBtnMobile = document.getElementById("closeBtn-mobile");
    var navLinksMobile = document.getElementById("navMobileLinks");

    if (mobileBarContent.style.display === "none") {
        // Show mobile bar content
        mobileBarContent.style.display = "block";
        closeBtnMobile.style.display = "inline-block";
        navLinksMobile.style.display = "block"; // Show mobile navigation links
    } else {
        // Hide mobile bar content
        mobileBarContent.style.display = "none";
        closeBtnMobile.style.display = "none";
        navLinksMobile.style.display = "none"; // Hide mobile navigation links
    }
}


// Get references to the buttons and divs
const button1 = document.getElementById("about-btn");
const button2 = document.getElementById("experience-btn");
const button3 = document.getElementById("education-btn");
const button4 = document.getElementById("skill-btn");

const div1 = document.getElementById("about-A");
const div2 = document.getElementById("experience");
const div3 = document.getElementById("education");
const div4 = document.getElementById("skill");

// Add click event listeners to the buttons
button1.addEventListener("click", function () {
    showDiv(div1, button1);
});

button2.addEventListener("click", function () {
    showDiv(div2, button2);
});

button3.addEventListener("click", function () {
    showDiv(div3, button3);
});

button4.addEventListener("click", function () {
    showDiv(div4, button4);
});

function showDiv(div, button) {
    // Hide all divs
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";

    // Remove "active" class from all buttons
    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    button4.classList.remove("active");

    // Show the selected div
    div.style.display = "flex";

    // Add "active" class to the clicked button
    button.classList.add("active");
}
// Call the showDiv function for the "About" section when the page is refreshed
window.addEventListener("load", function () {
    showDiv(div1, button1); // Assuming div1 and button1 are already defined
});




// Get the animated section
const animatedSection = document.getElementById('animated-section');

// Add scroll event listener
window.addEventListener('scroll', () => {
    // Calculate the section's position relative to the viewport
    const rect = animatedSection.getBoundingClientRect();

    // Check if the section is in the viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // Add the active class to animate the text
        document.querySelector('.animate-me').classList.add('active');
    } else {
        // Remove the active class if the section is not in the viewport
        document.querySelector('.animate-me').classList.remove('active');
    }
});



// Add scroll event listener
window.addEventListener('scroll', () => {
    // Calculate the section's position relative to the viewport
    const rectAbout = div1.getBoundingClientRect();
    const rectExperience = div2.getBoundingClientRect();
    const rectEducation = div3.getBoundingClientRect();
    const rectSkill = div4.getBoundingClientRect();

    // Check if the section is in the viewport
    if (rectAbout.top >= 0 && rectAbout.bottom <= window.innerHeight) {
        fadeIn(div1);
    }

    if (rectExperience.top >= 0 && rectExperience.bottom <= window.innerHeight) {
        fadeIn(div2);
    }

    if (rectEducation.top >= 0 && rectEducation.bottom <= window.innerHeight) {
        fadeIn(div3);
    }

    if (rectSkill.top >= 0 && rectSkill.bottom <= window.innerHeight) {
        fadeIn(div4);
    }
});

function fadeIn(element) {
    element.classList.add('animated');
}



// Get all links in the navigation
const links = document.querySelectorAll('.nav-links a');

// Add click event listener to each link
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Get the target section's ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);

        // Get the target section by its ID
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Add active class to the clicked link and remove from others
        links.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});


// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation when element is in viewport
function addAnimationOnScroll() {
    const awardsSection = document.querySelector('.our-awards');
    if (isInViewport(awardsSection)) {
        awardsSection.classList.add('animate');
    }
}

// Add scroll event listener
window.addEventListener('scroll', addAnimationOnScroll);




// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to add animation class when element is in viewport
function addAnimationOnScroll() {
    const elements = document.querySelectorAll('.work-section-image');
    const circularButton = document.querySelector('.circular-button');

    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animate-bottom');
        }
    });

    if (isInViewport(circularButton)) {
        circularButton.classList.add('animate-top');
    }
}

// Add scroll event listener
window.addEventListener('scroll', addAnimationOnScroll);

// Initial check on page load
addAnimationOnScroll();



// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

// Get all ws-btn buttons
var btns = document.querySelectorAll(".ws-btn");

// Loop through all buttons and attach click event listeners
btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        // Get the image element associated with the clicked button
        var img = this.parentNode.parentNode.querySelector("img");
        // Display the modal with the clicked image
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Close the modal when the close button is clicked
document.querySelector(".close").addEventListener("click", function () {
    modal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Navigate to the previous image
prevBtn.addEventListener("click", function () {
    var currentImgSrc = modalImg.src;
    // Loop through all images and find the index of the current image
    var imgList = document.querySelectorAll(".work-section-image img");
    for (var i = 0; i < imgList.length; i++) {
        if (imgList[i].src === currentImgSrc) {
            // If it's not the first image, set the previous image's source
            if (i > 0) {
                modalImg.src = imgList[i - 1].src;
            }
            break;
        }
    }
});

// Navigate to the next image
nextBtn.addEventListener("click", function () {
    var currentImgSrc = modalImg.src;
    // Loop through all images and find the index of the current image
    var imgList = document.querySelectorAll(".work-section-image img");
    for (var i = 0; i < imgList.length; i++) {
        if (imgList[i].src === currentImgSrc) {
            // If it's not the last image, set the next image's source
            if (i < imgList.length - 1) {
                modalImg.src = imgList[i + 1].src;
            }
            break;
        }
    }
});




function scrollToHome() {
    // Get the home section element by its ID
    const homeSection = document.getElementById('home');

    // Scroll to the top of the home section smoothly
    homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}



// Get the section element
const projectSection = document.getElementById('projectSection');

// Add scroll event listener
window.addEventListener('scroll', () => {
    // Calculate the section's position relative to the viewport
    const rect = projectSection.getBoundingClientRect();

    // Check if the section is in the viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // Add the class to trigger animations
        document.querySelector('.need-project-text-1').classList.add('animate-from-top');
        document.querySelector('.need-project-text-2').classList.add('animate-from-bottom');
        document.querySelector('.need-project-image').classList.add('animate-from-right');
    } else {
        // Remove the class if the section is not in the viewport
        document.querySelector('.need-project-text-1').classList.remove('animate-from-top');
        document.querySelector('.need-project-text-2').classList.remove('animate-from-bottom');
        document.querySelector('.need-project-image').classList.remove('animate-from-right');
    }
});



// Get the section element
const servicesSection = document.getElementById('services');

// Add scroll event listener
window.addEventListener('scroll', () => {
    // Calculate the section's position relative to the viewport
    const rect = servicesSection.getBoundingClientRect();

    // Check if the section is in the viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // Add the class to trigger animations for services-provided-1
        document.querySelector('.services-provided-1').classList.add('animate-from-top');

        // Add the class to trigger animations for each list item in service-tabular-list
        const listItems = document.querySelectorAll('.service-tabular-list li');
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate-from-bottom');
            }, 500 * (index + 1)); // Adjust the delay for each item
        });
    }
});





// Define the options for the Intersection Observer
const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.3 // Trigger when 50% of the target is visible
};

// Create a new Intersection Observer instance
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // When the target is intersecting with the viewport
            const target = entry.target;

            // Apply animations to the target elements
            target.querySelector('.line-with-text').style.animation = 'moveTopToBottom 2s alternate';
            target.querySelector('h1').style.animation = 'moveBottomToTop 2s alternate';
            target.querySelectorAll('.work-process-1a').forEach(item => {
                item.style.animation = 'foldInAndOut 2s alternate';
            });

            // Disconnect the observer after the animations have been applied
            observer.unobserve(target);
        }
    });
}, options);

// Select the target element to observe
const workProcessSection = document.querySelector('.work-process');

// Start observing the target element
observer.observe(workProcessSection);



// window.addEventListener('scroll', function () {
//     var lineWithText = document.querySelector('.line-with-text');
//     var h1 = document.querySelector('.testiominal h1');
//     var testimonialSection = document.querySelector('.testiominal');

//     var lineWithTextPosition = lineWithText.getBoundingClientRect().top;
//     var h1Position = h1.getBoundingClientRect().top;
//     var testimonialSectionPosition = testimonialSection.getBoundingClientRect().top;

//     var windowHeight = window.innerHeight;

//     if (lineWithTextPosition < windowHeight) {
//         lineWithText.classList.add('animate-from-top');
//     }

//     if (h1Position < windowHeight) {
//         h1.classList.add('animate-from-top');
//     }

//     if (testimonialSectionPosition < windowHeight) {
//         testimonialSection.classList.add('animate-from-bottom');
//     }
// });



// Animation for the Testimonial section
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        let lineWithText = document.querySelector(".line-with-text");
        let testimonialHeader = document.querySelector(".testimonial h1");
        let testimonialContent = document.querySelector(".testimonial-1");

        let triggerOffset = window.innerHeight * 0.3; // Adjust as needed

        if (isElementInViewport(lineWithText, triggerOffset)) {
            lineWithText.classList.add("animate-from-top");
        }

        if (isElementInViewport(testimonialHeader, triggerOffset)) {
            testimonialHeader.classList.add("animate-from-top");
        }

        if (isElementInViewport(testimonialContent, triggerOffset)) {
            testimonialContent.classList.add("animate-from-bottom");
        }
    });
});

function isElementInViewport(el, offset) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 - offset &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}




// If you need to handle hover using JavaScript
document.querySelectorAll('.my-blog-2A').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.borderColor = ' rgb(201, 243, 29)';
    });
    item.addEventListener('mouseout', event => {
        item.style.borderColor = 'rgba(201, 243, 29, 0.082)';
    });
});


// Function to display the image gallery
document.querySelectorAll('.blog-image').forEach((img, index) => {
    img.onclick = function () {
        document.getElementById('modalImage').src = this.src;
        document.getElementById('imageModal').style.display = "block";
        currentIndex = index;
    }
});


// Function to close the image gallery modal
function closeModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

// Function to show next image in the gallery
function nextImage() {
    currentIndex++;
    if (currentIndex >= document.querySelectorAll('.blog-image').length) {
        currentIndex = 0;
    }
    document.getElementById('modalImage').src = document.querySelectorAll('.blog-image')[currentIndex].src;
}

// Function to show previous image in the gallery
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = document.querySelectorAll('.blog-image').length - 1;
    }
    document.getElementById('modalImage').src = document.querySelectorAll('.blog-image')[currentIndex].src;
}




// Animation for the blog section
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        let myBlog1 = document.querySelector(".my-blog-1");
        let myBlog2As = document.querySelectorAll(".my-blog-2A");

        let triggerOffset = window.innerHeight * 0.3; // Adjust as needed

        if (isElementInViewport(myBlog1, triggerOffset)) {
            myBlog1.classList.add("animate-from-top");
        }

        myBlog2As.forEach((myBlog2A, index) => {
            if (isElementInViewport(myBlog2A, triggerOffset)) {
                myBlog2A.classList.add("animate-from-bottom");
                myBlog2A.classList.add(`delay-${index}`);
            }
        });
    });
});

function isElementInViewport(el, offset) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 - offset &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



// for the get in touch section socials buttons
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class get-in-touch-2B-box
    const getInTouchBoxes = document.querySelectorAll('.get-in-touch-2B-box');

    // Add event listener to each get-in-touch-2B-box
    getInTouchBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Scroll to the hero section smoothly
            document.querySelector('.hero-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


// Get the footer element
const footer = document.querySelector('.footer');

// Function to handle scroll event
function handleScroll() {
    if (window.scrollY > 0) {
        footer.classList.add('sticky');
    } else {
        footer.classList.remove('sticky');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);



// Get the button element inside the footer-3 class
const footerButton = document.querySelector('.footer-3 button');

// Function to handle click event on the footer button
footerButton.addEventListener('click', function() {
    // Get the offset top of the hero-section-A
    const heroSectionATop = document.querySelector('.hero-section-A').offsetTop;
    
    // Scroll to the hero-section-A
    window.scrollTo({
        top: heroSectionATop,
        behavior: 'smooth' // Smooth scroll behavior
    });
});


// Animation for the get-in-touch section
// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function animateGetInTouchSection() {
    const getInTouchSection = document.querySelector('.get-in-touch');
    if (isInViewport(getInTouchSection)) {
        getInTouchSection.classList.add('animate-from-bottom');
    }
}

// Listen for scroll event
window.addEventListener('scroll', animateGetInTouchSection);

// Trigger animation when the page loads
animateGetInTouchSection();
