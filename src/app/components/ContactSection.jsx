"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoNorthStar } from "react-icons/go";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import InputField from "./ui/InputField";
// emailjs
// import emailjsconfig from "../constants/emailjs.json";
import emailjs from "@emailjs/browser";
// framer
import * as motion from "motion/react-client";
import { useAnimation, useInView } from "motion/react";
export default function ContactSection() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();
  const [fieldValues, setFieldValues] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleInputChange = (stateKey, value) => {
    setFieldValues({
      ...fieldValues,
      [stateKey]: value,
    });
  };

  const inputFields = [
    {
      label: "Name",
      type: "text",
      id: "name",
      placeholder: "Your name *",
      stateKey: "name",
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      placeholder: "Email address *",
      stateKey: "email",
    },
  ];

  const inputMessageField = [
    {
      label: "Message",
      type: "textarea",
      id: "message",
      placeholder: "Your message",
      rows: "8",
      wrap: "soft",
      stateKey: "message",
    },
  ];
  const sendEmail = async () => {
    setLoading(true);
    setErrorMessage("");
    const requiredFields = ["name", "email", "message"];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const missingFields = requiredFields.filter((field) => !fieldValues[field]);
    if (missingFields.length > 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      clearTimeout();
      setLoading(false);
      setErrorMessage("Please fill in all requiered fields");
      return;
    }

    if (!emailRegex.test(fieldValues.email)) {
      setErrorMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    }
    try {
      const serviceId = process.env.NEXT_PUBLIC_SERVICEID;
      const templateid = process.env.NEXT_PUBLIC_TEMPLATEID;
      const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY;
      const templateParams = {
        name: fieldValues.name,
        email: fieldValues.email,
        message: fieldValues.message,
      };
      const response = await emailjs.send(
        serviceId,
        templateid,
        templateParams,
        publicKey,
      );
      setLoading(false);
      setFieldValues("");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      clearTimeout();
      console.log("Email sent successfully:", response);
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Something went wrong. Try again");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section id="contact" className="pt-30 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={containerRef}
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="py-10 sm:py-12.5 md:py-20 px-10 md:px-20 xl:px-25 border-2 rounded-2xl bg-[#faf8ff]"
        >
          <div className="flex justify-center mb-5">
            <h3 className="uppercase border-2 py-1 px-5 rounded-full flex items-center gap-2 font-medium bg-[#e3f2ff]">
              <GoNorthStar />
              Contact
            </h3>
          </div>
          <h2 className="text-center font-medium text-3xl md:text-5xl mb-10">
            Got a project in mind<span className="font-sans">?</span>{" "}
            <br className="hidden sm:block" />
            Let's get in touch.
          </h2>
          <div className="relative">
            {loading && (
              <div className="absolute inset-0 bg-white/70 flex justify-center items-center">
                <AiOutlineLoading3Quarters className="animate-spin text-5xl sm:text-6xl" />
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-10 mb-10">
              {inputFields.map((field, id) => (
                <InputField
                  key={id}
                  field={field}
                  fieldValues={fieldValues}
                  handleInputChange={handleInputChange}
                  errorMessage={errorMessage}
                />
              ))}
            </div>
            {inputMessageField.map((field, id) => (
              <div key={id}>
                <label htmlFor="" className="text-gray-500">
                  {field.label}
                </label>
                <textarea
                  name={field.id}
                  id={field.id}
                  value={fieldValues[field.stateKey] || ""}
                  onChange={(e) =>
                    handleInputChange(field.stateKey, e.target.value)
                  }
                  placeholder="Tell me about your project *"
                  className={`w-full outline-0 border-b-2 placeholder:font-sans font-sans focus:border-[#8e83ed] placeholder:text-[#08070e] placeholder:text-lg placeholder:font-light h-30 mb-3 ${errorMessage && "border-pink-500"}`}
                ></textarea>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-5">
            {success && (
              <div className="text-2xl font-light text-[#77dd76]">
                Email sent!
              </div>
            )}
            {errorMessage && <p className="text-pink-500">{errorMessage}</p>}
            <button
              onClick={sendEmail}
              disabled={loading}
              className={`py-3 px-7.5 rounded-xl border-2 text-lg font-medium shadow-[0_5px_#08070e] active:shadow-none cursor-pointer active:translate-y-2 disabled:cursor-not-allowed ${error ? "animate-shake" : ""}`}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
