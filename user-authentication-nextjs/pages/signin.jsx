import React from "react";

const Signin = () => {
  return (
    <div className="">
      <div className="form-data ">
        <form action="/send-data-here" method="post">
          <label for="first">First name:</label>
          <input type="text" id="first" name="first"  className="border-solid border-2 border-black"/>
          <label for="last">Last name:</label>
          <input type="text" id="last" name="last"className="border-solid border-2 border-black" />
          <button type="submit" className="border-solid border-2 border-black bg-blue-500 mx-10">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;

