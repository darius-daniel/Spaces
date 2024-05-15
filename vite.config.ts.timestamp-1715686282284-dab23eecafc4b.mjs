// vite.config.ts
import { defineConfig } from "file:///home/darius/Scripts/Spaces/node_modules/vite/dist/node/index.js";
import { getDirname } from "file:///home/darius/Scripts/Spaces/node_modules/@adonisjs/core/build/src/helpers/main.js";
import inertia from "file:///home/darius/Scripts/Spaces/node_modules/@adonisjs/inertia/build/src/plugins/vite.js";
import react from "file:///home/darius/Scripts/Spaces/node_modules/@vitejs/plugin-react/dist/index.mjs";
import adonisjs from "file:///home/darius/Scripts/Spaces/node_modules/@adonisjs/vite/build/src/client/main.js";
var __vite_injected_original_import_meta_url = "file:///home/darius/Scripts/Spaces/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    inertia({ ssr: { enabled: true, entrypoint: "inertia/app/ssr.tsx" } }),
    react(),
    adonisjs({ entrypoints: ["inertia/app/app.tsx"], reload: ["resources/views/**/*.edge"] })
  ],
  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      "~/": `${getDirname(__vite_injected_original_import_meta_url)}/inertia/`
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9kYXJpdXMvU2NyaXB0cy9TcGFjZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2Rhcml1cy9TY3JpcHRzL1NwYWNlcy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9kYXJpdXMvU2NyaXB0cy9TcGFjZXMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IGdldERpcm5hbWUgfSBmcm9tICdAYWRvbmlzanMvY29yZS9oZWxwZXJzJztcbmltcG9ydCBpbmVydGlhIGZyb20gJ0BhZG9uaXNqcy9pbmVydGlhL2NsaWVudCc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IGFkb25pc2pzIGZyb20gJ0BhZG9uaXNqcy92aXRlL2NsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBpbmVydGlhKHsgc3NyOiB7IGVuYWJsZWQ6IHRydWUsIGVudHJ5cG9pbnQ6ICdpbmVydGlhL2FwcC9zc3IudHN4JyB9IH0pLFxuICAgIHJlYWN0KCksXG4gICAgYWRvbmlzanMoeyBlbnRyeXBvaW50czogWydpbmVydGlhL2FwcC9hcHAudHN4J10sIHJlbG9hZDogWydyZXNvdXJjZXMvdmlld3MvKiovKi5lZGdlJ10gfSksXG4gIF0sXG5cbiAgLyoqXG4gICAqIERlZmluZSBhbGlhc2VzIGZvciBpbXBvcnRpbmcgbW9kdWxlcyBmcm9tXG4gICAqIHlvdXIgZnJvbnRlbmQgY29kZVxuICAgKi9cbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnfi8nOiBgJHtnZXREaXJuYW1lKGltcG9ydC5tZXRhLnVybCl9L2luZXJ0aWEvYCxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1RLFNBQVMsb0JBQW9CO0FBQ2hTLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sYUFBYTtBQUNwQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxjQUFjO0FBSnlJLElBQU0sMkNBQTJDO0FBTS9NLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxNQUFNLFlBQVksc0JBQXNCLEVBQUUsQ0FBQztBQUFBLElBQ3JFLE1BQU07QUFBQSxJQUNOLFNBQVMsRUFBRSxhQUFhLENBQUMscUJBQXFCLEdBQUcsUUFBUSxDQUFDLDJCQUEyQixFQUFFLENBQUM7QUFBQSxFQUMxRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxNQUFNLEdBQUcsV0FBVyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
