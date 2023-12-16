import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onNameChanged = (e) => setName(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onPhoneChanged = (e) => setPhone(e.target.value);
  const onMessageChanged = (e) => setMessage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(message);

    const response = await axios.post(
      "https://2mdv0xqa3d.execute-api.us-east-1.amazonaws.com/default/severlessAppFunction",
      {
        key1: `${name}`,
        key2: `${email}`,
        key3: `${phone}`,
        key4: `${message}`,
      }
    );

    console.log(response.data);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="font-[sans-serif] max-w-6xl mx-auto">
      <div className="bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] my-6 p-8 rounded">
        <h2 className="text-2xl text-[#333] font-extrabold text-center mb-12">
          Contact Us
        </h2>
        <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded py-3 px-4 text-sm focus:outline-blue-600"
              id="name"
              name="name"
              onChange={onNameChanged}
              value={name}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded py-3 px-4 text-sm focus:outline-blue-600"
              id="email"
              name="email"
              onChange={onEmailChanged}
              value={email}
            />
            <input
              type="text"
              placeholder="Phone No."
              className="w-full border rounded py-3 px-4 text-sm focus:outline-blue-600"
              id="phone"
              name="phone"
              onChange={onPhoneChanged}
              value={phone}
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full border rounded px-4 text-sm pt-3 focus:outline-blue-600"
              id="message"
              name="message"
              onChange={onMessageChanged}
              value={message}
            ></textarea>
            <button
              type="submit"
              className="text-white w-full bg-blue-600 hover:bg-blue-700 font-semibold rounded text-sm px-6 py-3"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
