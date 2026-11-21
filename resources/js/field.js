import TextIndexField from './components/text/IndexField'
import TextDetailField from './components/text/DetailField'
import TextFormField from './components/text/FormField'
import BooleanIndexField from './components/boolean/IndexField'
import BooleanDetailField from './components/boolean/DetailField'
import BooleanFormField from './components/boolean/FormField'
import FileIndexField from './components/file/IndexField'
import FileDetailField from './components/file/DetailField'
import FileFormField from './components/file/FormField'
import DefaultField from './components/DefaultField'
import PanelItem from './components/PanelItem'

Nova.booting(app => {
  app.component('r64-default-field', DefaultField)
  app.component('r64-panel-item', PanelItem)

  app.component('index-nova-fields-text', TextIndexField)
  app.component('detail-nova-fields-text', TextDetailField)
  app.component('form-nova-fields-text', TextFormField)

  app.component('index-nova-fields-boolean', BooleanIndexField)
  app.component('detail-nova-fields-boolean', BooleanDetailField)
  app.component('form-nova-fields-boolean', BooleanFormField)

  app.component('index-nova-fields-file', FileIndexField)
  app.component('detail-nova-fields-file', FileDetailField)
  app.component('form-nova-fields-file', FileFormField)
})
