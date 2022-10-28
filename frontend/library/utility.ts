import { ActivityState } from "../shared/actitivty.interface";
import { AuthorityRole } from "../shared/enum";

type Descripted<T> = {
  [K in keyof T]: {
    readonly key: string;
    readonly value: T[K];
  }
}[keyof T]

export const prettyDate = (date: string | Date) => {
  const _ = date instanceof Date ? date : new Date(date)
  return _ > new Date(new Date().toDateString()) ? _.toLocaleTimeString('vie') : _.toLocaleDateString('vie');
}

export const toLocaleString = (date: string | Date) => {
  if (!date) return "";
  const _ = date instanceof Date ? date : new Date(date)
  return _.toLocaleString('vie');
}

// enum to array 
export const e2a = <T>(enumeration: T): Descripted<T>[] => {
  return (Object.keys(enumeration) as Array<keyof T>)
    .filter(key => isNaN(Number(key)))
    .filter(key => typeof enumeration[key] === "number" || typeof enumeration[key] === "string")
    .map(_ => ({
      key: String(_),
      value: enumeration[_],
    }))
}

export const formatVND = (n: any) => {
  return parseFloat(n).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

//object to array
export const o2a = (obj: any): { key: string, value: any }[] => Object.keys(obj).map(key => ({ key, value: obj[key] }));

export const serialize: any = (obj: any, prefix?: string) => {
  var str = [],
    p;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
      str.push((v !== null && typeof v === "object") ?
        serialize(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }
  return str.join("&");
}

export function redirect({ ctx, path }: any) {
  const { res } = ctx;
  if (res) {
    res.writeHead(301, { Location: path });
    res.end();
  }
}

const adminRoles = [AuthorityRole.Admin]

export const isAdminRole = (roles: AuthorityRole[]) => roles.some(role => adminRoles.includes(role))

export const hasAdminRole = (hasRoles: AuthorityRole[]) => hasRoles.includes(AuthorityRole.Admin)
export const hasUserRole = (hasRoles: AuthorityRole[]) => hasRoles.includes(AuthorityRole.User)
// export const hasAnonymousRole = (hasRoles: AuthorityRole[]) => hasRoles.includes(AuthorityRole.ANONYMOUS)

export interface ApiOptions {
  loading?: boolean,
  alert?: {
    is: boolean,
    titile?: string | { GET: string, PUT: string, PATCH: string, POST: string, DELETE: string }
    success?: string,
    error?: string
  }
}

export const getStateLabelBg = (state: ActivityState) => {
  let lc = { label: 'waitting for', color: 'badge bg-cyan-500' };
  switch (state) {
    case ActivityState.REQUEST:
      lc.label = ActivityState.REQUEST;
      lc.color = 'badge neutral';
      break;
    case ActivityState.CANCEL:
      lc.label = ActivityState.CANCEL;
      lc.color = 'badge danger ';
      break;
    case ActivityState.USER_CANCEL:
      lc.label = ActivityState.USER_CANCEL;
      lc.color = 'badge danger';
      break;
    case ActivityState.COMPLETE:
      lc.label = ActivityState.COMPLETE;
      lc.color = 'badge success';
      break;
    case ActivityState.RETURN:
      lc.label = ActivityState.RETURN;
      lc.color = 'badge warning';
      break;
  }
  return lc;
};