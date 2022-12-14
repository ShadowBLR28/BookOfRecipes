import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UploadImageService {

    constructor(private http: HttpClient) { }

    upload(form: FormData): Observable<any> {
        return this.http.post(environment.publicImageCloudUrl, form);
    }
}
