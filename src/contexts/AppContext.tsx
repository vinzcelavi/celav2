import { type ReactNode, createContext, useContext, useState } from 'react';
import '@fontsource/mada/400.css';
import '@fontsource/mada/500.css';
import '@fontsource/mada/600.css';
import '@fontsource/mada/700.css';
import '@fontsource/mada/800.css';
import '@fontsource/mada/900.css';

// Create a context to manage `helloThereIsOpen`
interface AppContextType {
  helloThereIsOpen: boolean;
  setHelloThereIsOpen: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider to wrap the components that need to access `helloThereIsOpen`
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [helloThereIsOpen, setHelloThereIsOpen] = useState<boolean>(false);

  return <AppContext.Provider value={{ helloThereIsOpen, setHelloThereIsOpen }}>{children}</AppContext.Provider>;
};

// Create a hook to use the context easily
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
