n = 0
const button = document.getElementById('view-more-less')
      pictures = document.getElementById('hidden-rows')
      viewLess = document.querySelector('.view-less')
      viewMore = document.querySelector('.view-more')
      arrow = document.querySelector('.arrows')

// button.addEventListener('click', () => {
//     n++
//     if(n % 2 == 0) {
//         viewLess.style.display = 'none';
//         viewMore.style.display = 'flex';
//     } else {
//         viewMore.style.display = 'none';
//         viewLess.style.display = 'flex';
//     }
// })

// pictures.addEventListener('transitionend', () => {
//     n++
//     if(n % 2 == 0) {
//         viewLess.style.display = 'none';
//         viewMore.style.display = 'flex';
//     } else {
//         viewMore.style.display = 'none';
//         viewLess.style.display = 'flex';
//     }
// })

button.addEventListener('click', () => {
    n++
    if(n % 2 == 0) {
        arrow.style.transform = 'rotate(0deg)';
        viewLess.style.opacity = '0';
        viewMore.style.opacity = '1';
    } else {
        arrow.style.transform = 'rotate(-180deg)';
        viewMore.style.opacity = '0';
        viewLess.style.opacity = '1';

    }
})




