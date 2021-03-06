"use strict";
var people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        address: [
            '111 main st.',
            '222 third st.'
        ]
    },
    {
        firstname: 'jane',
        lastname: 'doe',
        address: [
            '333 main st.',
            '444 firth st'
        ],
        greet: function () {
            return 'hello!';
        }
    }
]

// console.log(people instanceof firstname);

let heights = [];

$(".title").each(function (indx, element) {
    heights.push($(element).css('font-size', '33px').css('font-size'));
});

console.log(heights[0]);

$('.box').css({ 'height': '50px', 'width': '50px', 'padding': '20px', 'border': '5px solid red', 'background-color': 'grey' });
let height = $('.box').outerHeight(150);
console.log(height);

console.log($('.box').offset());
$('.box').scrollLeft(50);



$('div.box__child').css({ 'height': '30px', 'width': '30px', 'padding': '20px', 'border': '5px solid red', 'background-color': 'white' });
$('div.box').css({ 'background-color': 'blue' }).add('div.box__child').css({ 'opacity': '0.9' });



// let $title = $('h1.title').each(function (index, element) {
//     let eachAttr = element.attr('data-size');
//     console.log(eachAttr);
// })
// console.log($title);