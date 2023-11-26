import { useLocation } from "react-router-dom";

const useParams = () => {
    const location = useLocation();
    const search = location.search;
    const params = new URLSearchParams(search);
    return params;
}

export default useParams;