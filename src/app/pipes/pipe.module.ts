
import { NgModule } from "@angular/core";
import { OrderPipe } from './order.pipe';
import { ImgPipe } from './img-photo.pipe';

@NgModule({
    declarations: [
        OrderPipe,
        ImgPipe
    ],
    exports: [
        OrderPipe,
        ImgPipe
    ]
})
export class PipeModule{}
