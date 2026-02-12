// src/components/ui/Button.jsx
import React from "react";

const variants = {
  primary: "bg-[#008BD1] text-white hover:bg-[#006fa8]",
  secondary: "bg-[#6BD825] text-black hover:bg-[#5bbf1f]",
  cta: "bg-[#00F8F0] text-black hover:bg-[#00d6d0]",
  outline: "border border-[#008BD1] text-[#008BD1] hover:bg-[#008BD1] hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-6 py-2 rounded-xl font-semibold tracking-wide transition-all duration-200 shadow-md ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
