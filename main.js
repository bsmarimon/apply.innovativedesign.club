$( document ).ready(function() {

    // credit for the secret message JavaScript to CS161 course
    // http://www-inst.eecs.berkeley.edu/~cs161/sp16/

    var e;

    a = 17;
    b = 38;
    c = 71;

    b = (b + a*a) % 26;
    c = (c + b*b) % 26;
    a = (a + c*c) % 26;
    b = (b + a*a) % 26;
    c = (c + b*b) % 26;
    a = (a + c*c) % 26;
    a = String.fromCharCode(65+a);
    b = String.fromCharCode(65+b);
    c = String.fromCharCode(65+c);
    var keys    = [];
    var d = '38,38,40,40,37,39,37,39,66,65';

    $(document).keydown(
      function(e) {
        keys.push( e.keyCode );
        if ( keys.toString().indexOf( d ) >= 0 ){
            $('div#secret').fadeIn(200);
            $('span#secret-password').text(function(i,t) {
            return t + a + b + c;
          });
        keys = [];
        }
      }
    );
});
