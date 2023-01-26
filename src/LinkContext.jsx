import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { uid } from "uid";

const linksContext = React.createContext();

const getLinks = () => {
  const Links = localStorage.getItem("Links");
  if (Links) {
    return JSON.parse(localStorage.getItem("Links"));
  } else {
    return [];
  }
};

export const LinkProvider = ({ children }) => {
  const [data, setData] = useState(getLinks());
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Alert, setAlert] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("Links", JSON.stringify(data));
  }, [data]);

  const fetchLink = async (link) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );

      const shortLinks = response.data.result.full_short_link;
      let originalLinks = response.data.result.original_link;
      let newLink = {
        originalLink: originalLinks,
        shortLink: shortLinks,
        id: uid(),
      };
      let newData = [...data, newLink];
      setData(newData);
      setLoading(false);
      setText("");
    } catch (error) {
      setLoading(false);
      setAlert(true);
    }
  };

  const deleteHandle = (e) => {
    let currentElementId = e.target.dataset.id;
    let newdata = [...data];
    const deleteLink = newdata.filter((item) => item.id !== currentElementId);
    setData(deleteLink);
  };

  return (
    <linksContext.Provider
      value={{
        show,
        text,
        setShow,
        setText,
        loading,
        fetchLink,
        data,
        Alert,
        setAlert,
        deleteHandle,
      }}
    >
      {children}
    </linksContext.Provider>
  );
};

export const useCommentContext = () => {
  return useContext(linksContext);
};
