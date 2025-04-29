"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { ComponentProps } from "react";
import { useNavigationGuardStatus } from "../hooks/useNavigationGuardStatus";

export interface GuardLinkProps extends Omit<ComponentProps<typeof Link>, "ref"> {}

/**
 * works on next.js 15.3+
 */
export function GuardLink({children, href, onNavigate, ...props}: GuardLinkProps) {
    const linkRef = useRef<typeof Link>();
    
    const { isGuardActive } = useNavigationGuardStatus({
        to: href.toString()
    });
    
    return (
        <Link href={href} onNavigate={(e) => {
            if (isGuardActive()) {
                e.preventDefault();
            }
            if (onNavigate) {
                onNavigate(e);
            }
        }} ref={linkRef} {...props}>
            {children}
        </Link>
    );
}