import Cookies from "universal-cookie";
const cookies = new Cookies();

export function getCookie(cookieName) {
  return cookies.get(cookieName);
}

export function setCookie(cookieName, data, path) {
  cookies.set(cookieName, data, { path });
}

export function removeCookie(cookieName, path) {
  cookies.remove(cookieName, {
    path,
  });
}
