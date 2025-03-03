function Pagination({pageInfo, handlePageChange}) {
    return (
        <div className="d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${!pageInfo.has_pre && 'disabled'}`}>
                        <a onClick={() => handlePageChange(pageInfo.current_page-1)} className="page-link" href="#">
                            上一頁
                        </a>
                    </li>
                    {/* 透過tatal_pages的長度來產生相對應長度的陣列 ，再透過map渲染出來 */}
                    {Array.from({ length: pageInfo.total_pages}).map((_, index) => (
                    <li key={index} className={`page-item ${pageInfo.current_page === index+1 && 'active'}`}>
                        <a onClick={() => handlePageChange(index+1)} className="page-link" href="#">
                        {/* index從0開始，要加1 */}
                        {index+1} 
                        </a>
                    </li>
                    ))} 
                    <li className={`page-item ${!pageInfo.has_next && 'disabled'}`}>
                        <a onClick={() => handlePageChange(pageInfo.current_page+1)} className="page-link" href="#">
                            下一頁
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination