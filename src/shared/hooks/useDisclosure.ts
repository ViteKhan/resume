import { useState, useCallback } from "react";

export const useDisclosure = (defaultValue: boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultValue);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { isOpen, onClose, onOpen, onToggle };
};
