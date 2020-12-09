import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralProfilePicture = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M21 0H3a1.5 1.5 0 00-1.5 1.5v21A1.5 1.5 0 003 24h18a1.5 1.5 0 001.5-1.5v-21A1.5 1.5 0 0021 0zm-2 4v16a.5.5 0 01-.5.5h-13A.5.5 0 015 20V4a.5.5 0 01.5-.5h13a.5.5 0 01.5.5z" />,
    <circle cx={12} cy={10} r={3} />,
    <path d="M12 14a5.742 5.742 0 00-4.94 2.809.449.449 0 000 .461.486.486 0 00.415.23h9.038a.486.486 0 00.415-.229.444.444 0 000-.461A5.729 5.729 0 0012 14z" />
  );

export default SvgSingleNeutralProfilePicture;
