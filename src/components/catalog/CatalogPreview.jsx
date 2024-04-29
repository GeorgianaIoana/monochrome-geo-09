'use client';
import { ProductTile } from './ProductTile';

export function CatalogPreview(products) {
  const { productTiles = [] } = products;

  return (
    <>
      <ul>
        {productTiles.map((productTile, index) => {
          return (
            <li className="product-tile" key={index}>
              <ProductTile products={productTile}></ProductTile>
            </li>
          );
        })}
      </ul>
    </>
  );
}
