import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";

export const CreatePage = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");

  const pressHandler = async (event) => {
    if (event.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          { from: link },
          { Authorization: `Bearer ${auth.token}` }
        );
        navigate(`/details/${data.link._id}`);
      } catch (error) {}
    }
  };

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}>
        <div className="input-field">
          <input
            //   placeholder="Enter link"
            id="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyDown={pressHandler}
          />
          <label htmlFor="link">Enter a link</label>
        </div>
      </div>
    </div>
  );
};
