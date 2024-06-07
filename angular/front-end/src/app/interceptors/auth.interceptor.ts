import { HttpInterceptorFn } from "@angular/common/http";

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {

    if (req.url.endsWith('/api/token/') || req.url.endsWith('/api/user/create/')){
        // Jeśli tak, przekazuj żądanie bez dodawania nagłówka autoryzacji
        return next(req);
      }

    const accessToken = localStorage.getItem('accessToken');

    const authReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    return next(authReq);
};
