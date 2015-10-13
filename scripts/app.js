requirejs.config({
    baseUrl: "scripts",
    paths: {
		jquery: 'jquery-2.1.4.min',
		knockout: 'knockout-3.3.0'
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
requirejs(['page-view-model', 'jquery', 'knockout'], function(page) {
    page.bindPage();
});
