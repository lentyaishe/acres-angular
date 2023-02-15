import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OptionChooserComponent } from './components/option-chooser/option-chooser.component';

@NgModule({
  declarations: [
    OptionChooserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    OptionChooserComponent
  ]
})
export class CoreModule { }
