import { useState } from 'react';

const usePagination = (length = 0, size = 10) => {
    const [page, setPage] = useState(1);

    const pages = Math.ceil(length / size);

    return { pages, page, setPage }
}
export default usePagination;