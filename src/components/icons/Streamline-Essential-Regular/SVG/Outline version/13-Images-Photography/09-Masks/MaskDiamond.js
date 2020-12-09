import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskDiamond = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm0-22.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75z" />,
    <path d="M12.001 20.252a1.143 1.143 0 01-.881-.409l-6.302-7.001a1.274 1.274 0 01-.012-1.671l6.33-7.033a1.145 1.145 0 011.737.011l6.309 7.009c.421.49.424 1.19.012 1.67l-6.33 7.034a1.157 1.157 0 01-.863.39zM12 18.579L17.921 12 12 5.421 6.079 12 12 18.579z" />
  );

export default SvgMaskDiamond;
