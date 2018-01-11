function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer='';
  var today=new Date();
  var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   timer += '<div class="block_1__timer__item"><div class="block_1__timer__number">'+day+' :</div><div class="block_1__timer__caption"><b class="ru">дней</b><b class="en">days</b></div></div>';
   timer += '<div class="block_1__timer__item"><div class="block_1__timer__number">'+hour+' :</div><div class="block_1__timer__caption"><b class="ru">часов</b><b class="en">hours</b></div></div>';
   timer += '<div class="block_1__timer__item"><div class="block_1__timer__number">'+this.addZero(min)+'</div><div class="block_1__timer__caption"><b class="ru">минут</b><b class="en">minutes</b></div></div>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){

 // Set countdown limit
 var tl = new Date('2018/02/25 00:00:00');

 // You can add time's up message here
 var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
 timer.countDown();
}
window.onload=function(){
 CDT();
}