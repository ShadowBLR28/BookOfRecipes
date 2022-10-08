import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { fakeAsync, inject, TestBed } from "@angular/core/testing";
import { CommentsService } from "./comments.service"

describe('commentsSErvice', () => {
    let service: CommentsService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CommentsService]
        })
    })

    it('#should be initialized', inject([CommentsService], (commentsService: CommentsService) => {
        expect(commentsService).toBeTruthy();
    }))

    it('#should perform comments correctly', fakeAsync(
        inject([CommentsService, HttpTestingController], (commentsService: CommentsService, backend: HttpTestingController) => {

        })
    ))
})