import React, {
  FC,
  useRef,
  useEffect,
  useCallback,
  MouseEvent,
  TouchEvent,
} from "react";

interface CustomModalProps {
  children: React.ReactNode;
  isVisible: boolean;
  handleVisible: () => void;
}

const useOutsideClick = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void
) => {
  const stableHandler = useCallback(handler, [handler]);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      
      stableHandler();
    };

    document.addEventListener(
      "mousedown",
      listener as unknown as EventListener
    );
    document.addEventListener(
      "touchstart",
      listener as unknown as EventListener
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        listener as unknown as EventListener
      );
      document.removeEventListener(
        "touchstart",
        listener as unknown as EventListener
      );
    };
  }, [ref, stableHandler]);
};

const CustomModal: FC<CustomModalProps> = ({
  children,
  isVisible,
  handleVisible,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    handleVisible();
  }, [handleVisible]);

  useOutsideClick(contentRef, handleClose);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    if (isVisible) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, handleClose]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-white/10   flex items-center justify-center "
      aria-modal="true" 
      role="dialog" 
    >
      <div
        ref={contentRef}
        className="
          relative z-50
          max-w-lg w-[90vw] md:w-full // Адаптивная ширина
          bg-white // Фон
          p-6 sm:p-8 // Отступы (padding)
          rounded-xl // Закругленные углы (10px)
           shadow-gray-900/20 // Тень (аналог 0 8px 32px rgba(0,0,0,0.18))
          flex flex-col items-center justify-center // Центрирование содержимого
          
          // Анимация входа (имитация fadeIn: opacity 0, translateY(-6px) -> opacity 1, translateY(0))
          transition-all duration-300 ease-out 
          transform translate-y-0 opacity-100 animate-fade-in
        "
        style={{
          animation: "fadeIn 0.3s ease-out",
        }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-6px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `,
          }}
        />

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors rounded-full p-1 hover:bg-gray-100"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {children}
      </div>
    </div>
  );
};

export default CustomModal;