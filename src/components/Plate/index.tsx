import React from 'react';

import { MotiImage } from 'moti';

import plateImg from '../../assets/plate.png';

import { styles } from './styles';

export function Plate() {
  return (
    <MotiImage
      source={plateImg}
      resizeMode="contain"
      style={styles.plate}

      from={{
        rotate: '100deg',
        opacity: 0,
      }}
      animate={{
        rotate: '0deg',
        opacity: 1,
      }}
      transition={{
        type: 'timing',
        duration: 2000,
        // loop: true,
        // repeat: 3,
        // repeatReverse: false,
      }}
    />
  );
}