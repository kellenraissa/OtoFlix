// import axios from 'axios';
// import Config from 'react-native-config';

// import {useAuthStore} from '@storages/auth';

// import {device} from '../device';
// import {RefreshToken} from '../auth';
// import {TokenService} from '../token';
// import {OneSignal} from 'react-native-onesignal';

// const instance = axios.create({
//   baseURL: Config.VANGUARDACASH_BASE_URL,
// });

// instance.interceptors.request.use(
//   async req => {
//     const token = TokenService.getToken();

//     if (token && !req.headers.Authorization) {
//       req.headers.Authorization = `Bearer ${token}`;
//     }

//     const deviceInfo = await device.getDeviceInfo();

//     if (deviceInfo && !req.headers['x-device-id']) {
//       req.headers['x-device-id'] = deviceInfo.deviceId;
//       req.headers['x-device-model'] = deviceInfo.deviceModel;
//       req.headers['x-app-version'] = deviceInfo.deviceVersion;
//     }

//     return req;
//   },

//   err => Promise.reject(err),
// );

// instance.interceptors.response.use(
//   res => res,
//   async error => {
//     const {onSignIn, onSignOut} = useAuthStore.getState();

//     if (error.response && error.response.status === 401) {
//       try {
//         const originalConfig = error.config;
//         if (!originalConfig._retry) {
//           originalConfig._retry = true;

//           const response = await RefreshToken();

//           originalConfig.headers.Authorization = `Bearer ${response.token}`;

//           onSignIn(response);
//           return instance(originalConfig);
//         }
//       } catch (e) {
//         onSignOut();
//         return Promise.reject(e);
//       }
//     }

//     return Promise.reject(error);
//   },
// );

// export const api = instance;
