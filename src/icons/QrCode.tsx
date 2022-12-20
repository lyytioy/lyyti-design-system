import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const QrCode = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>{'.qr_code_svg{fill:none;stroke:currentColor;stroke-width:3px}'}</style>
    </defs>,
    <mask id="qr_code_svg__a" fill="#fff">
      <path d="M0 1a1 1 0 0 1 1-1h9.2a1 1 0 0 1 1 1v9.2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1Z" />
    </mask>,
    <path
      d="M0 1a1 1 0 0 1 1-1h9.2a1 1 0 0 1 1 1v9.2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1Z"
      className='qr_code_svg'
      mask="url(#qr_code_svg__a)"
    />,
    <mask id="qr_code_svg__b" fill="#fff">
      <path d="M0 13.8a1 1 0 0 1 1-1h9.2a1 1 0 0 1 1 1V23a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-9.2Z" />
    </mask>,
    <path
      d="M0 13.8a1 1 0 0 1 1-1h9.2a1 1 0 0 1 1 1V23a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-9.2Z"
      className='qr_code_svg'
      mask="url(#qr_code_svg__b)"
    />,
    <mask id="qr_code_svg__c" fill="#fff">
      <path d="M12.8 1a1 1 0 0 1 1-1H23a1 1 0 0 1 1 1v9.2a1 1 0 0 1-1 1h-9.2a1 1 0 0 1-1-1V1Z" />
    </mask>,
    <path
      d="M12.8 1a1 1 0 0 1 1-1H23a1 1 0 0 1 1 1v9.2a1 1 0 0 1-1 1h-9.2a1 1 0 0 1-1-1V1Z"
      className='qr_code_svg'
      mask="url(#qr_code_svg__c)"
    />,
    <path
      d="M13.3 13.8a.5.5 0 0 1 .5-.5h3.072a.5.5 0 0 1 .5.5v3.072a.5.5 0 0 1-.5.5H13.8a.5.5 0 0 1-.5-.5V13.8ZM19.428 13.8a.5.5 0 0 1 .5-.5H23a.5.5 0 0 1 .5.5v3.072a.5.5 0 0 1-.5.5h-3.072a.5.5 0 0 1-.5-.5V13.8ZM19.428 19.928a.5.5 0 0 1 .5-.5H23a.5.5 0 0 1 .5.5V23a.5.5 0 0 1-.5.5h-3.072a.5.5 0 0 1-.5-.5v-3.072ZM13.3 19.928a.5.5 0 0 1 .5-.5h3.072a.5.5 0 0 1 .5.5V23a.5.5 0 0 1-.5.5H13.8a.5.5 0 0 1-.5-.5v-3.072Z"
      stroke="currentColor"
      fill="none"
    />
  );
export default QrCode;
