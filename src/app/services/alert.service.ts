
import { Injectable } from '@angular/core';

import Swal, { SweetAlertArrayOptions, SweetAlertIcon } from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class AlertService{

    public makeAlert = (title: string, text: string, icon: SweetAlertIcon): any =>
        Swal.fire({
            icon,
            title,
            text
        })

    public makeLoadin = () =>
        Swal.fire({
            icon: 'info',
            text: 'Wait a moment',
            showLoaderOnConfirm: true,
        })
}
