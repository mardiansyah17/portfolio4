"use client";

import { FC, ReactNode, useEffect, useRef, useState } from "react";

const AnimatedSection: FC<AnimatedSectionProps> = ({ children, className }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <section
      ref={ref}
      id={className}
      className={`min-h-screen flex flex-col justify-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;

const useOnScreen = (
  options?: IntersectionObserverInit
): [React.RefObject<HTMLElement>, boolean] => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}
