import { useState } from 'react';

import './Pagination.css';

const Pagination = ({ pages, page, setPage }) => {
    // const [page, setPage] = useState();
    // const [perPage, setPerPage] = useState(10);

    // const pages = Math.ceil(length / perPage);

    return pages > 0 && <div className='pagination'>
        {[...Array(pages).keys()].map(number => <button key={number} className={`pageNumber btn ${page === number ? 'active' : ''}`} onClick={() => setPage(number)}>{number + 1}</button>)}
    </div>
}
export default Pagination;