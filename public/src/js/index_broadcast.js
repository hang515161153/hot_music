/*****************当鼠标在图片上时让图片变大效果*******************/
$(function(){
 $('.item_ul li .songs_img img').mouseover(function(){
   $(this).animate({height:"295px",width:"295px",left:"-7px",top:"-7px"},300);
   $(this).parents('i').next().css('background','#31c27c');
   $(this).parents('i').next().next().show(100);
 });
  $('.item_ul li .songs_img img').mouseout(function(){
    $(this).animate({height:"280px",width:"280px",left:"0px",top:"0px"},300);
    $(this).parents('i').next().css('background','#222');
    $(this).parents('i').next().next().hide(100);
  });
  
});

/*******************动态创建播放图标**********************/
$(function(){
  var $img_play = $("<img class='play' src='./images/play.png'/>");
  $('.item_ul li').append($img_play);
});