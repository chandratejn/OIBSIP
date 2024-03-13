// This code listens for the Ctrl+P keyboard shortcut, which is commonly used for printing, and then selects all the img and video elements on the page. For each element, it creates a transparent overlay div and inserts it before the element, and then moves the element inside the overlay. This makes it difficult for the user to take a clean screenshot of the element without the overlay being visible. Finally, it displays an alert message to inform the user that screenshots have been disabled for images and videos.

document.addEventListener('keyup', (e) => {
    if (e.ctrlKey && e.keyCode === 80) { // Ctrl+P shortcut
      const images = document.querySelectorAll('img');
      const videos = document.querySelectorAll('video');
      
      images.forEach(img => {
        const overlay = document.createElement('div');
        overlay.classList.add('no-screenshot');
        img.parentNode.insertBefore(overlay, img);
        overlay.appendChild(img);
      });
      
      videos.forEach(video => {
        const overlay = document.createElement('div');
        overlay.classList.add('no-screenshot');
        video.parentNode.insertBefore(overlay, video);
        overlay.appendChild(video);
      });
      
      alert('Screenshots disabled for images and videos.');
    }
  });
  
  
  function smoothScroll(target) {
    const headerHeight = 100; // Assuming the header height is fixed at 100px
    const targetElement = document.querySelector(target);
  
    if (targetElement) {
        const sections = document.querySelectorAll('.parallax');
        let totalBackgroundHeight = 0;
  
        // Calculate total height of previous sections with background images
        sections.forEach(section => {
            if (section.offsetTop < targetElement.offsetTop) {
                totalBackgroundHeight += section.offsetHeight;
            }
        });
  
        // Adjust scroll position by subtracting total background height and header height
        let targetTop = targetElement.offsetTop - totalBackgroundHeight;
  
        // If the target is not the first section, start it at the end of the header
        if (target !== '#home') {
            targetTop -= headerHeight;
        }
  
        window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
        });
    }
  }
  
  // Add click event listeners to navigation items
  document.querySelectorAll('.main-navigation a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const target = item.getAttribute('href');
        smoothScroll(target);
    });
  });
  
