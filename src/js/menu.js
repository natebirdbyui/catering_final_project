//menu.js

import { displayMenuItems } from "./menuDisplay.js";
import { initOrderSystem } from "./order.js";

console.log("menu.js loaded");

const BASE = import.meta.env.BASE_URL;

export async function loadMenu() {
    try {
        const res = await fetch(`${BASE}data/menu.json`);

        if (!res.ok) {
            throw new Error("Failed to load menu.json");
        }

        const data = await res.json();
        return data.menu;

    } catch (err) {
        console.error("Menu load error:", err);
        return [];
    }
}
