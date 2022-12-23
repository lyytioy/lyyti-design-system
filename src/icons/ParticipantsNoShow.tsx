import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
const ParticipantsNoShow = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>{'.participants_no_show_svg{fill:none;stroke:currentColor;}'}</style>
    </defs>,
    <path
      className="participants_no_show_svg"
      d="M7.7 9.2a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2ZM12.4 12.6c-2.7-2.6-6.9-2.6-9.5.1C1.7 14 1 15.7 1 17.4"
      stroke="#7A8389"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="m10 10.909 11.83 7.37"
      stroke="#D1492E"
      strokeWidth={2.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M23 13.496c0 .668-.295 1.528-.689 2.388L11.486 9.006C12.667 7.764 14.438 7 16.308 7 20.146 7 23 9.866 23 13.496ZM20.146 19.896a68.425 68.425 0 0 1-2.755 3.725c-.394.382-1.181.573-1.575.096l-.098-.096c-1.771-2.292-5.708-7.26-5.708-10.125l10.136 6.4Z"
      fill="#D1492E"
    />
  );
export default ParticipantsNoShow;
