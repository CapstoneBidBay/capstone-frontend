const SERVICE_URL = import.meta.env.VITE_SERVER_URL;

export default {
    base: SERVICE_URL,
    endpoint: {
        auth: {
            register: '/users/register',
            login: '/public/auth/login',
            logout: '/auth/logout',
            verifyOtp: '/users/register/otp/verify',
            resendOtp: '/users/register/otp/resend',
            refreshToken: '/auth/access-tokens/refresh',
        },
        user: {
            info: '/users/access-token/information',
            getCitizenCard: '/citizenCard/imagesCitizenCard',
            verifyCitizenCard: '/citizenCard/verify-citizen-card',
        },
        address: {
            allWardsOfDistrict: '/address/districts/{code}',
            allProvinces: '/address/provinces',
            allDistrictsOfProvince: '/address/provinces/{code}'
        }
    }
}