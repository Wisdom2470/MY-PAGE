document.getElementById('loginForm').onsubmit = function(e){
      e.preventDefault();
      
      if(loginUser.value && loginPass.value){
        
        setTimeout(function(){
          if(loginUser.value === localStorage.getItem('user') && loginPass.value === localStorage.getItem('pass')){
            window.location = 'main.html';
          } else {
            alert('Wrong credentials');
          }
        }, 500);
      } else {
        alert('Fill all fields');
      }
    }