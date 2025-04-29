import { useCallback, useContext } from "react";
import { NavigationGuardProviderContext } from "../components/NavigationGuardProviderContext";

export function useNavigationGuardStatus(props?: {
    to?: string;
}) {
    const guardMapRef = useContext(NavigationGuardProviderContext);
    if (!guardMapRef)
        throw new Error(
            "useNavigationGuardStatus must be used within a NavigationGuardProvider"
        );

    const isGuardActive = useCallback(() => {
        const defs = [...guardMapRef.current.values()];
        let active = false;

        for (const { enabled } of defs) {
            if (enabled({ to: props?.to || "NNG_CHECK", type: 'push'})) {
                active = true;
                break;
            }
        }

        return active;
    }, [guardMapRef.current]);

    /**
     * run all defs guard with dry run (type push)
     * use for call guard without navigation
     * @returns true if any guard is blocked
     */
    const dryGuard = useCallback(async () => {
        const defs = [...guardMapRef.current.values()];

        const target = props?.to || "NNG_CHECK";
        
        for (const { enabled, callback } of defs) {
            if (enabled({ to: target, type: 'push' })) {
                const result = await callback({ to: target, type: 'push' });
                if (!result) {
                    return true;
                }
            }
        }

        return false;
    }, [guardMapRef.current]);

    return { isGuardActive, dryGuard };
}