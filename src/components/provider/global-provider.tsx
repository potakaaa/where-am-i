// Import React and related hooks
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the position
interface Position {
  lat: number;
  lng: number;
}

// Define the shape of the context data
interface PositionContextType {
  pos: Position;
  setPos: React.Dispatch<React.SetStateAction<Position>>;
}

// Create the context with a default value
const PositionContext = createContext<PositionContextType | undefined>(
  undefined
);

// Create a provider component
interface PositionProviderProps {
  children: ReactNode;
}

export const PositionProvider: React.FC<PositionProviderProps> = ({
  children,
}) => {
  // Initialize `pos` with the desired default position
  const [pos, setPos] = useState<Position>({
    lat: 8.486222296279138,
    lng: 124.65748458467397,
  });

  return (
    <PositionContext.Provider value={{ pos, setPos }}>
      {children}
    </PositionContext.Provider>
  );
};

// Create a custom hook to use the PositionContext
export const usePosition = (): PositionContextType => {
  const context = useContext(PositionContext);
  if (!context) {
    throw new Error("usePosition must be used within a PositionProvider");
  }
  return context;
};
