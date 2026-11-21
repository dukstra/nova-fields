# Dukstra Nova Fields

[Documentation](https://nova-fields.netlify.com/)

This fork ports the RSA Pharma-used Nova Fields to Nova 5 and Vue 3.

The idea here is making them more configurable and reusable in package development. These components have a lot of new methods to customize the look and feel, behavior, etc...

Vue components also emit events that propagates up to the chain so are ideal to reuse them in other Nova packages.

Looking forward to see your feedback.

The Nova 5 frontend bundle registers the `Text`, `Number`, `Boolean`, and
`File` fields used by the application. Other upstream field classes remain
outside this port and should not be used until their Nova 5 behavior is tested.

## Install

Run this command in your nova project:
`composer require dukstra/nova-fields`

Development build: install the Composer development dependencies first so the
Nova Devtool package is available, then run `npm ci` and `npm run production`.

Usage:

```php
// use Dukstra\NovaFields\<NAME OF THE FIELD>;
use Dukstra\NovaFields\Boolean;

Boolean::make('Activo', 'active')
                ->yesLabel('Yeah')
                ->noLabel('Nope')
                ->hideLabelInDetail()
                ->dotClasses('some classes')
                ->successClass('bg-warning')
```
