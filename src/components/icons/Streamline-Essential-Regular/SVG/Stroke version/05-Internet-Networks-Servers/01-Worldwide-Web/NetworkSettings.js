import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="network-settings_svg__a" cx={17.25} cy={16.5} r={1.5} />,
    <path
      className="network-settings_svg__a"
      d="M18.524 10.7l.443 1.452a.992.992 0 001.173.681l1.472-.341a1.339 1.339 0 011.275 2.218l-1.031 1.111a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.219l-1.472-.342a.993.993 0 00-1.173.681l-.443 1.448a1.33 1.33 0 01-2.548 0l-.442-1.453a.994.994 0 00-1.174-.681l-1.472.342a1.339 1.339 0 01-1.274-2.219l1.03-1.111a1 1 0 000-1.362l-1.03-1.111a1.338 1.338 0 011.274-2.218l1.472.341a.993.993 0 001.174-.681l.442-1.452a1.33 1.33 0 012.548.005zM12 23.25A11.25 11.25 0 1123.028 9.767"
    />,
    <path
      className="network-settings_svg__a"
      d="M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M.775 11.25H9M2.999 5.25H21M2.048 17.25H9M14.711 1.079a15.282 15.282 0 012.068 5.632"
    />
  );

export default SvgNetworkSettings;
