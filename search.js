const searchInput = $('#search');
const searchButton = $('#search-button');
const randomButton = $('#search-random');

searchButton.click(search);

function search() {
  $.ajax('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srwhat=text&srsearch=' + searchInput.val(), {
    type: 'GET',
    dataType: 'jsonp',
    success: function(response) {
      var searchArr = response.query.search;
      displayOutput(searchArr);
    },

    error: function(errorMessage) {
            alert("Failed to load");
    }
  });
}

function displayOutput(array) {
  var htmlList = '<ul>'
   $.each(array, function(index, item) {
    console.log(item.title);
        let url = 'https://en.wikipedia.org/w/index.php?title="' + item.title;
        htmlList += '<li>'
        htmlList +=  "<a href='" + url + "' target='_blank'>" +
                      '<h2>' + item.title + '</h2></a>'
        htmlList +=  "<p>" + item.snippet + "</p>"
        htmlList += '</li>'
      });
  htmlList += '</ul>';
  $('.list').html(htmlList);
}

searchInput.on('keyup',search);


//Random
randomButton.click(function() {
  window.open('https://en.wikipedia.org/wiki/Special:Random');
})
