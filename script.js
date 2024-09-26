document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});

const sections = document.querySelectorAll("section");

const options = {
  root: null,  // Use viewport as root
  threshold: 0.1,  // Trigger animation when 10% of the section is visible
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;  // Make the section visible
      observer.unobserve(entry.target);  // Stop observing once animation is triggered
    }
  });
}, options);

sections.forEach(section => {
  sectionObserver.observe(section);
});
