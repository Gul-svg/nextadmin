import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import { fetchProduct } from "@/app/lib/data";
import { updateProduct } from "@/app/lib/actions";
const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infocontainer}>
        <div className={styles.imagecontainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formcontainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />

          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />

          <label>price</label>
          <input type="number" name="price" placeholder={product.price} />

          <label>stock</label>
          <input type="number" name="stock" placeholder={product.stock} />

          <label>color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />

          <label>size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size || "size"}
          />

          <label>cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>isActive</label>
          <textarea name="desc" id="desc" placeholder={product.desc}></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
