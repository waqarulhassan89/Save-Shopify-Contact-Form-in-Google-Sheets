var $form = $('form#contact_form'),
    url = 'https://script.google.com/macros/s/abcdefghijklmnopqrstuvwxyz1234567890/exec'

$('#contact_form').on('submit', function(e) { // updated this so it only submit data when form is submitted successfully. Previously we were triggering this even when user click on submit button.
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
