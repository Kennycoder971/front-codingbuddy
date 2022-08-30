import Cookies from "universal-cookie";
const cookies = new Cookies();

export function getCookie(cookieName) {
  return cookies.get(cookieName);
}

export function setCookie(cookieName, data, path) {
  const current = new Date();
  const nextYear = new Date();
  nextYear.setFullYear(current.getFullYear() + 1);

  cookies.set(cookieName, data, { path, expires: nextYear });
}

export function removeCookie(cookieName, path) {
  cookies.remove(cookieName, {
    path,
  });
}
