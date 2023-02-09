import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "subTitlePipe"
})
export class SubTitlePipe implements PipeTransform {

    public transform(value: string | null | undefined): string {
        if (value === null || value === undefined) {
            return "";
        }
        else {
            const split: string[] = value.split(" ");
            let ellipsis: string = "";
            if (split.length >= 3) {
                split.splice(3);
                ellipsis = " ...";
            }
            return split.join(" ") + ellipsis;
        }
    }
}
