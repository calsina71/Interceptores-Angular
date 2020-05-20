import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {

  }

  obtenerUsuarios() {

    let params = new HttpParams().append('page', '3');
    params = params.append('name', 'Carlos Alsina');

    // ---- Lo pasamos al interceptor ----
    // const headers = new HttpHeaders({
    //   'token-usuario': 'ABC123456789'
    // });

    const data = 'data';

    return this.http.get('https://reqres11.in/api/users', {
                params,
                // headers
      }).pipe(

          map(resp => resp[ data ])
      );

       // catchError(this.manejarError) );
                      // catchError( err => {

                        // console.log( 'sucedió un error' );
                        // console.warn( err );

                        // return throwError( 'Error personalizado' );
                      // })

                    // );
   }

  // manejarError( error: HttpErrorResponse ) {
  //   console.log('sucedió un error');
  //   console.warn( error );

  //   return throwError('Error personalizado');
  // }
}
