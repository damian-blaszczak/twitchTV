$(document).ready(function() {
  var names = ['freecodecamp','quin69','ogamingsc2','castro_1012','robotcaleb','esl_sc2_pl','noobs2ninjas','frinlet','vihart','septiess'];
 // for (var i = 0; i < names.length; i++) {
  
        // freecodecamp
  $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/streams/' + 'freecodecamp'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data1){

        $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/channels/' + 'freecodecamp'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data2){
      var logo = data2.logo;
      var stream = 'Online!';
      var result = data2.display_name.link('https://www.twitch.tv/' + data2.display_name);
     if(data2.logo == null){
       logo = 'http://vignette1.wikia.nocookie.net/bokunoheroacademia/images/d/d5/NoPicAvailable.png/revision/latest?cb=20160326222204';
      }
      if(data1.stream == null) {
        stream = '<p class="of">Offline</p>';
      } else{
        stream = '<p class="on">Online</p>';
      }

       $('#followerInfo').append("<div class='row'>" + "<div class='col-md-3 text-center' id='pl1'>" + "<img id='img1' src='" + logo + "'>" + "</div>" + "<div class='col-md-3 text-center'>" + "<p class=link'>" + result + "</p>" + "</div>" + "<div class='col-md-3'>" + data2.status + "</div>" + "<div class='col-md-3 text-center'>" + stream + "</div></div>"); 
      $('#img1').on('click', function(e){
    $(this).hide();
     $('#pl1').html('<iframe width="150" height="100" class="play" frameborder="0" allowfullscreen src="http://player.twitch.tv/?channel=' + data2.display_name + '&autoplay=true"></iframe>').show();
});
    }
      });
      
    }
  
    });
        // quin69
  $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/streams/' + 'quin69'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data1){

        $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/channels/' + 'quin69'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data2){
      var logo = data2.logo;
      var stream = 'Online!';
      var result = data2.display_name.link('https://www.twitch.tv/' + data2.display_name);
     if(data2.logo == null){
       logo = 'http://vignette1.wikia.nocookie.net/bokunoheroacademia/images/d/d5/NoPicAvailable.png/revision/latest?cb=20160326222204';
      }
      if(data1.stream == null) {
        stream = '<p class="of">Offline</p>';
      } else{
        stream = '<p class="on">Online</p>';
      }

      $('#followerInfo').append("<div class='row'>" + "<div class='col-md-3 text-center' id='pl2'>" + "<img id='img2' src='" + logo + "'>" + "</div>" + "<div class='col-md-3 text-center'>" + "<p class=link'>" + result + "</p>" + "</div>" + "<div class='col-md-3'>" + data2.status + "</div>" + "<div class='col-md-3 text-center'>" + stream + "</div></div>"); 
      $('#img2').on('click', function(e){
    $(this).hide();
     $('#pl2').html('<iframe width="150" height="100" class="play" frameborder="0" allowfullscreen src="http://player.twitch.tv/?channel=' + data2.display_name + '&autoplay=true"></iframe>').show();
});
    }
      });
      
    }
  
    });
  
        // ogamingsc2
  $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/streams/' + 'ogamingsc2'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data1){

        $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/channels/' + 'ogamingsc2'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data2){
      var logo = data2.logo;
      var stream = 'Online!';
      var result = data2.display_name.link('https://www.twitch.tv/' + data2.display_name);
     if(data2.logo == null){
       logo = 'http://vignette1.wikia.nocookie.net/bokunoheroacademia/images/d/d5/NoPicAvailable.png/revision/latest?cb=20160326222204';
      }
      if(data1.stream == null) {
        stream = '<p class="of">Offline</p>';
      } else{
        stream = '<p class="on">Online</p>';
      }

       $('#followerInfo').append("<div class='row'>" + "<div class='col-md-3 text-center' id='pl3'>" + "<img id='img3' src='" + logo + "'>" + "</div>" + "<div class='col-md-3 text-center'>" + "<p class=link'>" + result + "</p>" + "</div>" + "<div class='col-md-3'>" + data2.status + "</div>" + "<div class='col-md-3 text-center'>" + stream + "</div></div>"); 
      $('#img3').on('click', function(e){
    $(this).hide();
     $('#pl3').html('<iframe width="150" height="100" class="play" frameborder="0" allowfullscreen src="http://player.twitch.tv/?channel=' + data2.display_name + '&autoplay=true"></iframe>').show();
});
    }
      });
      
    }
  
    });
  
        // castro_1012
  $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/streams/' + 'castro_1012'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data1){

        $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/channels/' + 'castro_1012'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data2){
      console.log(data2)
      var logo = data2.logo;
      var stream = 'Online!';
      var result = data2.display_name.link('https://www.twitch.tv/' + data2.display_name);
     if(data2.logo == null){
       logo = 'http://vignette1.wikia.nocookie.net/bokunoheroacademia/images/d/d5/NoPicAvailable.png/revision/latest?cb=20160326222204';
      }
      if(data1.stream == null) {
        stream = '<p class="of">Offline</p>';
      } else{
        stream = '<p class="on">Online</p>';
      }

       $('#followerInfo').append("<div class='row'>" + "<div class='col-md-3 text-center' id='pl4'>" + "<img id='img4' src='" + logo + "'>" + "</div>" + "<div class='col-md-3 text-center'>" + "<p class=link'>" + result + "</p>" + "</div>" + "<div class='col-md-3'>" + data2.status + "</div>" + "<div class='col-md-3 text-center'>" + stream + "</div></div>"); 
      $('#img4').on('click', function(e){
    $(this).hide();
     $('#pl4').html('<iframe width="150" height="100" class="play" frameborder="0" allowfullscreen src="http://player.twitch.tv/?channel=' + data2.display_name + '&autoplay=true"></iframe>').show();
});
    }
      });
      
    }
  
    });
  
        // robotcaleb
  $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/streams/' + 'robotcaleb'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data1){

        $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/channels/' + 'robotcaleb'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data2){
      var logo = data2.logo;
      var stream = 'Online!';
      var result = data2.display_name.link('https://www.twitch.tv/' + data2.display_name);
     if(data2.logo == null){
       logo = 'http://vignette1.wikia.nocookie.net/bokunoheroacademia/images/d/d5/NoPicAvailable.png/revision/latest?cb=20160326222204';
      }
      if(data1.stream == null) {
        stream = '<p class="of">Offline</p>';
      } else{
        stream = '<p class="on">Online</p>';
      }

      $('#followerInfo').append("<div class='row'>" + "<div class='col-md-3 text-center' id='pl5'>" + "<img id='img5' src='" + logo + "'>" + "</div>" + "<div class='col-md-3 text-center'>" + "<p class=link'>" + result + "</p>" + "</div>" + "<div class='col-md-3'>" + data2.status + "</div>" + "<div class='col-md-3 text-center'>" + stream + "</div></div>"); 
      $('#img5').on('click', function(e){
    $(this).hide();
     $('#pl5').html('<iframe width="150" height="100" class="play" frameborder="0" allowfullscreen src="http://player.twitch.tv/?channel=' + data2.display_name + '&autoplay=true"></iframe>').show();
});
    }
      });
      
    }
  
    });
  
        // esl_sc2_pl
  $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/streams/' + 'esl_sc2_pl'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data1){

        $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/channels/' + 'esl_sc2_pl'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data2){
      var logo = data2.logo;
      var stream = 'Online!';
      var result = data2.display_name.link('https://www.twitch.tv/' + data2.display_name);
     if(data2.logo == null){
       logo = 'http://vignette1.wikia.nocookie.net/bokunoheroacademia/images/d/d5/NoPicAvailable.png/revision/latest?cb=20160326222204';
      }
      if(data1.stream == null) {
        stream = '<p class="of">Offline</p>';
      } else{
        stream = '<p class="on">Online</p>';
      }

      $('#followerInfo').append("<div class='row'>" + "<div class='col-md-3 text-center' id='pl6'>" + "<img id='img6' src='" + logo + "'>" + "</div>" + "<div class='col-md-3 text-center'>" + "<p class=link'>" + result + "</p>" + "</div>" + "<div class='col-md-3'>" + data2.status + "</div>" + "<div class='col-md-3 text-center'>" + stream + "</div></div>"); 
      $('#img6').on('click', function(e){
    $(this).hide();
     $('#pl6').html('<iframe width="150" height="100" class="play" frameborder="0" allowfullscreen src="http://player.twitch.tv/?channel=' + data2.display_name + '&autoplay=true"></iframe>').show();
});
    }
      });
      
    }
  
    });
  
        // noobs2ninjas
  $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/streams/' + 'noobs2ninjas'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data1){

        $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/channels/' + 'noobs2ninjas'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data2){
      var logo = data2.logo;
      var stream = 'Online!';
      var result = data2.display_name.link('https://www.twitch.tv/' + data2.display_name);
     if(data2.logo == null){
       logo = 'http://vignette1.wikia.nocookie.net/bokunoheroacademia/images/d/d5/NoPicAvailable.png/revision/latest?cb=20160326222204';
      }
      if(data1.stream == null) {
        stream = '<p class="of">Offline</p>';
      } else{
        stream = '<p class="on">Online</p>';
      }

       $('#followerInfo').append("<div class='row'>" + "<div class='col-md-3 text-center' id='pl7'>" + "<img id='img7' src='" + logo + "'>" + "</div>" + "<div class='col-md-3 text-center'>" + "<p class=link'>" + result + "</p>" + "</div>" + "<div class='col-md-3'>" + data2.status + "</div>" + "<div class='col-md-3 text-center'>" + stream + "</div></div>"); 
      $('#img7').on('click', function(e){
    $(this).hide();
     $('#pl7').html('<iframe width="150" height="100" class="play" frameborder="0" allowfullscreen src="http://player.twitch.tv/?channel=' + data2.display_name + '&autoplay=true"></iframe>').show();
});
    }
      });
      
    }
  
    });
  
        // frinlet
  $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/streams/' + 'frinlet'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data1){

        $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/channels/' + 'frinlet'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data2){
      var logo = data2.logo;
      var stream = 'Online!';
      var result = data2.display_name.link('https://www.twitch.tv/' + data2.display_name);
     if(data2.logo == null){
       logo = 'http://vignette1.wikia.nocookie.net/bokunoheroacademia/images/d/d5/NoPicAvailable.png/revision/latest?cb=20160326222204';
      }
      if(data1.stream == null) {
        stream = '<p class="of">Offline</p>';
      } else{
        stream = '<p class="on">Online</p>';
      }

     $('#followerInfo').append("<div class='row'>" + "<div class='col-md-3 text-center' id='pl8'>" + "<img id='img8' src='" + logo + "'>" + "</div>" + "<div class='col-md-3 text-center'>" + "<p class=link'>" + result + "</p>" + "</div>" + "<div class='col-md-3'>" + data2.status + "</div>" + "<div class='col-md-3 text-center'>" + stream + "</div></div>"); 
      $('#img8').on('click', function(e){
    $(this).hide();
     $('#pl8').html('<iframe width="150" height="100" class="play" frameborder="0" allowfullscreen src="http://player.twitch.tv/?channel=' + data2.display_name + '&autoplay=true"></iframe>').show();
});
    }
      });
      
    }
  
    });
  
        // vihart
  $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/streams/' + 'vihart'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data1){

        $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/channels/' + 'vihart'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data2){
      var logo = data2.logo;
      var stream = 'Online!';
      var result = data2.display_name.link('https://www.twitch.tv/' + data2.display_name);
     if(data2.logo == null){
       logo = 'http://vignette1.wikia.nocookie.net/bokunoheroacademia/images/d/d5/NoPicAvailable.png/revision/latest?cb=20160326222204';
      }
      if(data1.stream == null) {
        stream = '<p class="of">Offline</p>';
      } else{
        stream = '<p class="on">Online</p>';
      }

      $('#followerInfo').append("<div class='row'>" + "<div class='col-md-3 text-center' id='pl9'>" + "<img id='img9' src='" + logo + "'>" + "</div>" + "<div class='col-md-3 text-center'>" + "<p class=link'>" + result + "</p>" + "</div>" + "<div class='col-md-3'>" + data2.status + "</div>" + "<div class='col-md-3 text-center'>" + stream + "</div></div>"); 
      $('#img9').on('click', function(e){
    $(this).hide();
     $('#pl9').html('<iframe width="150" height="100" class="play" frameborder="0" allowfullscreen src="http://player.twitch.tv/?channel=' + data2.display_name + '&autoplay=true"></iframe>').show();
});
    }
      });
      
    }
  
    });
  
        // septiess
  $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/streams/' + 'septiess'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data1){

        $.ajax({
    type:"GET",
    url: ('https://api.twitch.tv/kraken/channels/' + 'septiess'),
    headers: {
      'Client-ID': 'etmwe2dg7uez5hfqmblrirte90t6u6'
    },
    success: function(data2){
      var logo = data2.logo;
      var stream = 'Online!';
      var result = data2.display_name.link('https://www.twitch.tv/' + data2.display_name);
     if(data2.logo == null){
       logo = 'http://vignette1.wikia.nocookie.net/bokunoheroacademia/images/d/d5/NoPicAvailable.png/revision/latest?cb=20160326222204';
      }
      if(data1.stream == null) {
        stream = '<p class="of">Offline</p>';
      } else{
        stream = '<p class="on">Online</p>';
      }

      $('#followerInfo').append("<div class='row'>" + "<div class='col-md-3 text-center' id='pl10'>" + "<img id='img10' src='" + logo + "'>" + "</div>" + "<div class='col-md-3 text-center'>" + "<p class=link'>" + result + "</p>" + "</div>" + "<div class='col-md-3'>" + data2.status + "</div>" + "<div class='col-md-3 text-center'>" + stream + "</div></div>"); 
      $('#img10').on('click', function(e){
    $(this).hide();
     $('#pl10').html('<iframe width="150" height="100" class="play" frameborder="0" allowfullscreen src="http://player.twitch.tv/?channel=' + data2.display_name + '&autoplay=true"></iframe>').show();
});
    }
      });
      
    }

    });

});
