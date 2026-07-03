//menu.js

import { displayMenuItems } from "./menuDisplay.js";
import { initOrderSystem } from "./order.js";

const BASE = import.meta.env.BASE_URL;

console.log("menu.js loaded");

export async function loadMenu() {
    try {
        console.log("Fetching menu from:", `${BASE}data/menu.json`);

        const res = await fetch(`${BASE}data/menu.json`);

        if (!res.ok) {
            throw new Error("Failed to load menu.json");
        }

        const data = await res.json();

        // DEBUG
        console.log("RAW MENU JSON:", data);

        return data.menu;

    } catch (err) {
        console.error("Menu load error:", err);
        return [];
    }
}