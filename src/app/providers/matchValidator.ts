import { FormGroup } from "@angular/forms";

export class MatchValidator {
    constructor() { }

    static match(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors['match']) {
                return;
            }

            if (control.value! == matchingControl.valid) {
                matchingControl.setErrors({ match: true });
            } else {
                matchingControl.setErrors(null);
            }

            return null;
        }
    }
}