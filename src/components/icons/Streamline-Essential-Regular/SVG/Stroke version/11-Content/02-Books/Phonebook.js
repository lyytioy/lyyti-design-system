import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhonebook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phonebook_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phonebook_svg__a"
      d="M21 23.25H5.25A2.25 2.25 0 013 21M6 .75a3 3 0 00-3 3V21a2.25 2.25 0 012.25-2.25h15A.75.75 0 0021 18V1.5a.75.75 0 00-.75-.75zM19.5 23.25v-4.5"
    />,
    <path
      className="phonebook_svg__a"
      d="M11.748 13.681l2.411-2.381a1.5 1.5 0 012.121 0l.531.531a1.5 1.5 0 010 2.121l-.46.46a1.5 1.5 0 01-1.425.4l-.872-.218a9.478 9.478 0 01-6.9-6.9l-.214-.87A1.5 1.5 0 017.335 5.4l.46-.46a1.5 1.5 0 012.121 0l.531.53a1.5 1.5 0 010 2.121l-2.386 2.4"
    />
  );

export default SvgPhonebook;
