function modalOpen() {

    const modal = document.querySelector('.modal');
    const btns = document.querySelectorAll('.btn-pop');
    const close = modal.querySelector('.close');
    
    btns.forEach((item)=> {
    item.addEventListener('click', ()=> {
      modal.style.display = "flex";
      setTimeout(() => {
        modal.classList.add('show');
    }, 5);
      document.body.style.overflow = 'hidden';
    })
    })
    
    close.onclick = function() {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = "none"; 
    }, 500);
      document.body.style.overflow = ''; 
    };
    
    window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.classList.remove('show');
        setTimeout(() => {
          modal.style.display = "none"; 
      }, 500);
        document.body.style.overflow = ''; 
    }
    });
    
    
    document.addEventListener('keydown', function(event) {
      if (modal.style.display === 'flex') {
    if (event.key === 'Escape') {
            modal.classList.remove('show');
            setTimeout(() => {
              modal.style.display = "none"; 
          }, 500);
            document.body.style.overflow = ''; 
          } else {
            return;
          }
      }
    });
}

export default modalOpen;