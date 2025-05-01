
let condition = true;
$('.menu_small_icon').click(function () { 
    if (condition) {
        anime({
            targets: '.menu-small',
            translateX: ['-100%', '0'],
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1200,
            loop: false
        });
        anime({
          targets: '.stick',
          rotate: '180',
          easing: 'easeInOutQuad',
          duration: 1000,
          loop: false,
          direction: 'alternate'
      })
      anime({
          targets: '.menu_small_icon',
          rotate: '90',
          easing: 'easeInOutQuad',
          duration: 500,
          loop: false,
          direction: 'alternate',
      })
    }
    else {
      anime({
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1200,
        loop: false
      });
      anime({
        targets: '.stick',
        rotate: '0',
        easing: 'easeInOutQuad',
        duration: 1000,
        loop: false,
        direction: 'alternate'
    })
    anime({
        targets: '.menu_small_icon',
        rotate: '0',
        easing: 'easeInOutQuad',
        duration: 500,
        loop: false,
        direction: 'alternate'
    })

    }
    condition = !condition
})