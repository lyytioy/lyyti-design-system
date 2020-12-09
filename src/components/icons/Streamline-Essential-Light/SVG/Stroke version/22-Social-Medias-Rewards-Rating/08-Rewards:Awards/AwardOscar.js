import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardOscar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-oscar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-oscar_svg__a"
      d="M18 22.5a1.485 1.485 0 00-.948-1.316l-4.1-1.368a3.509 3.509 0 00-1.9 0l-4.1 1.368A1.485 1.485 0 006 22.5a1 1 0 001 1h10a1 1 0 001-1z"
    />,
    <path
      className="award-oscar_svg__a"
      d="M16 20.833V17.5a1 1 0 00-1-1H9a1 1 0 00-1 1v3.333"
    />,
    <path
      className="award-oscar_svg__a"
      d="M15.7 7.412a1 1 0 00-.615-1.259 7.86 7.86 0 00-6.149.008 1 1 0 00-.624 1.262L9 10.92h.923l.888 4.6a1.212 1.212 0 002.38 0l.888-4.6H15zM10 1.5a1 1 0 011-1h2a1 1 0 011 1v1a2 2 0 01-4 0z"
    />
  );

export default SvgAwardOscar;
