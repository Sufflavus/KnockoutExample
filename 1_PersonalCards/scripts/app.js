requirejs.config({    
    baseUrl: 'scripts/libs',    
    paths: {
		jquery: 'jquery-2.1.4.min',
		knockout: 'knockout-3.3.0',
        viewModels: '../ViewModels',
        app: '../',
    },
	shim: {
        'jquery': {
            exports: '$'
        },	
        'knockout': {
            exports: 'ko'
        }
	}
});
//https://www.airpair.com/jasmine/posts/javascriptintegrating-jasmine-with-requirejs-amd
require(['viewModels/page-view-model', 'jquery', 'knockout'], function(viewModel, $, ko) {
    $(function() {
        var page = viewModel.init();
        ko.applyBindings(page);    
    });    
});
