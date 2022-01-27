window.onload = (function() {
  jQuery('#block-block-166').hide();
  jQuery('.field--name-field-thumbnail').show();

  if (jQuery('.field--name-field-hubspot-form').length > 0) {
    jQuery('.field--name-field-api-stream').hide();
  }

  function getUrlVars() {
    var vars = [],
      hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }

  var submitString = getUrlVars()["fs"];
  if (submitString == 'y') {
    jQuery('.field--name-field-api-stream').show();
    jQuery('.field--name-field-thumbnail').hide();
    jQuery('.field--name-field-hubspot-form').hide();
    jQuery('#block-sharethis-sharethis-block').hide();
    jQuery('.field--name-label').hide();
    jQuery('#block-block-166').show();
  }
});
