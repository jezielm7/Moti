import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { MotiView } from 'moti';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Button() {
  return (
    <MotiView
      from={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        scale: [
          { value: 0, type: 'timing' },
          { value: 1.1, type: 'spring' },
          { value: 1, type: 'timing' },
        ],
      }}
    >
      <TouchableOpacity
        style={styles.button}
        activeOpacity={.8}
      >
        <Text style={styles.text}>
          Add to card
        </Text>

        <Feather
          name="shopping-cart"
          size={24}
          color={theme.colors.white}
        />
      </TouchableOpacity>
    </MotiView>
  );
}