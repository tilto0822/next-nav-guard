"use client";

import Link from "next/link";
import React, { useCallback, useRef } from "react";
import { ComponentProps } from "react";
import { useNavigationGuardStatus } from "../hooks/useNavigationGuardStatus";

export interface GuardLinkProps extends Omit<ComponentProps<typeof Link>, "ref" | "as"> {
    // for apply custom Link wrapper component (ex. next-i18n)
    as?: typeof Link;
}

/**
 * works on next.js 15.3+
 */
export function GuardLink({children, href, onNavigate, as, ...props}: GuardLinkProps) {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const passGuardRef = useRef<boolean>(false);
    const LinkComp = as || Link;

    const { isGuardActive, dryGuard } = useNavigationGuardStatus({
        to: href.toString()
    });
    
    const handleNavigate = useCallback(async (e: {preventDefault: () => void}) => {
        if (isGuardActive() && !passGuardRef.current) {
            e.preventDefault();
            const blocked = await dryGuard();
            if (!blocked) {
                onNavigate?.(e);
                passGuardRef.current = true;
                linkRef.current?.click();
            }
            return;
        } else {
            onNavigate?.(e);
        }
    }, [isGuardActive, onNavigate, dryGuard]);

    return (
        <LinkComp href={href} onNavigate={handleNavigate} ref={linkRef} {...props}>
            {children}
        </LinkComp>
    );
}