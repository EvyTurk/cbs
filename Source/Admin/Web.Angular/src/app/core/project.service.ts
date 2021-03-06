import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AddProject } from '../shared/models/add-project.model';
import { Project } from '../shared/models/project.model';

@Injectable()
export class ProjectService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    saveProject(item: AddProject): Promise<void> {
        const url = `/api/project`;

        let project = new AddProject();
        project = item; // Simple assignment, will probably handle values differently later

        return this.http
            .post(url, JSON.stringify(project), { headers: this.headers })
            .toPromise()
            .then(() => { console.log('success'); })
            .catch((error) => console.error(error));
    }

    getProjects(): Promise<Array<Project>> {
        // let projects = new Array<Project>();
        // projects.push(
        //     { id: '1', name: 'My first project'},
        //     { id: '2', name: 'My second project'},
        //     { id: '3', name: 'My third project'}
        // );
        // return Promise.resolve(projects);

        return this.http
            .get('/api/project', { headers: this.headers })
            .toPromise()
            .then((result) => { return result.json(); })
            .catch((error) => console.error(error));
    }
}