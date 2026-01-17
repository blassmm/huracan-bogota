"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface LenisWrapperProps {
  children: ReactNode;
}

export default function LenisWrapper({ children }: LenisWrapperProps) {
    return (
      <ReactLenis root>
        {children}
      </ReactLenis>
    );
}