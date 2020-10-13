
import { Pipe, PipeTransform } from '@angular/core';
import { Move } from '../interfaces/moves.interface';

@Pipe({
    name: 'order'
})
export class OrderPipe implements PipeTransform{

    transform(move: Move[]): Move[]{
        // tslint:disable-next-line: no-shadowed-variable
        return [...move.filter(move => move.type === 'entry'), ...move.filter(move => move.type === 'exit')];
    }
}
