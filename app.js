$('#going').on('change', function() {
  console.log($(this).val())
})

/////// ES6
const es6Div = document.querySelector('.es6-btns')
const es6Btns = es6Div.querySelectorAll('button')

es6Btns.forEach(btn => {
  btn.addEventListener('click', function() {
    const val = btn.textContent
    alert(val)
  })
})

let liItems = ''
liItems += `
  <li class="list-item-1">List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
`
// document.querySelector('.list-item-1').addEventListener('click', () => {
//   alert('Hello')
// })

$('.instructions').on('click', '.list-item-1', function() {
  alert('Hello')
})

document.querySelector('.instructions').innerHTML = liItems

////// jQuery
$('.jquery-btns .btn-num').not('.not-me').on('click', function() {
  const val = $(this).text() // this refers to the element clicked
  alert(val)
})

$('.btn-child').on('click', function () {
  $('.jquery-btns').toggleClass('is-hidden')
})

$('.jquery-btns').on('mouseenter', function() {
  $(this).css({
    backgroundColor: 'red'
  })
}).on('mouseleave', function() {
  $(this).css({
    backgroundColor: 'white'
  })
})

$('.es6-btns .btn-num').on('mouseenter', function() {
  $(this).css({ // this refers to the current button
    backgroundColor: 'red'
  })
}).on('mouseleave', function () {
  $(this).css({
    backgroundColor: 'blue'
  })
})

$('.btn-child').on('click', function() {
  $('.es6-btns .btn-num').first().trigger('click')
})