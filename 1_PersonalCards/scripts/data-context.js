define(
    'app/data-context',
    ['jquery'],
    function($){
    	
    	function getPersons(itemsCount){
    		var url = "http://api.randomuser.me/?results=" + itemsCount;
	    	return $.getJSON(url);
	    }

		return {
            getPersons: getPersons
        };
    }
);