import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsAlert = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-alert_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tags-alert_svg__a"
      d="M9 19.188a1.5 1.5 0 01-2.121 0L1.5 13.81a1.5 1.5 0 010-2.122L12 1.188a1.5 1.5 0 011.061-.439h5.378a1.5 1.5 0 011.5 1.5v5.379a1.5 1.5 0 01-.439 1.06M16.189 4.124"
    />,
    <path
      className="tags-alert_svg__a"
      d="M16.189 4.124a.375.375 0 10.375.375.375.375 0 00-.375-.375M16.939 20.249a.375.375 0 10.375.375.375.375 0 00-.375-.375M16.939 17.999v-3"
    />,
    <path
      className="tags-alert_svg__a"
      d="M22.752 20.681a1.774 1.774 0 01-1.587 2.568h-8.452a1.773 1.773 0 01-1.586-2.568l4.225-8.451a1.774 1.774 0 013.174 0z"
    />
  );

export default SvgTagsAlert;
