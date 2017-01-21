
	function hideshowPanel(hundler,targetComponentId){
 var coponentToShow=hundler.getAttribute('data-target');
$('#' + targetComponentId).children().hide( );
$('#' + coponentToShow).fadeIn( "slow" );
}
function hideshowPanelResult(hundler,targetComponentId){
     $('#adresse').removeClass('has-error');
    if($('#adresse').find('.tt-input').val() !== "") {
        var coponentToShow = hundler.getAttribute('data-target');
        $('#' + targetComponentId).children().hide( );
        $('#' + coponentToShow).fadeIn("slow");
    }
    else 
    {
        $('#adresse').addClass('has-error');
    }

}
var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};


var medecin = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
var specialite = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
var adresse = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];



jQuery(document).ready(function($) {

  $(".close-popUp-btn").on('click', function(){
  	   $('#' + $(this)[0].getAttribute('data-hide')).hide(  );
  	 $('#' + $(this)[0].getAttribute('data-show')).fadeIn( "slow" );
  })
  
  var my_friends = [
     {name: "Thomas MOTTAT", picture: "assets/onepage2/img/avatar/1.png" , speciality:"Généraliste"}
    ,{name: "DR. Denis CHEVRELEY", picture: "assets/onepage2/img/avatar/1.png" , speciality:"Dentiste"},
	{name: "DR. Monique DUNANT", picture: "assets/onepage2/img/avatar/1.png" , speciality:"Généraliste"}
    ,{name: "DR. Jean FAVRE", picture: "assets/onepage2/img/avatar/1.png" , speciality:"Dentiste"},
	{name: "DR. Jacqueline DUPONT", picture: "assets/onepage2/img/avatar/1.png" , speciality:"Généraliste"}
    ,{name: "DR. Thomas MOTTAT", picture: "assets/onepage2/img/avatar/1.png" , speciality:"Dentiste"}
];

var friends = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: my_friends
});
friends.initialize();
$('#medecin .typeahead').typeahead(
    {
        hint: true,
        highlight: true,
        minLength: 1,
    },
    {
        name: 'friends',
        displayKey: 'name',
        source: friends.ttAdapter(),
        templates: {
            empty: 'not found', //optional
            suggestion: function(el){
				return '<div class="autocomplete-result col-md-12"> <div class="autocomplete-img col-md-2 no-padding"><img src="'+el.picture+'" /></div> <div class="autocomplete-text col-md-10"> <span class="autocomplete-name">'+el.name +' </span><span class="autocomplete-speciality"> '+el.speciality +'</span></div> </div>'
				}
        }
    }
);
  
  $('#specialite .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'specialite',
  source: substringMatcher(specialite)
});
  $('#adresse .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'adresse',
  source: substringMatcher(adresse)
});

$.datetimepicker.setLocale('en');
$('#datetimepicker').datetimepicker({value:'', format: $("#datetimepicker_format_value").val(),step: 15});








    })