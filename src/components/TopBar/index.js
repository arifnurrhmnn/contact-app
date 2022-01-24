import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const TopBar = ({ searchValue }) => {
  return (
    <>
      <section className="topbar container">
        <Link to="/add-contact">
          <button className="btn-add">Tambah Kontak</button>
        </Link>
        <div className="search-book">
          <input
            type="text"
            placeholder="Cari kontak..."
            onChange={(e) => {
              searchValue(e.target.value);
            }}
          />
        </div>
        <div className="dropdown dropdown-sort">
          <button className="dropbtn">
            Urutkan <Icon icon="ant-design:caret-down-outlined" height="14" />
          </button>
          <div className="dropdown-content">
            <a href="/#">A sampai Z</a>
            <a href="/#">Z sampai A</a>
          </div>
        </div>
        <div className="dropdown dropdown-sort">
          <button className="dropbtn">
            Filter <Icon icon="ant-design:caret-down-outlined" height="14" />
          </button>
          <div className="dropdown-content">
            <a href="/#">Aktif</a>
            <a href="/#">Tidak aktif</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBar;
