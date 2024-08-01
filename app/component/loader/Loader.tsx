import React from 'react';

import { ReactComponent as LoaderIcon } from '../../asset/loader.svg';

import './loader.scss';

export const Loader = () => (
  <div className="loader">
    <LoaderIcon />
  </div>
);
