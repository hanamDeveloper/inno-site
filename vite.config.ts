import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/** Figma Make 전용 `figma:asset/...` 모듈을 로컬 Vite에서 쓸 수 있게 플레이스홀더로 연결 */
function figmaAssetFallback(): Plugin {
  const placeholder = path.resolve(__dirname, 'public/figma-placeholder.png')
  return {
    name: 'figma-asset-fallback',
    enforce: 'pre',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        return placeholder
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetFallback(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
