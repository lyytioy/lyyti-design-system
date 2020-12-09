import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-woman_svg__cls-1"
      d="M14.5 13.575a8.3 8.3 0 005.133-1.143.5.5 0 00.113-.773c-.627-.69-1.061-1.525-1.246-4.26C18.167 2.48 14.85.75 12 .75S5.833 2.48 5.5 7.4c-.185 2.735-.619 3.57-1.246 4.26a.5.5 0 00.113.773A8.305 8.305 0 009.5 13.575"
    />,
    <path
      className="single-woman_svg__cls-1"
      d="M15.155 15.437a1 1 0 01-.655-.937v-1.827a1 1 0 01.327-.74A3.6 3.6 0 0016 9.25v-1.7a.983.983 0 00-.714-.954 6.493 6.493 0 01-2.917-1.7.511.511 0 00-.738 0A6.493 6.493 0 018.714 6.6.983.983 0 008 7.552v1.7a3.6 3.6 0 001.173 2.683 1 1 0 01.327.74V14.5a1 1 0 01-.655.938C5.148 16.806 2.2 17.784 1.5 19.193a10.135 10.135 0 00-1 4.057h23a10.135 10.135 0 00-1-4.057c-.7-1.409-3.648-2.387-7.345-3.756z"
    />
  );

export default SvgSingleWoman;
