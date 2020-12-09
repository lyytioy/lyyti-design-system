import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-settings_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-settings_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-settings_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M12 11.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="phone-action-settings_svg__a"
      d="M12.849 8.132l.295.968a.663.663 0 00.783.454l.981-.228a.893.893 0 01.85 1.479l-.687.741a.669.669 0 000 .908l.687.741a.893.893 0 01-.85 1.479l-.981-.228a.663.663 0 00-.783.454l-.295.968a.886.886 0 01-1.7 0l-.295-.968a.663.663 0 00-.783-.454l-.981.228a.893.893 0 01-.85-1.479l.687-.741a.669.669 0 000-.908l-.687-.741a.893.893 0 01.85-1.479l.981.228a.663.663 0 00.783-.454l.295-.968a.886.886 0 011.7 0z"
    />
  );

export default SvgPhoneActionSettings;
