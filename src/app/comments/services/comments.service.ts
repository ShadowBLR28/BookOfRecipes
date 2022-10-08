import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CommentInterface } from "../types/comment.interface";

@Injectable()
export class CommentsService {
    list: CommentInterface[] = [{
        id: '1',
        body: 'Hi!',
        username: "Kishko Ivan",
        userId: '1',
        parentId: null,
        createdAt: '202-10-12'
    }]

    constructor(private http: HttpClient) { }

    getComments(): CommentInterface[] {
        return this.list;
        //return this.http.get(`${environment.baseUrl}/comments`);
    }

    createComment(text: string, parentId: null | string): CommentInterface {
        // return this.http.post<CommentInterface>(`${environment.baseUrl}/comments`, {
        //     body: text,
        //     pareintId: parentId,
        //     //should not be set here 
        //     createdAt: new Date().toISOString(),
        //     userId:1,
        //     username:'John'
        // });
        let item = {
            body: text,
            parentId: parentId,
            //should not be set here 
            id: '2',
            createdAt: new Date().toISOString(),
            userId: '1',
            username: 'John'
        }

        return item;
    }

    updateComment(id: string, text: string): CommentInterface {
        // return this.http.patch<CommentInterface>(`${environment.baseUrl}/comments/${id}`, {
        //     body: text,
        // });
        let item = this.list.find(x => x.id === id);
        item!.body = text;
        return item!;
    }

    deleteComment(id: string): {} {
        return this.http.delete<CommentInterface>(`${environment.baseUrl}/comments/${id}`)
    }
}