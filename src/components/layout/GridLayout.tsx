"use client";

import React, { useEffect, useState } from "react";

interface GridLayoutProps {
  children: React.ReactNode;
  showGrid?: boolean; // Optionally show grid overlay for dev/design
}

export function GridLayout({ children, showGrid = false }: GridLayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="grid-layout">
      {showGrid && (
        <div className="grid-layout-overlay">
          {/* Vertical grid lines */}
          <div className="grid-layout-vertical-lines">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i}></div>
            ))}
          </div>
          {/* Horizontal grid lines */}
          <div className="grid-layout-horizontal-lines">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i}></div>
            ))}
          </div>
          {/* Edge borders */}
          <div className="grid-layout-edge-borders">
            <div className="grid-layout-edge-borders-inner">
              <div className="grid-layout-edge-border left"></div>
              <div className="grid-layout-edge-border right"></div>
            </div>
          </div>
        </div>
      )}
      <div className="grid-layout-content">{children}</div>
    </div>
  );
}