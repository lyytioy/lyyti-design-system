import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-settings_svg__a"
      d="M13.125 14.25v6.268a2.732 2.732 0 01-2.733 2.732H3.858a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 013.858 2.25h4.767M1.125 18.75h12"
    />,
    <circle
      className="phone-action-settings_svg__a"
      cx={16.875}
      cy={7.5}
      r={1.5}
    />,
    <path
      className="phone-action-settings_svg__a"
      d="M18.149 1.7l.442 1.452a.993.993 0 001.174.681l1.472-.341a1.339 1.339 0 011.275 2.218l-1.031 1.109a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.219l-1.472-.342a.994.994 0 00-1.174.681l-.442 1.45a1.33 1.33 0 01-2.548 0l-.442-1.453a.994.994 0 00-1.174-.681l-1.472.342a1.339 1.339 0 01-1.275-2.219l1.031-1.111a1 1 0 000-1.362l-1.031-1.108a1.339 1.339 0 011.275-2.218l1.472.341a.993.993 0 001.174-.681L15.6 1.7a1.33 1.33 0 012.549 0z"
    />
  );

export default SvgPhoneActionSettings;
