
import type {DialogVariant, DialogSize, IconSize} from './types';

  export const VARIANT_CLASSES: Record<DialogVariant, string> = {
    info: 'bg-[#2a2a2a] hover:bg-[#3a3a3a] text-[#9ca3af] hover:text-white',
    accent: 'bg-accent-500/85 text-inverse/85 hover:bg-accent-500/95 hover:text-inverse border-transparent hover:border-border-300',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
  };
  
  // Size Classes
  export const SIZE_CLASSES: Record<DialogSize, string> = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  };
  
  // Icon Size Classes
  export const ICON_SIZE_CLASSES: Record<IconSize, string> = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };
  
  export const DEFAULT_ICON = (size: IconSize) => `
    <svg class="transition-colors duration-200 ${ICON_SIZE_CLASSES[size]}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  `;


  
