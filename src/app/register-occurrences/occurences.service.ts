import { Injectable } from '@angular/core';
import { Occurrence } from '../../classes/occurrence';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OccurencesService {

    constructor(private http: HttpClient) { }

    save(occurrence: Occurrence) {
        return this.http.post('http://localhost:8080/occurrence', occurrence);
    }
}
