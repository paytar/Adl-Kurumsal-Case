import { useEffect, useState } from "react";
import { fetchProductImages } from "../api/products";

export default function Home() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    fetchProductImages("tshirt", 8).then((data) => setImages(data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div className="products">
        {images.map((item) => (
          <img key={item.id} src={item.url} width={200} />
        ))}
      </div>
    </div>
  );
}
