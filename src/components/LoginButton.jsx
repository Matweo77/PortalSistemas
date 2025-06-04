

const tenantId = 'df4534ac-d804-41fa-bfa2-578dc8a69d31';
const clientId = '5861c9ce-5431-4878-9ed4-b6f740dba845';
const redirectUri = 'http://localhost:5173/callback';

export const LoginButton = () => {
const loginUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&response_mode=query&scope=openid%20email%20profile%20User.Read&state=12345`;

return (
<a className="px-4 py-2 bg-black text-white rounded text-center" href={loginUrl}>
     Iniciar sesión con Microsoft
</a>
);
};
export default LoginButton;


