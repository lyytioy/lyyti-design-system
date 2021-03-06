import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Note = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.note_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="note_svg__a"
      d="M15.75,4.5H19.5A1.5,1.5,0,0,1,21,6V21.75a1.5,1.5,0,0,1-1.5,1.5H4.5A1.5,1.5,0,0,1,3,21.75V6A1.5,1.5,0,0,1,4.5,4.5H8.25a3.75,3.75,0,0,1,7.5,0Z"
    />,
    <path className="note_svg__a" d="M12,3.75a.375.375,0,1,1-.375.375A.375.375,0,0,1,12,3.75" />,
    <line className="note_svg__a" x1="6.75" y1="10.5" x2="12" y2="10.5" />,
    <line className="note_svg__a" x1="15" y1="10.5" x2="17.25" y2="10.5" />,
    <line className="note_svg__a" x1="17.25" y1="14.25" x2="12" y2="14.25" />,
    <line className="note_svg__a" x1="9" y1="14.25" x2="6.75" y2="14.25" />,
    <line className="note_svg__a" x1="6.75" y1="18" x2="12" y2="18" />,
    <line className="note_svg__a" x1="15" y1="18" x2="17.25" y2="18" />
  );

export default Note;
