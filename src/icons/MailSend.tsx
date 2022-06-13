import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const MailSend = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.mail_send_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.0px}'
        }
      </style>
    </defs>,
    <path
      className="mail_send_svg__a"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.69238 7.8125C9.69238 7.53636 9.91624 7.3125 10.1924 7.3125H23.0385C23.3146 7.3125 23.5385 7.53636 23.5385 7.8125V16.1875C23.5385 16.4636 23.3146 16.6875 23.0385 16.6875H10.1924C9.91624 16.6875 9.69238 16.4636 9.69238 16.1875V7.8125Z"
    />,
    <path className="mail_send_svg__a" d="M18.8848 10.7344L21.2312 12.9375" />,
    <path className="mail_send_svg__a" d="M14.3465 10.7344L12 12.9375" />,
    <path
      className="mail_send_svg__a"
      d="M23.3106 7.63373L17.4565 11.7337C16.9502 12.0888 16.2804 12.0888 15.7741 11.7337L9.91992 7.63373"
    />,
    <line className="mail_send_svg__a" x1="0.2" y1="9.925" x2="8.41536" y2="9.925" />,
    <line className="mail_send_svg__a" x1="2.66191" y1="12.425" x2="7.18498" y2="12.425" />,
    <line className="mail_send_svg__a" x1="0.2" y1="14.925" x2="8.41536" y2="14.925" />
  );

export default MailSend;
