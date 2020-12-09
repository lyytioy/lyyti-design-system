import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-edit_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-edit_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-edit_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M15.587 9.913L10.5 15l-2.5.5.5-2.5 5.087-5.087a1.409 1.409 0 011.994 0l.006.006a1.409 1.409 0 010 1.994zM12.986 8.514l2 2"
    />
  );

export default SvgPhoneActionEdit;
