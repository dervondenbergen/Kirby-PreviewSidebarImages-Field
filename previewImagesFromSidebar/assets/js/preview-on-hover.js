function previewImagesFromSidebar () {

  var sidebar_a = document.querySelectorAll('body .sidebar-list>li>a');
  var hash = window.location.hash;
  hash = hash.split('/');
  hash = hash.splice(3);
  hash.pop();
  var img_location = '/content/' + hash.join('/') + '/';

  Array.prototype.forEach.call(sidebar_a, function (a) {

    var data = a.dataset;
    if (data.text) {

      var text = data.text;
      var img = text.match(/\(image: (.*)\)/);

      if (img) {
        a.classList.add('fileuploadpreview');
        addStyle(img[1]);
      }

    }

  });

  function addStyle (name) {

    var s = document.createElement('style');
    s.innerHTML =  '.fileuploadpreview[data-helper="' + name + '"]::after {';
    s.innerHTML += '  background-image: url(' + img_location + name + ');';
    s.innerHTML += '}'

    document.body.appendChild(s);

  }

}
