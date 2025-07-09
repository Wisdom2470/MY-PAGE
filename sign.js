document.getElementById('signupForm').onsubmit = function(e){
      e.preventDefault();
      
      if(user.value && email.value && pass.value){
        
        setTimeout(function(){
          localStorage.setItem('user', user.value);
          localStorage.setItem('email', email.value);
          localStorage.setItem('pass', pass.value);
          window.location = 'login.html';
        }, 500);
      } else {
        alert('Fill all fields');
      }
    }