import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <ellipse cx={14.013} cy={3.5} rx={3.513} ry={3.5} />,
    <path d="M9.446 9.748a.5.5 0 00-.111-.731A6.022 6.022 0 000 13.333.6.6 0 00.6 14h7.9a.5.5 0 00.5-.5V11a1.976 1.976 0 01.446-1.252z" />,
    <ellipse cx={5.513} cy={3.5} rx={3.513} ry={3.5} />,
    <path d="M12.5 10.5a2 2 0 00-2 2V22a2 2 0 002 2H22a2 2 0 002-2v-9.5a2 2 0 00-2-2zm8.775 6.387a1.25 1.25 0 00-2.064-.024l-1.537 2.2a.254.254 0 01-.169.1.25.25 0 01-.192-.053l-.612-.489a1.249 1.249 0 00-1.821.282l-2 3.005a.2.2 0 01-.171.092.206.206 0 01-.206-.206V12.75a.25.25 0 01.25-.25h9a.25.25 0 01.25.25v4.4a.25.25 0 01-.458.139z" />,
    <circle cx={15.5} cy={15} r={1.75} />
  );

export default SvgMultipleActionsImage;
