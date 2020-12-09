import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutDashboard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-dashboard_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="layout-dashboard_svg__a"
      d="M10.5 12.526a.978.978 0 01-.975.98h-7.8a.977.977 0 01-.975-.98V1.736a.978.978 0 01.976-.98l7.8.013a.978.978 0 01.974.98zM23.246 6.544a.969.969 0 01-.975.962h-7.8a.968.968 0 01-.975-.962V1.731a.968.968 0 01.973-.962l7.8-.013a.97.97 0 01.977.962zM10.5 22.291a.971.971 0 01-.977.965l-7.8-.013a.969.969 0 01-.973-.964V17.47a.969.969 0 01.975-.964h7.8a.97.97 0 01.975.964zM14.472 23.256a.978.978 0 01-.976-.981V11.487a.978.978 0 01.975-.981h7.8a.978.978 0 01.975.981v10.775a.979.979 0 01-.974.981z"
    />
  );

export default SvgLayoutDashboard;
