import { useContext } from "react";
import { PathContext } from "../context/PathContext";

export const usePathFinding = () => {
    const context = useContext(PathContext);

    if(!context) {
        throw new Error("usePathFinding must be used within a PathFindingProvider");
    }

    return context;
};