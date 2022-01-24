import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { deleteContact, detailContact } from "store/contact/action";
import { useDispatch } from "react-redux";

const CardContact = (data) => {
  const { name, phone, id } = data;
  const dispatch = useDispatch();

  return (
    <>
      <div className="card-contact">
        <h3 className="card-name">{name}</h3>
        <p className="card-number">{phone}</p>
        <div className="button-action">
          <Link to={"/update-contact/" + id}>
            <button
              className="btn-edit"
              onClick={() => dispatch(detailContact(data))}
            >
              <Icon
                icon="heroicons-outline:pencil"
                className="icon-btn"
                height="16"
              />
            </button>
          </Link>
          <button
            className="btn-delete"
            onClick={() => dispatch(deleteContact(id))}
          >
            <Icon
              icon="heroicons-outline:trash"
              className="icon-btn"
              height="16"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardContact;
