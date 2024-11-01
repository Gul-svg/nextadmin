import React from "react";

const Page = async () => {
  const handleForm = async (formdata) => {
    "use server";
    console.log();
  };
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="abdullah" />
        <button>click me</button>
      </form>
    </div>
  );
};

export default Page;
