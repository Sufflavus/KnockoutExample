requirejs.config({    
    baseUrl: '../scripts/libs',    
    paths: {
		jquery: 'jquery-2.1.4.min',
		knockout: 'knockout-3.3.0',
        viewModels: '../ViewModels',
        spec: '../../tests/spec',
        app: '../../tests',
        "app/data-context": "../../tests/data-context-test",
        'jasmine': ['../../tests/lib/jasmine-2.3.4/jasmine'],
        'jasmine-html': ['../../tests/lib/jasmine-2.3.4/jasmine-html'],
        'jasmine-boot': ['../../tests/lib/jasmine-2.3.4/boot']
    },
	shim: {
        'jquery': {
            exports: '$'
        },	
        'knockout': {
            exports: 'ko'
        },
        'jasmine-html': {
            deps : ['jasmine']
        },
        'jasmine-boot': {
            deps : ['jasmine', 'jasmine-html']
        }
	}
});

//https://www.airpair.com/jasmine/posts/javascriptintegrating-jasmine-with-requirejs-amd
require(['jasmine-boot'], function () {
  require(['spec/page-view-model-spec'], function(){
    //trigger Jasmine
    window.onload();
  })
});
