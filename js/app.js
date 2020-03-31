'use strict';
let templateId= "#horns-templte";
Animals.all = [];
let horns = [];


function Animals(data) {
  this.image_url = data.image_url;
  this.title = data.title;
  this.description = data.description;
  this.keyword = data.keyword;
  this.horns = data.horns;
  
}
Animals.prototype.toHtml = function(){

  let template= $('#horn-templte').html();
  let html= Mustache.render(template,this);
  $('main').append(html);
  // return html;
};
$.get('data/page-1.json')
    .then(data => {
      data.forEach(value => {
        Animals.all.push(new Animals(value));
let item = new Animals (value);
// console.log(item);
item.toHtml();

      // Animals.renderOption();

      });
      

// .forEach(element => {

//   var newObj = new Animals (element);
//   horns.push(newObj);
//   console.log(horns);
// });
// readJson.forEach(ourNewHornObj=>{
//   var renderObj = ourNewHornObj.toHtml();
//   $("#photo-template").append(renderObj);
// });



// }
// Animals.prototype.render = function () {
//   $('main').append('<div class="image-container"></div>');

//   let $imageContainer = $('div[class="image-container"]');
//   $imageContainer.html($('#photo-template').html());
//   $imageContainer.find('h2').text(this.title);
//   $imageContainer.find('img').attr('src', this.image_url);
//   $imageContainer.find('p').text(this.description);
//   $imageContainer.attr('class', this.keyword);
//   $imageContainer.removeClass('image-container');

// }

// Animals.requestData = () => {

//   $.get('data/page-1.json')
//     .then(data => {
//       data.forEach(value => {
//         Animals.all.push(new Animals(value));


//       });
//       Animals.all.forEach(image => {
//         $('main').append(image.render());

//       })
//       Animals.toHtml();
//     })
//     .then(Animals.filterSelected);
// }

Animals.renderOption = () => {

  let selectedItems = [];

  Animals.all.forEach(image => {
    if (!selectedItems.includes(image.keyword)) {
      selectedItems.push(image.keyword);
      $('select').append(`<option>${image.keyword}</option>`)
    }
  })
}
      Animals.renderOption();


Animals.filterSelected = () => {
  $('select').on('change', function () {
    let selection = $(this).val();
    if (selection !== 'filter by keyword') {
      $('div').hide();
      $('div').removeClass('selected');
      Animals.all.forEach(image => {
        if (image.keyword === selection) {
          $(`div[class="${selection}"]`).addClass('selected').fadeIn();
        }
      });
      $(`option[value="${selection}"]`).fadeIn();
    }
  });

}

Animals.requestData();

    })
