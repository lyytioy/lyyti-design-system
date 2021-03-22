import Alert, { AlertProps } from './Alert';
import Slide, { SlideProps } from './Slide';

export interface ToastNotificationProps {
  alertProps: AlertProps;
  slideProps: SlideProps;
}

const ToastNotification = (props: ToastNotificationProps): JSX.Element => {
  return (
    <Slide {...props.slideProps} mountOnEnter unmountOnExit>
      <Alert {...props.alertProps} />
    </Slide>
  );
};

ToastNotification.defaultProps = {};

export default ToastNotification;
