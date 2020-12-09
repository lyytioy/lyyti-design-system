import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cloud-settings_svg__a" cx={17.25} cy={16.5} r={1.5} />,
    <path
      className="cloud-settings_svg__a"
      d="M18.524 10.7l.443 1.452a.992.992 0 001.173.681l1.473-.341a1.339 1.339 0 011.274 2.218l-1.03 1.111a1 1 0 000 1.362l1.03 1.111a1.339 1.339 0 01-1.274 2.219l-1.473-.342a.994.994 0 00-1.173.681l-.443 1.448a1.33 1.33 0 01-2.548 0l-.442-1.453a1 1 0 00-1.174-.681l-1.472.342a1.339 1.339 0 01-1.274-2.219l1.03-1.111a1 1 0 000-1.362l-1.03-1.111a1.338 1.338 0 011.274-2.218l1.472.341a.993.993 0 001.174-.681l.442-1.452a1.33 1.33 0 012.548.005z"
    />,
    <path
      className="cloud-settings_svg__a"
      d="M23.01 9.361a4.868 4.868 0 00-7.4-2.5 7.5 7.5 0 10-7.36 8.889"
    />
  );

export default SvgCloudSettings;
