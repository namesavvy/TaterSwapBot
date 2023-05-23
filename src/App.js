import React from 'react';
import { darkTheme, lightTheme, Theme, SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';

const myLightTheme = {
  ...lightTheme, // Extend the lightTheme
  accent: '#FF007A',
  primary: '#000000',
  secondary: '#565A69',
};

const myDarkTheme = {
  ...darkTheme, // Extend the darkTheme
  accent: '#2172E5',
  primary: '#FFFFFF',
  secondary: '#888D9B',
};

let darkMode = true;

// Add your custom JSON-RPC endpoint
const jsonRpcUrlMap = {
  11155111: ['https://rpc.sepolia.dev'],  // Sepolia network
};

function App() {
  return (
    <div className="Uniswap">
      <SwapWidget theme={darkMode ? myDarkTheme : myLightTheme} jsonRpcUrlMap={jsonRpcUrlMap} />
    </div>
  );
}

export default App;
