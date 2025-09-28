import {showMessage, MessageType} from 'react-native-flash-message';

function showToast(type: MessageType, message: string) {
  showMessage({type, message});
}

export const toast = {
  success: (message: string) => showToast('success', message),
  danger: (message: string) => showToast('danger', message),
  info: (message: string) => showToast('info', message),
  warning: (message: string) => showToast('warning', message),
};
