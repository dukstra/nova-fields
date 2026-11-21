<?php

namespace Dukstra\NovaFields;

class Computed extends Text
{
    use Computable;

    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'nova-fields-computed';
}
