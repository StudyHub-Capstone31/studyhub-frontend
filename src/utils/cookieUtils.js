/**
 * Cookie utility functions for managing user authentication
 */

// Set a cookie with the given name, value, and expiration days
export const setCookie = (name, value, days = 7) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${JSON.stringify(
    value
  )};${expires};path=/;SameSite=Strict`;
};

// Get a cookie by name
export const getCookie = (name) => {
  const cookieName = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      try {
        return JSON.parse(cookie.substring(cookieName.length, cookie.length));
      } catch (e) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
  }
  return null;
};

// Remove a cookie by name
export const removeCookie = (name) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Strict`;
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return getCookie("user") !== null;
};
