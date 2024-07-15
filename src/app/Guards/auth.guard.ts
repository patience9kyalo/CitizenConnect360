import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../Services/auth.service";

export const AuthGuard: CanActivateFn = (route, state) => {

    const router = inject(Router)
    const auth = inject(AuthService)

    if (auth.isLoggedIn()) {

        return true
    } else {

        router.navigate(['/login'])
        return false
    }
}