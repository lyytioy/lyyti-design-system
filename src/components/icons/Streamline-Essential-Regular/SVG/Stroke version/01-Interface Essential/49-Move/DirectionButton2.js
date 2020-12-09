import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDirectionButton2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".direction-button-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="direction-button-2_svg__a" cx={12} cy={11.998} r={3} />,
    <path
      className="direction-button-2_svg__a"
      d="M1.026 11.369a.854.854 0 000 1.257l3.118 2.858A.66.66 0 005.25 15V9a.66.66 0 00-1.106-.486zM22.973 12.626a.852.852 0 000-1.257l-3.117-2.858A.66.66 0 0018.75 9v6a.659.659 0 001.105.486zM11.372 22.971a.85.85 0 001.256 0l2.858-3.118A.659.659 0 0015 18.748H9a.66.66 0 00-.487 1.105zM12.628 1.024a.852.852 0 00-1.256 0L8.514 4.142A.66.66 0 009 5.248h6a.66.66 0 00.486-1.106z"
    />
  );

export default SvgDirectionButton2;
