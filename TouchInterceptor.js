import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

const TouchInterceptor = ({ buttons }) => {
  const [touchedButton, setTouchedButton] = useState(null);

  const handleTouch = (buttonId) => {
    setTouchedButton(buttonId);
  };

  const handleRelease = () => {
    if (touchedButton) {
      // Lógica específica para cada botão
      console.log(`Botão ${touchedButton} pressionado`);
      setTouchedButton(null);
    }
  };

  return (
    <View
      style={{ flex: 1 }}
      onTouchStart={handleRelease}
      onTouchEnd={handleRelease}
      onTouchCancel={handleRelease}
    >
      {buttons.map((button) => (
        <TouchableOpacity
          key={button.id}
          onPress={() => handleTouch(button.id)}
          style={{ position: 'absolute', ...button.style }}
        />
      ))}
    </View>
  );
};

export default TouchInterceptor;