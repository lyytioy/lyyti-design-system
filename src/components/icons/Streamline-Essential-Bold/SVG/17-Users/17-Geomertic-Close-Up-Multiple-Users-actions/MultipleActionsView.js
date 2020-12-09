import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsView = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M16.5 9.5c.094 0 .188 0 .281.006a.5.5 0 00.23-.954 6 6 0 00-4.987-.018.5.5 0 00-.182.771 7.488 7.488 0 01.618.885.5.5 0 00.671.181A6.945 6.945 0 0116.5 9.5z" />,
    <ellipse cx={14.013} cy={3.5} rx={3.513} ry={3.5} />,
    <path d="M5.989 8A6.014 6.014 0 000 13.333.6.6 0 00.6 14h9.034a.5.5 0 00.459-.3 7.012 7.012 0 011.189-1.857.5.5 0 00.072-.56A6.02 6.02 0 005.989 8z" />,
    <ellipse cx={5.513} cy={3.5} rx={3.513} ry={3.5} />,
    <path d="M21.173 19.759a.25.25 0 01-.034-.311 5.509 5.509 0 10-1.691 1.691.25.25 0 01.311.034l2.534 2.534a1 1 0 001.414-1.414zM16.5 13a3.5 3.5 0 11-3.5 3.5 3.5 3.5 0 013.5-3.5z" />
  );

export default SvgMultipleActionsView;
