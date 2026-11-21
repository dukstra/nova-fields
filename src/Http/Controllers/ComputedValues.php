<?php

namespace Dukstra\NovaFields\Http\Controllers;

class ComputedValues
{
    protected $values;

    public function __construct($values)
    {
        $this->values = (object) $values;
    }

    public function __get($key): mixed
    {
        return property_exists($this->values, $key) ? $this->values->$key : null;
    }
}
