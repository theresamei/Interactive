// var SpecialRedirectURL = ['night.html','morning.html','day.html','eve.html'];
var SpecialRedirectURL = [
   'closed.html',
   'claesoldenburg.html'
];
                   
function specRedirect() {
  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  if (currentHour < 10) { currentHour = '0'+currentHour; }
  var currentMins = currentTime.getMinutes();
  if (currentMins < 10) { currentMins = '0'+currentMins; }

  var now = currentHour+':'+currentMins;
  var Hour = 0;
  if ( (now >= '13:00') && (currentHour < '18:00') ) { Hour = 1; }
//  alert(Hour+' goes to: '+SpecialRedirectURL[Hour]);
  window.location.href = SpecialRedirectURL[Hour];
}  
window.onload = function() {
  specRedirect(); 
}
