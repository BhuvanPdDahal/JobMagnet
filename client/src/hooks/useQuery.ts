import { useLocation } from "react-router-dom";

const useParams = () => {
    const location = useLocation();
    const search = location.search;
    const params = new URLSearchParams(search);
    const title = params.get("title");
    const tag = params.get("tag");
    const name = params.get("name");
    const email = params.get("email");
    const query = { title, tag, name, email };
    return query;
}

export default useParams;