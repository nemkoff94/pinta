module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Stricter, unified palette
        'primary': '#1f2937',     // charcoal / headings
        'muted': '#6b7280',       // muted text
        'accent': '#b88b2f',      // restrained gold accent
        'accent-500': '#d6a84a',  // brighter accent for subtle highlights
        'background': '#f5f3f1',  // light warm background
        'card': '#ffffff'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
