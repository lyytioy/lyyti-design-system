import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="video-file-settings_svg__a"
      cx={17.25}
      cy={16.5}
      r={1.5}
    />,
    <path
      className="video-file-settings_svg__a"
      d="M18.524 10.7l.442 1.453a.994.994 0 001.174.681l1.472-.341a1.339 1.339 0 011.275 2.218l-1.031 1.111a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.218l-1.472-.341a.994.994 0 00-1.174.681l-.442 1.447a1.33 1.33 0 01-2.548 0l-.442-1.453a.994.994 0 00-1.174-.681l-1.472.341a1.339 1.339 0 01-1.275-2.218l1.031-1.111a1 1 0 000-1.362l-1.031-1.111a1.339 1.339 0 011.275-2.218l1.472.341a.994.994 0 001.174-.681l.442-1.453a1.33 1.33 0 012.548.006z"
    />,
    <path
      className="video-file-settings_svg__a"
      d="M8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V6.75"
    />,
    <path
      className="video-file-settings_svg__a"
      d="M6.241 12.678a.685.685 0 01-.991-.613v-4.63a.685.685 0 01.991-.613l4.631 2.316a.684.684 0 010 1.224z"
    />
  );

export default SvgVideoFileSettings;
