define(
    'app/data-context',
    ['jquery'],
    function($){
    	
    	function getPersons(itemsCount){
            var people = [];
            for(var i = 0; i < itemsCount; i++){
                people.push(initPerson());
            }
            var deferred = $.Deferred();
    		deferred.resolve({ results: people });
	    	return deferred.promise();
	    }

        function initPerson(){
            return {
                "user": {
                    "gender": "female",
                    "name": {
                        "title": "miss",
                        "first": "vicky",
                        "last": "fields"
                    },
                    "location": {
                        "street": "7013 the crescent",
                        "city": "coventry",
                        "state": "county tyrone",
                        "zip": "IO3 6TU"
                    },
                    "email": "vicky.fields@example.com",
                    "username": createGuid(),
                    "password": "sabbath",
                    "salt": "8IvcFVli",
                    "md5": "da60d48a60196ca18564d106a67f6fb2",
                    "sha1": "8a057f99eeb7eface106a6c0598ef0b4d1a6b6aa",
                    "sha256": "a492af73f6912dd79dc3f11777c2ce7a9f90d424c9b1c9b19bbc28ece083d79e",
                    "registered": 987799005,
                    "dob": 1304971744,
                    "phone": "017683 80990",
                    "cell": "0753-053-419",
                    "NINO": "EY 45 75 00 T",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/59.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/59.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
                    }
                }
            };

            function createGuid() {     
                var s4 = generateSymbolsQuartet; 
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();      
            }

            function generateSymbolsQuartet() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
        }

		return {
            getPersons: getPersons
        };
    }
);