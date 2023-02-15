import { ISelectableOption } from "./../../models/selectable-option";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import * as _ from "underscore";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "aac-option-chooser",
  templateUrl: "./option-chooser.component.html",
  styleUrls: ["./option-chooser.component.less"]
})
export class OptionChooserComponent<T> implements OnInit {
  @Input() isMultiselect: boolean = false;
  @Input() options: ISelectableOption<T>[] = [];
  @Input() value: T[] | T | null = null;

  @Output() valueChange: EventEmitter<T[] | T | null> = new EventEmitter<T[] | T | null>();

  public selectedOptions: T[] = [];
  public selectedOption: T | null = null;
  public uuid: string = "";

  constructor() {
    this.uuid = uuidv4();
  }

  public ngOnInit(): void {
    if (this.isMultiselect) {
      this.selectedOptions = (this.value as T[])
        .map((selectedValue: T) => this.getSelectedOptionByValue(selectedValue))
        .filter((resultOption: T | null) => resultOption !== null) as T[];
    }
    else {
      if (typeof this.value === "object") {
        if (this.value !== null) {
          this.selectedOption = this.getSelectedOptionByValue(this.value as T);
        }
      }
      else {
        this.selectedOption = this.value as T;
      }
    }
  }

  public onSelectedOptionChange(event: Event, option: ISelectableOption<T>): void {
    if (this.isMultiselect) {
      const isSelected: boolean = (event.target as HTMLInputElement).checked;
      const selectedOptionIndex: number = _.findIndex(this.selectedOptions, (selectedOption: T) => selectedOption === option.value);
      if (isSelected) {
        if (selectedOptionIndex === -1) {
          this.selectedOptions.push(option.value);
        }
      }
      else {
        if (selectedOptionIndex > -1) {
          this.selectedOptions.splice(selectedOptionIndex, 1);
        }
      }

      this.valueChange.emit(this.selectedOptions);
    }
    else {
      this.valueChange.emit(this.selectedOption);
    }
  }

  public isOptionSelected(option: ISelectableOption<T>): boolean {
    return _.findIndex(this.selectedOptions, (selectedOption: T) => selectedOption === option.value) > -1;
  }

  private getSelectedOptionByValue(value: T): T | null {
    for (let index = 0; index < this.options.length; index++) {
      const checkedOption: ISelectableOption<T> = this.options[index];

      let different: boolean = false;
      for (const property in value) {
        if (value[property] !== checkedOption.value[property]) {
          different = true;
          break;
        }
      }

      if (!different) {
        return checkedOption.value;
      }
    }

    return null;
  }
}
