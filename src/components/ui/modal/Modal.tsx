import React, {
  FC,
  useRef,
  useEffect,
  useCallback,
  MouseEvent,
  TouchEvent,
} from "react";

// 1. Define TypeScript Props Interface
interface CustomModalProps {
  /** Содержимое, отображаемое внутри модального окна. */
  children: React.ReactNode;
  /** Флаг, управляющий видимостью модального окна. */
  isVisible: boolean;
  /** Функция обратного вызова для скрытия модального окна (аналог onClose). */
  handleVisible: () => void;
}

/**
 * Хук для обнаружения клика вне переданного элемента (для закрытия модалки по клику на фон).
 * Это имитирует поведение MUI Backdrop.
 */
const useOutsideClick = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void
) => {
  // useCallback используется для стабильной ссылки на функцию handler
  const stableHandler = useCallback(handler, [handler]);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Если клик был внутри модального контента, ничего не делаем.
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      // Иначе вызываем обработчик закрытия.
      stableHandler();
    };

    // Добавляем слушатели для мыши и касаний
    document.addEventListener(
      "mousedown",
      listener as unknown as EventListener
    );
    document.addEventListener(
      "touchstart",
      listener as unknown as EventListener
    );

    return () => {
      // Очистка слушателей при размонтировании компонента
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

/**
 * Компонент CustomModal, реализованный на чистом React/TSX с Tailwind CSS.
 * Имитирует внешний вид и анимацию Shadcn Dialog.
 */
const CustomModal: FC<CustomModalProps> = ({
  children,
  isVisible,
  handleVisible,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Memoized функция закрытия
  const handleClose = useCallback(() => {
    handleVisible();
  }, [handleVisible]);

  // 1. Обработка закрытия по клику вне контента (Backdrop click)
  useOutsideClick(contentRef, handleClose);

  // 2. Обработка закрытия по нажатию клавиши Escape (Accessibility)
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

  // Если модалка невидима, не рендерим ничего
  if (!isVisible) return null;

  // Компонент модального окна
  return (
    // Модальный оверлей (Backdrop) - фиксированный, z-50, по центру
    <div
      className="fixed inset-0 bg-white/10   flex items-center justify-center "
      aria-modal="true" // Указывает, что это модальное окно для скрин-ридеров
      role="dialog" // Указывает, что это диалоговое окно
    >
      {/* Контейнер содержимого модалки (ContentBox) */}
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
        // Для демонстрации анимации при рендере, можно использовать CSS-keyframes,
        // но для простоты и соответствия стилю Tailwind лучше использовать его утилиты.
        // Здесь используется инлайн-стиль для имитации быстрого перехода состояния при isVisible=true,
        // так как в чистом React/Tailwind без специальных библиотек анимация входа сложнее.
        // Однако, для соответствия Shadcn/Radix, лучше определить CSS-класс:
        style={{
          animation: "fadeIn 0.3s ease-out",
        }}
      >
        {/* Стиль keyframes для имитации fadeIn */}
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

        {/* Кнопка закрытия "X" */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors rounded-full p-1 hover:bg-gray-100"
          aria-label="Close modal"
        >
          {/* Иконка 'X' (Lucide) */}
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

        {/* Child Content */}
        {children}
      </div>
    </div>
  );
};

export default CustomModal;