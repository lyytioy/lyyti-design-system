import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
const ParticipantsShow = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>{'.participants_show_svg{fill:none;stroke:currentColor;}'}</style>
    </defs>,
    <path
      className="participants_show_svg"
      d="M7.7 9.2a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2ZM12.4 12.6c-2.7-2.6-6.9-2.6-9.5.1C1.7 14 1 15.7 1 17.4"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M16.404 7C12.772 7 10 9.98 10 13.44c0 2.786 3.823 8.072 5.64 10.187 0 0 0 .096.095.096.383.384 1.243.384 1.625-.096C19.08 21.32 23 16.13 23 13.439 22.809 9.883 20.037 7 16.404 7Zm0 8.554c-1.338 0-2.294-.962-2.294-2.307 0-1.25 1.052-2.307 2.294-2.307 1.339 0 2.39 1.058 2.39 2.307 0 1.345-1.051 2.307-2.39 2.307Z"
      fill="#50B54E"
    />
  );
export default ParticipantsShow;
