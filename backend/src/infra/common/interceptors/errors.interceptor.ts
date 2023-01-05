import { EException } from '@domain/exceptions/exceptions.interface';
import { BadRequestException, ConflictException, ForbiddenException, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  NotFoundException
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

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
          console.log('err', err);

          // const message = err?.response.message || err?.message
          const data = {
            error: err?.response?.message || err?.message,
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
            case EException.CONFLICT:
              return new ConflictException(data);
            default:
              return new BadRequestException(data)
          }
        })),
      );
  }
}
