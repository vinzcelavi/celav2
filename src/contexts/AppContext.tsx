import { type ReactNode, createContext, useContext, useState } from 'react';

// Create a context to manage `isOpen`
interface AppContextType {
  helloThereIsOpen: boolean;
  setHelloThereIsOpen: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider to wrap the components that need to access `isOpen`
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
