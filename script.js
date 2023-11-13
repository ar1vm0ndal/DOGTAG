var img = document.getElementById('img');
var dog = document.getElementById('dog');
var cat = document.getElementById('cat');

dog.onchange = function(){
  if(dog.checked){
    var json = (function () {
      var json = null;
      $.ajax({
          'async': false,
          'global': false,
          'url': 'https://dog.ceo/api/breeds/image/random',
          'dataType': "json",
          'success': function (data) {
              json = data;
          }
      });
      return json;
    })(); 

    img.src=json.message;
    console.log(img.src);

  }
}
cat.onchange = function(){  
      var json = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'https://api.thecatapi.com/v1/images/search?size=full',
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
        console.log(json);
      })(); 

      img.src=json[0].url;

    }


