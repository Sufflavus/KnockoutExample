define(
	"spec/page-view-model-spec",
	['viewModels/page-view-model', "knockout"], 
	function(viewModel, ko){	
		var page;
		var defaultLoadItemsCount = 3;
		
		describe("page-view-model", function(){
			beforeEach(function(done) {
			    setTimeout(function() {		
			    	page = viewModel.init();	      	
			      	done();
			    }, 100);
			});

			it("correct initial state", function(done) {	

				expect(ko.isObservable(page.persons)).toBe(true);		
				expect(page.persons().length).toEqual(defaultLoadItemsCount);
				
				page.persons().forEach(function(person){
					expect(person.picture).toBeDefined();					
					expect(person.userName).toBeDefined();
					expect(person.title).toBeDefined();
					expect(person.name).toBeDefined();
					expect(ko.isObservable(person.isExtraShown)).toBe(true);
					expect(person.isExtraShown()).toBe(false);
				});	

				done();
		    });		 

		    it("loadMore updates person's list", function(done) {		
		    	var initPersonsCount = page.persons().length;

				page.loadMore();

				expect(page.persons().length).toEqual(initPersonsCount * 2);							
				done();
		    });	 	


		    it("removePerson removes correct item", function(done) {		
		    	var initPersonsCount = page.persons().length;
		    	var itemForRemove = page.persons()[0];

				page.removePerson(itemForRemove);
				
				expect(page.persons().length).toEqual(initPersonsCount - 1);							

				page.persons().forEach(function(person){					
					expect(person.userName).not.toEqual(itemForRemove.userName);					
				});	

				done();
		    });	

		    it("person's toggleExtraInformation function works correct", function(done) {		
				var anyPerson = page.persons()[0];

				anyPerson.toggleExtraInformation();
				expect(anyPerson.isExtraShown()).toBe(true);	

				anyPerson.toggleExtraInformation();
				expect(anyPerson.isExtraShown()).toBe(false);	

				done();
		    });	 
	});  
});