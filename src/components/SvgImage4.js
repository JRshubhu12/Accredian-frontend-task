// src/components/SvgImage3.js
import React from 'react';
import { ReactComponent as Rectangle1 } from '../assets/Rectangle 1.svg';
import { ReactComponent as Rectangle2 } from '../assets/Group 22035.svg';
import { ReactComponent as Rectangle3 } from '../assets/Anniversary (8) 4.svg';
import { ReactComponent as ContainerSvg } from '../assets/Anniversary (7) 1.svg';

const SvgImage3 = () => (
  <div>
    <Rectangle1 width="1000" height="1000" />
    <Rectangle2 width="300" height="300" style={{ position: 'absolute', top: '400px', left: '200px' }} />
    <Rectangle3 width="300" height="300" style={{ position: 'absolute', top: '237px', left: '200px' }} />
    <ContainerSvg width="500" height="500" style={{ position: 'absolute', top: '320px', left: '600px' }} />
  </div>
);

export default SvgImage3;