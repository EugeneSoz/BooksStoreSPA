import { FormGroup } from '@angular/forms';
import { CustomFormControl } from './customFormControl';


export class BaseFormComponent<TFormGroup extends FormGroup> {

    form: TFormGroup = null;

    getErrors(property: string): Array<string> {
        if (this.form.controls[property].dirty && this.form.controls[property].invalid) {
            return (this.form.controls[property] as CustomFormControl).getValidationMessages();
        }
        else {
            return null;
        }
    }
}
