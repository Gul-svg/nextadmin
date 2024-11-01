"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { genSalt, hash } from "bcrypt";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);
    connectToDB();
    const newUser = new User({
      username,
      email,
      password: hashPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (error) {
    throw new Error("failed to create user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  console.log(username, id);
  console.log("in the update users");
  try {
    connectToDB();
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error("failed to update user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error("failed to update product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/users");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  typeof id;
  try {
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/products");
};
