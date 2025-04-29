"use client";

import { useNavigationGuardStatus } from "next-nav-guard";

export function NavigationGuardStatus() {
    const { isGuardActive } = useNavigationGuardStatus();

    return <button type="button" onClick={() => {
        const status = isGuardActive();
        alert(`Navigation guard is ${status ? "active" : "inactive"}`);
    }}>Check guard status</button>
}