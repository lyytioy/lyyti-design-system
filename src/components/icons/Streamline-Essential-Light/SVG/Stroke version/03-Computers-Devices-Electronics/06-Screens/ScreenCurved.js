import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScreenCurved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".screen-curved_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="screen-curved_svg__a"
      d="M7.51 21.5h9M10.409 17.514L10 21.5M13.591 17.514L14 21.5M23.5 18.5s-3.5-1-11.5-1-11.5 1-11.5 1v-16s3.5 1 11.5 1 11.5-1 11.5-1z"
    />
  );

export default SvgScreenCurved;
