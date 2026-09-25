import React from "react";
import { NavLink } from "react-router-dom";

const DwLink = () => {
  return (
    <section className="dwlink-wrapper">
      <nav className="dwlink-nav" aria-label="Primary navigation">
        <NavLink
          end
          className={({ isActive }) =>
            isActive ? "dwlink-link active" : "dwlink-link"
          }
          to="/product"
        >
          Product
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "dwlink-link active" : "dwlink-link"
          }
          to="/product/create"
        >
          Create Product
        </NavLink>
        <NavLink
          end
          className={({ isActive }) =>
            isActive ? "dwlink-link active" : "dwlink-link"
          }
          to="/user"
        >
          User
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "dwlink-link active" : "dwlink-link"
          }
          to="/user/create"
        >
          Create User
        </NavLink>
        <NavLink
          end
          className={({ isActive }) =>
            isActive ? "dwlink-link active" : "dwlink-link"
          }
          to="/review"
        >
          Review
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "dwlink-link active" : "dwlink-link"
          }
          to="/review/create"
        >
          Create Review
        </NavLink>
      </nav>
    </section>
  );
};

export default DwLink;
