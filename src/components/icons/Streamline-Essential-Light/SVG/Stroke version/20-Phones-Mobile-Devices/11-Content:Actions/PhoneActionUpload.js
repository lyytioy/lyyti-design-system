import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-upload_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-upload_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-upload_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3"
    />,
    <circle className="phone-action-upload_svg__a" cx={12} cy={12} r={4} />,
    <path
      className="phone-action-upload_svg__a"
      d="M12 14v-4M12 10l-1.5 1.5M12 10l1.5 1.5"
    />
  );

export default SvgPhoneActionUpload;
