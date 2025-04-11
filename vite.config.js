import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
    },
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg'],
    server: {
      host : true, // Permite el acceso desde otras maquinas en la red local
      // port : 3000, Cambia el puerto a 3000
    }
  },
});
