function sidebarOpen() {

    const sidebar = document.querySelector('.sidebar');
    const burger = document.querySelector('.burger');
    const links = sidebar.querySelectorAll('a');
    const overlay = document.querySelector('.overlay');


    links.forEach(item=> {
    item.addEventListener('click', ()=> {
        sidebar.classList.remove('active');
        burger.classList.remove('active');
        overlay.classList.remove('show');
        setTimeout(() => {
            overlay.classList.remove('active');;// Затем добавляем класс для анимации
        }, 500);
        checkScroll();
    })
    })

    burger.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        burger.classList.toggle('active');
        /* overlay.classList.toggle('active'); */
        if (burger.classList.contains('active')) {
            overlay.classList.add('active');
            setTimeout(() => {
                overlay.classList.add('show');// Затем добавляем класс для анимации
            }, 5);
        } else {
            overlay.classList.remove('show');
            setTimeout(() => {
                overlay.classList.remove('active');;// Затем добавляем класс для анимации
            }, 500);
        }

        
        checkScroll();
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !burger.contains(event.target)) {
        sidebar.classList.remove('active');
        burger.classList.remove('active');
        overlay.classList.remove('show');
        setTimeout(() => {
            overlay.classList.remove('active');;// Затем добавляем класс для анимации
        }, 500);
        checkScroll();
        }
    });

  function checkScroll() {
    if (sidebar.classList.contains('active')) {
        disableScroll();
    } else {
        enableScroll();
    }
  }

    function disableScroll() {
        window.addEventListener('wheel', preventDefault, { passive: false });
        window.addEventListener('touchmove', preventDefault, { passive: false });
    }

    function enableScroll() {
        window.removeEventListener('wheel', preventDefault, { passive: false });
        window.removeEventListener('touchmove', preventDefault, { passive: false });
    }

    function preventDefault(e) {
        e.preventDefault();
    }

}

export default sidebarOpen;