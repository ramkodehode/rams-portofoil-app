import { useEffect, useState } from "react";
import emailjs from "emailjs";

const useForm = (callback, validate) => {
  const [result, showResult] = useState(false);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
};
