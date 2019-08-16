import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {


  transform(value: string, ocultar: boolean = true): any {

    let retorno = '';
    if (!ocultar) {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        retorno += '*';
      }
      return retorno;
    }
  }

}
