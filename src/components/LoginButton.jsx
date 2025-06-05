const tenantId = 'df4534ac-d804-41fa-bfa2-578dc8a69d31';
const clientId = '5861c9ce-5431-4878-9ed4-b6f740dba845';
const redirectUri = 'http://localhost:5173/callback';

export const LoginButton = () => {
const loginUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&response_mode=query&scope=openid%20email%20profile%20User.Read&state=12345`;

return (
<a
  href={loginUrl}
  className="relative flex items-center justify-center w-full px-4 py-1 border border-blue-600 text-blue-600 rounded-sm shadow-md hover:bg-blue-50 transition"
>
  {/* Ícono posicionado absolutamente a la izquierda */}
  <svg
    className="absolute left-4 h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="11" height="11" fill="#F35325" />
    <rect x="13" width="11" height="11" fill="#81BC06" />
    <rect y="13" width="11" height="11" fill="#05A6F0" />
    <rect x="13" y="13" width="11" height="11" fill="#FFBA08" />
  </svg>

  <span className="w-full text-center">
    Iniciar sesión con Microsoft
  </span>
</a>
);
};
export default LoginButton;


