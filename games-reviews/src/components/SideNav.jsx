import React from "react";
import { useState } from "react";

export default function SideNav({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen)
    return (
      <div className="sidenav">
        <div className="sidenav-button">
          <button
            className="sidenav-open"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            OPEN
          </button>
        </div>
      </div>
    );

  return (
    <div className="sidenav">
      <div className="sidenav-button">
        <button
          className="sidenav-close"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          CLOSE
        </button>
      </div>
      <div className="popout">{children}</div>
    </div>
  );
}
