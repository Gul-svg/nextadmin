import { User, Product } from "./models";
import { connectToDB } from "./utils";

// export const fetchUsers = async (q, page) => {
//   const regex = new RegExp(q, "i");
//   const ITEM_PER_PAGE = 2;
//   try {
//     connectToDB();
//     const users = await User.find({ username: { $regex: regex } })
//       .limit(ITEM_PER_PAGE)
//       .skip(ITEM_PER_PAGE * (page - 1));

//     // const count = await User.find({ username: { $regex: regex } }).count();
//     count = 6;
//     console.log(users);
//     return { count, users };
//   } catch (error) {
//     console.log(error);
//   }
// };

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();

    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    const count = await User.find({}).countDocuments();

    return { users, count };
  } catch (err) {
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  try {
    connectToDB();

    const user = User.findById(id);

    return user;
  } catch (err) {
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();

    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    const count = await Product.find({}).countDocuments();

    return { products, count };
  } catch (err) {
    throw new Error("Failed to fetch users!");
  }
};
export const fetchProduct = async (id) => {
  try {
    connectToDB();

    const product = Product.findById(id);

    return product;
  } catch (err) {
    throw new Error("Failed to fetch product!");
  }
};
