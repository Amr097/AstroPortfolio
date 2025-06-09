

export const VARIANT_CLASSES = {
    info: 'bg-[#2a2a2a] hover:bg-[#3a3a3a] text-[#9ca3af] hover:text-white',
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
  } as const;
  
  export const SIZE_CLASSES = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  } as const;
  
  export const ICON_SIZE_CLASSES = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  } as const;
  
  export const DEFAULT_ICON = (size: keyof typeof ICON_SIZE_CLASSES) => `
    <svg class="transition-colors duration-200 ${ICON_SIZE_CLASSES[size]}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  `;


  
