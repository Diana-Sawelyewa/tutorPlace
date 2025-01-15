function modalOpen() {

    const modal = document.querySelector('.modal');
    const btns = document.querySelectorAll('.btn-pop');
    const close = modal.querySelector('.close');
    
    btns.forEach((item)=> {
    item.addEventListener('click', ()=> {
      modal.style.display = "flex";
      document.body.style.overflow = 'hidden';
    })
    })
    
    close.onclick = function() {
      modal.style.display = "none";
      document.body.style.overflow = ''; 
    };
    
    window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; 
        document.body.style.overflow = ''; 
    }
    });
    
    
    document.addEventListener('keydown', function(event) {
      if (modal.style.display === 'flex') {
    if (event.key === 'Escape') {
            modal.style.display = 'none'; 
            document.body.style.overflow = ''; 
          } else {
            return;
          }
      }
    });
}

export default modalOpen;