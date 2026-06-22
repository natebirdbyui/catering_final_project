import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/your-repository-name/",
    server: {
    open: true
    },
    build: {
    rollupOptions: {
        input: {
            home: resolve(__dirname, "index.html"),
            about_us: resolve(__dirname, "src/about_us/about_us.html"),
            menu: resolve(__dirname, "src/menu/menu.html"),
            booking: resolve(__dirname, "src/booking/booking.html"),
            contact_us: resolve(__dirname, "src/contact_us/contact_us.html"),
            cart: resolve(__dirname, "src/cart/cart.html")
            }
        }
    }
});