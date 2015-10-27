define(
    "viewModels/page-view-model",
    ["jquery", "knockout", "app/data-context"],
    function($, ko, context){
    	
		function PageViewModel(){
			var persons = ko.observableArray();			
			var defaultLoadItemsCount = 3;

			initList();

			function initList(){
				loadMore();
			}

			function removePerson(person){	
				var index = ko.utils.arrayIndexOf(persons(), person);
				if (index > 0) {
				    persons.splice(index, 1);
				}
				else if (index === 0) {
				    persons.shift();
				}						
			}

			function loadMore(){				
	            context.getPersons(defaultLoadItemsCount)
	            	.then(function (data) {
	                    updatePeopleList(data);
	                })
	                .fail(function() {
	                    alert("Error occured");
	                });
			}

			function updatePeopleList(data){
	            var resultsData = data.results;            
	            var results = resultsData.map(createPersonViewModel);
	            ko.utils.arrayPushAll(persons, results);			            
	        }

	        function createPersonViewModel(model){
	            return new PersonViewModel(model);
	        }

	        return {
	        	persons: persons,
	        	removePerson: removePerson,
	        	loadMore: loadMore
	        }
		}

		function PersonViewModel(model){
			var user = model.user;		            
	        var title = model.user.name.title;
	        var userName = user.username;		            
	        var isExtraShown = ko.observable(false);

	        function toggleExtraInformation(){		            	
	        	isExtraShown(!isExtraShown());
	        }
	        
	        return {
	        	picture: user.picture.medium,
	            userName: userName,
	            title: title,		                
	            name: model.user.name.first,
	            isExtraShown: isExtraShown,
	            toggleExtraInformation: toggleExtraInformation
	        };
		}

		function init(){
			return new PageViewModel();	    	
		}

        return {
            init: init
        };
    }
);