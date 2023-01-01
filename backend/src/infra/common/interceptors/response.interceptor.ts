import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

class ResponseFormat<T> {
  path: string;
  method: string;
  duration: string;
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, ResponseFormat<T>>{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseFormat<T>> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse()

    const { method, path } = req;
    const { statusCode } = res;

    console.log(`[${method}] ${path} - ${statusCode}`);


    const now = Date.now();

    return next.handle().pipe(
      map((data) => ({
        data,
        path,
        method,
        duration: `${Date.now() - now}ms`,
      }))
    );
  }
}
