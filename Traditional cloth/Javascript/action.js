$('#button-right').click(function() {
    $('.slider').children().addClass('left').removeClass('right').first().appendTo('.slider');
  });
  
  $('#button-left').click(function() {
    $('.slider').children().addClass('right').removeClass('left').last().prependTo('.slider');
  });


  let products=[
    {id:1,
        name:'serun',
        image:'normalessence.jpg',
        price: 5000
       
    },
   
    {id:2,
        name:'serun',
        image:'drytoner.jpg',
        price: 5000
       
    },
    {id:3,
        name:'serun',
        image:'drysleepmask.jpg',
        price: 5000
       
    },
    {id:4,
        name:'serun',
        image:'sensitivemotur.jpg',
        price: 5000
       
    },
    {id:5,
        name:'serun',
        image:'normalessence.jpg',
        price: 5000
       
    },
    {id:6,
        name:'serun',
        image:'normalessence.jpg',
        price: 5000
       
    },
   

];



