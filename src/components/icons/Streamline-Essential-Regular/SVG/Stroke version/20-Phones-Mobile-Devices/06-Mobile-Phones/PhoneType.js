import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-type_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-type_svg__a"
      d="M12.75 14.25v6.268a2.732 2.732 0 01-2.732 2.732H3.483A2.733 2.733 0 01.75 20.518V4.983A2.734 2.734 0 013.483 2.25H6M.75 18.75h12"
    />,
    <path
      className="phone-type_svg__a"
      d="M20.25.75H12a3 3 0 00-3 3v4.5a3 3 0 003 3h3.75V15l3.75-3.75h.75a3 3 0 003-3v-4.5a3 3 0 00-3-3zM12.375 5.625"
    />,
    <path
      className="phone-type_svg__a"
      d="M12.375 5.625A.375.375 0 1012.75 6a.375.375 0 00-.375-.375M16.125 5.625A.375.375 0 1016.5 6a.375.375 0 00-.375-.375M19.875 5.625A.375.375 0 1020.25 6a.375.375 0 00-.375-.375"
    />
  );

export default SvgPhoneType;
