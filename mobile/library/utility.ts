import { AuthorityRole } from "../shared/enum";

export const parseJwt = (token: any) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

const adminRoles = [AuthorityRole.Admin]

export const isAdminRole = (roles: AuthorityRole[]) => roles.some(role => adminRoles.includes(role))

export const hasAdminRole = (hasRoles: AuthorityRole[]) => hasRoles.includes(AuthorityRole.Admin)
export const hasUserRole = (hasRoles: AuthorityRole[]) => hasRoles.includes(AuthorityRole.User)
export const hasDriverRole = (hasRoles: AuthorityRole[]) => hasRoles.includes(AuthorityRole.Driver)