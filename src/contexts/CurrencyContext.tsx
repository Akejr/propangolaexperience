import React, { createContext, useContext, useState, ReactNode } from 'react';

type CurrencyType = 'USD' | 'EUR' | 'AOA';

interface CurrencyContextType {
  currency: CurrencyType;
  setCurrency: (currency: CurrencyType) => void;
  formatPrice: (price: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

interface CurrencyProviderProps {
  children: ReactNode;
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [currency, setCurrency] = useState<CurrencyType>('USD');

  const exchangeRates = {
    USD: 1,
    EUR: 0.92, // 1 USD = 0.92 EUR
    AOA: 832.50 // 1 USD = 832.50 AOA (Kwanza)
  };

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    AOA: 'Kz'
  };

  const formatPrice = (priceInUSD: number): string => {
    const convertedPrice = priceInUSD * exchangeRates[currency];
    const symbol = currencySymbols[currency];
    
    if (currency === 'AOA') {
      return `${symbol} ${Math.round(convertedPrice).toLocaleString()}`;
    }
    
    return `${symbol}${convertedPrice.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}; 