import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { fetchUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/actions";
const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infocontainer}>
        <div className={styles.imagecontainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formcontainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>username</label>
          <input type="text" name="username" placeholder={user.username} />

          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />

          <label>password</label>
          <input type="password" name="password" placeholder="********" />

          <label>phone</label>
          <input type="text" name="phone" placeholder={user.phone} />

          <label>address</label>
          <textarea type="text" name="address" placeholder={user.address} />

          <label>is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>

          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
