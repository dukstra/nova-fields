const mix = require('laravel-mix')
const NovaExtension = require('laravel-nova-devtool')

mix.extend('nova', new NovaExtension())

mix.setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .vue({ version: 3 })
  .sass('resources/sass/field.scss', 'css')
  .nova('dukstra/nova-fields')
  .version()
