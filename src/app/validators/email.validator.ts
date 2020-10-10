
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidatorsEmail{

    public validEmail = (email: FormControl): Promise<{[err: string]: boolean}> =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email.value === 'angel@hotmail.com'){
                    resolve({ 'invalid emai': true });
                }
                return resolve(null);
            }, 1500);
        })

}

