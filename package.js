
Package.describe({
    name: 'dldktmal:jli',
    version: '0.0.7',
    // Brief, one-line summary of the package.
    summary: 'jli',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/baeminsik/jli.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});


Package.onUse(function(api) {
    api.versionsFrom('1.4.1.2');
    api.export('jli');
    api.addFiles([
        'load-image.js'
        ,'load-image-meta.js'
        ,'load-image-exif.js'
        ,'load-image-exif-map.js'
        ,'load-image-orientation.js'
        ,'integrations.js'
    ], 'client');
});
