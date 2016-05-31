/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app':                        'src/client/app', // 'dist',
        'rxjs':                       'node_modules/rxjs',
        '@angular':                   'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'ng2-pagination':             'node_modules/ng2-pagination',
        'lodash':                     'node_modules/lodash',
        'chartjs':                    'node_modules/chart.js/dist',
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
        'ng2-pagination':   {main: 'index.js', defaultExtension: 'js'},
        'lodash':           {main: 'lodash.js', defaultExtension: 'js'},
        'chartjs':          {main: 'Chart.min.js', defaultExtension: 'js'}
    };
    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade'
    ];
    
    // Add package entries for angular packages
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' }
    });
    
    var config = {
        map: map,
        packages: packages
    };
    
    //filterSystemConfig - index.html's change to modify config. before we register it.
    if(global.filterSystemConfig) { global.filterSystemConfig(config); }
    
    System.config(config);
    
})(this);
