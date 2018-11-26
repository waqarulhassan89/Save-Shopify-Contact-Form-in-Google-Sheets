var $form = $('form#contact_form'),
    url = 'https://script.google.com/macros/s/abcdefghijklmnopqrstuvwxyz1234567890/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault(); // delete this is you want to send data to admin email address.
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
