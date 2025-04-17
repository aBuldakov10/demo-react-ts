import { notification } from 'antd';

interface Message {
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  duration?: number;
}

export const message = ({ title, description, type = 'info', duration }: Message) => {
  const key = Date.now().toString();

  return notification[type]({
    key,
    message: title,
    description,
    className: 'custom-notification',
    duration,
    onClick: () => notification.close(key),
  });
};
