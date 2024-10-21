import cn from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import reactDom from 'react-dom';
import { create } from 'zustand';
import { useShallow } from 'zustand/shallow';

interface ToastStore {
  toastList: Set<string>;
  show: (toastId: string) => void;
  close: (toastId: string) => void;
  closeAll: () => void;
}

const useToastStore = create<ToastStore>((set, get) => ({
  toastList: new Set<string>(),
  show(toastId: string) {
    const { toastList } = get();

    const newToastList = new Set(toastList);
    newToastList.add(toastId);

    set({
      toastList: newToastList
    });
  },
  close(toastId: string) {
    const { toastList } = get();

    const newToastList = new Set(toastList);
    newToastList.delete(toastId);

    set({
      toastList: newToastList
    });
  },
  closeAll() {
    const newToastList = new Set();
    set({
      toastList: newToastList as Set<string>
    });
  }
}));

interface ToastProps {
  uniqueId: string;
  config?: {
    duration?: number;
    role?: string;
  };
  className?: string;
  children: React.ReactNode;
}

export function Toast({ uniqueId, config = {}, className, children }: ToastProps) {
  const { duration = 3500, role = 'status' } = config;

  const { toastList, close } = useToastStore(
    useShallow((store: ToastStore) => ({
      toastList: store.toastList,
      close: store.close
    }))
  );

  const isShown = toastList.has(uniqueId);

  useEffect(() => {
    if (!duration || !isShown) {
      return;
    }

    const timeoutId = setTimeout(() => {
      close(uniqueId);
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [uniqueId, isShown, duration, close]);

  if (typeof window !== 'undefined') {
    return reactDom.createPortal(
      <AnimatePresence>
        {isShown && (
          <motion.div
            key={uniqueId}
            layout
            role={role}
            initial={{ opacity: 0, y: isMobile ? 50 : -50, scale: 0.6 }}
            animate={{ opacity: 1, y: isMobile ? -5 : 38, scale: 1 }}
            exit={{ opacity: 0, y: isMobile ? 50 : -50, scale: 0.6 }}
            className={cn('toast', className)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>,
      document.querySelector('#toasts-portal') as Element
    );
  }
}

export function useToastControls() {
  const controls = useToastStore(
    useShallow(
      (store: { show: (toastId: string) => void; close: (toastId: string) => void; closeAll: () => void }) => ({
        show: store.show,
        close: store.close,
        closeAll: store.closeAll
      })
    )
  );

  return controls;
}
