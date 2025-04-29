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

    return { isGuardActive };
}