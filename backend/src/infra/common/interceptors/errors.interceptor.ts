import { EException } from '@domain/exceptions/exceptions.interface';
import { BadRequestException, ForbiddenException, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  NotFoundException
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();

    const { method, path } = req;
    const now = Date.now();

    return next
      .handle()
      .pipe(
        catchError(err => throwError(() => {
          const data = {
            error: err.message || err,
            path,
            method,
            duration: `${Date.now() - now}ms`,
            statusCode: err.status,
          }

          switch (err.code_error) {
            case EException.NOT_FOUND:
              return new NotFoundException(data);
            case EException.UNAUTHORIZED:
              return new UnauthorizedException(data);
            case EException.FORBIDDEN:
              return new ForbiddenException(data);
            case EException.UNPROCESSABLE_ENTITY:
              return new UnprocessableEntityException(data);
            default:
              return new BadRequestException(data)
          }
        })),
      );
  }
}
