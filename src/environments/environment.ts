export const environment = {
  production: false,
  BANK_TYPES: {
    URL: 'https://bast.dev/api/banks.php',
    CUSTOMER: {
      GET_CUSTOMERS: 'https://my-bank-proyect-rest.herokuapp.com/api/usuarios',
      GET_HISTORY: 'https://my-bank-proyect-rest.herokuapp.com/api/usuarios/historial-transferencias',
      POST_CUSTOMER: 'https://my-bank-proyect-rest.herokuapp.com/api/usuarios',
      POST_TRANSFER: 'https://my-bank-proyect-rest.herokuapp.com/api/usuarios/transferir'
    },
  }
};