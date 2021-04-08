import { useLocation } from "react-router-dom";
export const useURLParams = () => new URLSearchParams(useLocation().search);
