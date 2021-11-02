interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

interface ForgotPasswordCredentials {
  email: string;
}
interface ResetPasswordCredentials {
  password: string;
  password_confirmation: string;
}

export type {
  SignInCredentials,
  SignUpCredentials,
  ForgotPasswordCredentials,
  ResetPasswordCredentials,
};
