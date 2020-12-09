import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScanUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="iris-scan-user_svg__a"
      d="M22.826 8.611a1.662 1.662 0 000-2.226C20.2 3.5 16.034.683 12 .751 7.972.683 3.8 3.5 1.182 6.385a1.662 1.662 0 000 2.226C3.745 11.435 7.9 14.317 12 14.248M12 11.25a3.75 3.75 0 113.75-3.75"
    />,
    <circle
      className="iris-scan-user_svg__a"
      cx={18.003}
      cy={13.125}
      r={2.625}
    />,
    <path
      className="iris-scan-user_svg__a"
      d="M18 16.5a5.25 5.25 0 00-5.25 5.25v1.5h10.5v-1.5A5.251 5.251 0 0018 16.5z"
    />
  );

export default SvgIrisScanUser;
