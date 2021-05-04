export const rutClean = (value) => {
    return typeof value === 'string' ? value.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
  }

  export const validateRut = (str: string): boolean => {
    return !(/[^0-9kK]+$/i).test(str);
  }