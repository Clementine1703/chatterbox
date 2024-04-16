export class AuthConfirmationError extends Error {
    constructor(value, ...params) {
      super(...params)
      this.name = "AuthConfirmationError"
      this.argument = value;
    }
}
