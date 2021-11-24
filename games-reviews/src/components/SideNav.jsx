import React from "react";
import { useState } from "react";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) return <button>OPEN</button>;

  return (
    <div>
      <button>CLOSE</button>
    </div>
  );
}
