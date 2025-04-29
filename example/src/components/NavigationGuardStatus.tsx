"use client";

import { useNavigationGuardStatus } from "next-naviguard";

export function NavigationGuardStatus() {
    const { isGuardActive } = useNavigationGuardStatus();

    return <button type="button" onClick={() => {
        const status = isGuardActive();
        alert(`Navigation guard is ${status ? "active" : "inactive"}`);
    }}>Check guard status</button>
}