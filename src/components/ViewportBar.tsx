import React from 'react';
import { Monitor, Tablet, Smartphone, Maximize2, Layers } from 'lucide-react';

export type ViewportMode = 'responsive' | 'desktop' | 'tablet' | 'mobile';

interface ViewportBarProps {
  currentMode: ViewportMode;
  onSetMode: (mode: ViewportMode) => void;
  onOpenAudit: () => void;
}

export const ViewportBar: React.FC<ViewportBarProps> = ({ currentMode, onSetMode, onOpenAudit }) => {
  return (
    <div className="bg-[#09090b] border-b border-[#27272a] text-[#A1A1AA] py-2 px-4 flex items-center justify-between text-xs font-mono z-50">
      <div className="flex items-center gap-2">
        <span className="text-[#C29B38] font-bold">PERENNIAL REDESIGN</span>
        <span className="hidden sm:inline text-[#52525B]">|</span>
        <span className="hidden sm:inline text-[#71717A]">Preview Device Viewport:</span>
      </div>

      {/* Segmented Device Viewport Switcher */}
      <div className="flex items-center gap-1 bg-[#141416] p-1 rounded-lg border border-[#27272a]">
        <button
          onClick={() => onSetMode('responsive')}
          className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
            currentMode === 'responsive'
              ? 'bg-[#27272a] text-[#F4F4F5] font-semibold'
              : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
          }`}
          title="Full Responsive Width"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Full</span>
        </button>

        <button
          onClick={() => onSetMode('desktop')}
          className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
            currentMode === 'desktop'
              ? 'bg-[#27272a] text-[#F4F4F5] font-semibold'
              : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
          }`}
          title="Desktop Baseline 1440px"
        >
          <Monitor className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Desktop (1440px)</span>
        </button>

        <button
          onClick={() => onSetMode('tablet')}
          className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
            currentMode === 'tablet'
              ? 'bg-[#27272a] text-[#F4F4F5] font-semibold'
              : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
          }`}
          title="Tablet 768px"
        >
          <Tablet className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Tablet (768px)</span>
        </button>

        <button
          onClick={() => onSetMode('mobile')}
          className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
            currentMode === 'mobile'
              ? 'bg-[#C29B38] text-black font-semibold'
              : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
          }`}
          title="Mobile 390px (Streamlined Menu & Touch UX)"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mobile (390px)</span>
        </button>
      </div>

      {/* Quick Trigger for Design Strategy Audit */}
      <div>
        <button
          onClick={onOpenAudit}
          className="text-xs text-[#C29B38] hover:text-[#e2be5c] flex items-center gap-1 cursor-pointer font-medium"
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">10-Phase Design Audit</span>
        </button>
      </div>
    </div>
  );
};
