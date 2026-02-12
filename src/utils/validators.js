export function isEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  export function isNotEmpty(value) {
    return value && value.trim().length > 0;
  }
  
  export function minLength(value, len) {
    return value && value.trim().length >= len;
  }
  