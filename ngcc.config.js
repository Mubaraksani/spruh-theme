module.exports = {
    packages: {
      '@ckeditor/ckeditor5-angular': {
        ignorableDeepImportMatchers: [
          /node_modules\//,
        ]
      },
      'ngx-daterangepicker-material': {
        ignorableDeepImportMatchers: [
          /node_modules\//,
        ]
      },
    },
  };