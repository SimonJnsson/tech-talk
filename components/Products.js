import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

function Products() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const page = Number(router.query.page) || 1;
    setCurrentPage(page);
  }, [router.query.page]);

  useEffect(() => {
    const limit = 9;
    const skip = (currentPage - 1) * limit;
    fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / limit));
      })
      .catch(error => console.log(error));
  }, [currentPage]);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onChange={handlePageChange} />
    </div>
  );
}
export default Products;