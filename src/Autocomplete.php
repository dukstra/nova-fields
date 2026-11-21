<?php

namespace Dukstra\NovaFields;

class Autocomplete extends Select
{
    use Computable;

    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'nova-fields-autocomplete';
}
