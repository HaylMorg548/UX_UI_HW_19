const accordian = document.querySelectorAll('.accordian');
accordian.forEach(accordian => {
    accordian.addEventListener('click', e => {
        let accordianBtn = accordian.querySelector('button');
        accordian.classList.toggle('active');
        if (accordianBtn.textContent === '+' ) {
            accordianBtn.textContent = '-';
        }
        else {
            accordianBtn.textContent = '+';
        }
    })
    
})
// $('accordian').click(function(){
//     $(this).find('.accordian').toggleClass('active');
//     $(this).siblings('.accordian').find(".accordian").removeClass("active");


// }));

