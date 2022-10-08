import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { LoaderService } from "../Services/loader.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    private totalReqeusts = 0;

    constructor(private loadingService: LoaderService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('caught');
        this.totalReqeusts++;
        this.loadingService.setLoading(true);
        return next.handle(req).pipe(
            finalize(() => {
                this.totalReqeusts--;
                if (this.totalReqeusts == 0) {
                    this.loadingService.setLoading(false);
                }
            })
        )
    }
}
