import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareBrightness = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M8.5 24a.499.499 0 01-.474-.342L7.14 21H5.5A2.503 2.503 0 013 18.5v-13C3 4.121 4.121 3 5.5 3h1.64L8.026.342A.499.499 0 018.5 0h7c.216 0 .406.137.474.342L16.86 3h1.64C19.878 3 21 4.121 21 5.5v13c0 1.378-1.122 2.5-2.5 2.5h-1.64l-.886 2.658A.498.498 0 0115.5 24h-7zm6.64-1l.667-2H8.194l.667 2h6.279zM5.5 4C4.673 4 4 4.673 4 5.5v13c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5v-13c0-.827-.673-1.5-1.5-1.5h-13zm10.306-1l-.666-2H8.86l-.666 2h7.612z" />,
    <path d="M12 14c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3a1.001 1.001 0 101 1c0-.551-.448-1-1-1z" />,
    <circle cx={14.25} cy={7.75} r={0.75} />,
    <circle cx={9.75} cy={7.75} r={0.75} />,
    <circle cx={14.25} cy={16.25} r={0.75} />,
    <circle cx={9.75} cy={16.25} r={0.75} />,
    <circle cx={16.75} cy={12} r={0.75} />,
    <circle cx={7.25} cy={12} r={0.75} />
  );

export default SvgSmartWatchSquareBrightness;
