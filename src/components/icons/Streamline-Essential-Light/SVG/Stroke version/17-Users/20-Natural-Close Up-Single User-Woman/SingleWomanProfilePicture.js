import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanProfilePicture = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-profile-picture_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="single-woman-profile-picture_svg__cls-1"
      x={2}
      y={0.5}
      width={20}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="single-woman-profile-picture_svg__cls-1"
      d="M5 3.5h14v17H5z"
    />,
    <path
      className="single-woman-profile-picture_svg__cls-1"
      d="M13.889 15.19a6.335 6.335 0 003.745-.783.5.5 0 00.143-.751c-.433-.508-.734-1.178-.866-3.133C16.659 6.807 14.153 5.5 12 5.5s-4.659 1.307-4.911 5.023c-.132 1.955-.433 2.625-.866 3.133a.5.5 0 00.143.751 6.343 6.343 0 003.745.783"
    />,
    <path
      className="single-woman-profile-picture_svg__cls-1"
      d="M17.343 17.716c-.853-.352-1.862-.713-2.959-1.119a.759.759 0 01-.5-.709v-1.38a.754.754 0 01.247-.559 2.72 2.72 0 00.886-2.027v-1.1a.988.988 0 00-.7-.946 4.89 4.89 0 01-1.977-1.184.5.5 0 00-.68 0 4.89 4.89 0 01-1.986 1.181.988.988 0 00-.7.946v1.1a2.719 2.719 0 00.886 2.027.754.754 0 01.247.559v1.38a.759.759 0 01-.5.709c-1.1.406-2.106.767-2.959 1.119"
    />
  );

export default SvgSingleWomanProfilePicture;
