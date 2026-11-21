<template>
  <r64-panel-item
    :hide-field="hideField"
    :field="field"
    :hide-label="hideLabelInDetail"
    :label-classes="panelLabelClasses"
    :field-classes="panelFieldClasses"
    :wrapper-classes="panelWrapperClasses"
  >
    <template #value>
      <p class="text-90">
        <span :class="[dotClasses, statusClass]" />
        <span v-if="!field.hideBooleanLabel">{{ label }}</span>
      </p>
    </template>
  </r64-panel-item>
</template>

<script>
import R64Field from '../../mixins/R64Field'
import Classes from './Classes'

export default {
  mixins: [Classes, R64Field],

  props: ['resource', 'resourceName', 'resourceId', 'field'],

  computed: {
    label() {
      return this.field.value == true
        ? this.field.yesLabel || this.__('Yes')
        : this.field.noLabel || this.__('No')
    }
  }
}
</script>
