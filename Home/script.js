// JavaScript for modal functionality
document.addEventListener("DOMContentLoaded", function() {
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const closeLogin = document.getElementById("closeLogin");
    const closeSignup = document.getElementById("closeSignup");
  
    function openLogin() {
      loginModal.style.display = "block";
    }
  
    function closeLoginModal() {
      loginModal.style.display = "none";
    }
  
    function openSignup() {
      signupModal.style.display = "block";
    }
  
    function closeSignupModal() {
      signupModal.style.display = "none";
    }
  
    // Event listeners for opening modals
    loginBtn.addEventListener("click", openLogin);
    signupBtn.addEventListener("click", openSignup);
  
    // Event listeners for closing modals
    closeLogin.addEventListener("click", closeLoginModal);
    closeSignup.addEventListener("click", closeSignupModal);
  
    // Close the modal if user clicks outside of it
    window.onclick = function(event) {
      if (event.target == loginModal) {
        closeLoginModal();
      }
      if (event.target == signupModal) {
        closeSignupModal();
      }
    }
  
    // Toggle mobile menu
    document.getElementById("menu-toggle").addEventListener("click", function() {
      const navLinks = document.querySelector(".nav-links");
      navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    });
  });
  


  // abhay