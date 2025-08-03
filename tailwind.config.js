module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Government authority and trust foundation
        primary: {
          DEFAULT: "#1f4e79", // blue-900
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          200: "#bfdbfe", // blue-200
          300: "#93c5fd", // blue-300
          400: "#60a5fa", // blue-400
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1f4e79", // blue-900
        },
        // Secondary Colors - National pride and important highlights
        secondary: {
          DEFAULT: "#ff9933", // orange-400
          50: "#fff7ed", // orange-50
          100: "#ffedd5", // orange-100
          200: "#fed7aa", // orange-200
          300: "#fdba74", // orange-300
          400: "#ff9933", // orange-400
          500: "#f97316", // orange-500
          600: "#ea580c", // orange-600
          700: "#c2410c", // orange-700
          800: "#9a3412", // orange-800
          900: "#7c2d12", // orange-900
        },
        // Accent Colors - Rural prosperity and positive progress
        accent: {
          DEFAULT: "#228b22", // green-600
          50: "#f0fdf4", // green-50
          100: "#dcfce7", // green-100
          200: "#bbf7d0", // green-200
          300: "#86efac", // green-300
          400: "#4ade80", // green-400
          500: "#22c55e", // green-500
          600: "#228b22", // green-600
          700: "#15803d", // green-700
          800: "#166534", // green-800
          900: "#14532d", // green-900
        },
        // Background and Surface Colors
        background: "#f8f9fa", // gray-50 - Clean canvas for focused reading
        surface: "#ffffff", // white - Card elevation and content separation
        
        // Text Colors
        text: {
          primary: "#212529", // gray-900 - Maximum readability for extended forms
          secondary: "#6c757d", // gray-500 - Helpful guidance and secondary information
        },
        
        // Status Colors
        success: {
          DEFAULT: "#28a745", // green-600 - Application progress and positive confirmations
          50: "#f0fdf4", // green-50
          100: "#dcfce7", // green-100
          600: "#28a745", // green-600
        },
        warning: {
          DEFAULT: "#ffc107", // yellow-400 - Important notices without creating alarm
          50: "#fffbeb", // yellow-50
          100: "#fef3c7", // yellow-100
          400: "#ffc107", // yellow-400
        },
        error: {
          DEFAULT: "#dc3545", // red-600 - Clear problem identification with helpful tone
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          600: "#dc3545", // red-600
        },
        
        // Border Colors
        border: {
          DEFAULT: "#e5e7eb", // gray-200
          light: "#f3f4f6", // gray-100
        },
      },
      fontFamily: {
        // Headlines - Perfect Hindi rendering with government document familiarity
        'noto-devanagari': ['Noto Sans Devanagari', 'sans-serif'],
        // Body text - Exceptional mobile readability
        'inter': ['Inter', 'sans-serif'],
        // Default sans fallback
        'sans': ['Inter', 'Noto Sans Devanagari', 'sans-serif'],
      },
      fontWeight: {
        // Noto Sans Devanagari weights
        'noto-light': '300', // Accents - Light weight for subtle government branding
        'noto-normal': '400', // Headlines - Standard weight
        'noto-semibold': '600', // Headlines - Medium emphasis
        'noto-bold': '700', // Headlines - Strong emphasis
        
        // Inter weights
        'inter-normal': '400', // Body - Standard readability
        'inter-medium': '500', // Body - Slight emphasis
        'inter-semibold': '600', // CTAs - Strong action hierarchy
      },
      boxShadow: {
        // Government standard elevation
        'government': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        // Consistent modern feel without being too casual
        'government': '4px',
      },
      transitionDuration: {
        // Standard government interface timing
        '300': '300ms',
      },
      transitionTimingFunction: {
        // Smooth, professional transitions
        'government': 'ease-in-out',
      },
      spacing: {
        // Government form spacing standards
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}