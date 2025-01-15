function validateEmail() {

    function validate(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    const form = document.querySelector('.modal form');
    const input = document.querySelector('.modal input');
    const message = document.querySelector('.modal .error');

    form.addEventListener('submit', (event)=> {

        if (!validate(input.value)) {
            event.preventDefault(); 
            message.style.display = 'block';
            input.classList.add('input_error');
            setTimeout(()=> {
                message.style.display = 'none';
                input.classList.remove('input_error')
            }, 4000)
    
        } else {
            message.style.display = 'none';
            input.classList.remove('input_error')
            form.reset();
        }
    
    })

}

export default validateEmail;





