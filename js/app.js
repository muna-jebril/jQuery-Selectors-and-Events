'use strict';
//  $(document).ready(function(){



//   });

Animals.all=[];
function Animals(data) {
    this.image_url = data.image_url;
    this.title = data.title;
    this.description = data.description;
    this.keyword = data.keyword;
    this.horns = data.horns;
}
$.get('data/page-1.json')
    .then(data => {
        console.log(data);
        data.forEach((value, index) => {

            let animals = new Animals(value);
           

            animals.render();


        });
    });

Animals.prototype.render = function () {
    // let animalsClone = '';
 let   animalsClone = $('.photo-template').clone();
    // $("section:first").empty();

    //   console.log('dddddddddd',animalsClone.html());

    //   $("h2").append(this.title);
    //   $("img.src").append(this.image_url);

    //   $("h2").append(this.description);
    animalsClone.find('h2').text(this.title);
    //    animalsClone.find('h2').text(this.title);
    // $("#my_image").attr("src","second.jpg");
       animalsClone.find('img').attr("src", this.image_url);

    //    console.log (img);
    animalsClone.find('p').text(this.description);
    animalsClone.removeClass('photo-template');

    $('main').append(animalsClone);

    




}

Animals.Filters = () => {
    let selectedItems = [];
  
    data.all.forEach(value => {
      if(!selectedItems.includes(value.keyword)) {
        selectedItems.push(Animals.keyword);
        $('select').append(`<option>${value.keyword}</option>`)
      }
    })
  }