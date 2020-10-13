
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'img'
})
export class ImgPipe implements PipeTransform{

    transform(path: string): string{
        return path ? path : 'assets/images/no-img.jpg';
    }
}

