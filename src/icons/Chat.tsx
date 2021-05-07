import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Chat = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.conversation-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="conversation-text_svg__a"
      d="M19.707 6.747a9.1 9.1 0 10-16.285 7.891L.75 20.25l5.612-2.672a9.079 9.079 0 003.388 1.263M6.75 6.75h7.5M6.75 11.25h3"
    />,
    <path
      className="conversation-text_svg__a"
      d="M17.882 10.5a5.344 5.344 0 014.026 8.886l.671 3.864-3.5-2.158a5.364 5.364 0 11-1.2-10.592zM19.5 14.25h-3M19.5 17.25h-3"
    />
  );

export default Chat;
