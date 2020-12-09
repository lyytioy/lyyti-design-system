import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-edit_svg__a"
      d="M15.7 22.3l-4.2 1.2 1.2-4.2 7.179-7.179a2.121 2.121 0 013 3zM18.979 13.021l3 3M12.7 19.3l3 3M13.5 14.5H2A1.5 1.5 0 01.5 13V2A1.5 1.5 0 012 .5h18A1.5 1.5 0 0121.5 2v6.5"
    />,
    <path className="email-action-edit_svg__a" d="M21.067.946L11 9 .933.946" />
  );

export default SvgEmailActionEdit;
