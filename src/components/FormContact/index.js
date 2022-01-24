import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addContact, updateContact } from "store/contact/action";

function FormContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");

  let navigate = useNavigate();

  const { detailContactResult } = useSelector((state) => state.contact);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // update contact
      dispatch(updateContact({ id: id, name: name, phone: phone }));
      setName("");
      setPhone("");
      setId("");
      navigate("/");
    } else {
      // add contact
      dispatch(addContact({ name: name, phone: phone }));
      setName("");
      setPhone("");
      setId("");
      navigate("/");
    }
  };
  const handleBack = () => {
    navigate("/");
    setName("");
    setPhone("");
    setId("");
  };

  useEffect(() => {
    if (detailContactResult) {
      setName(detailContactResult.name);
      setPhone(detailContactResult.phone);
      setId(detailContactResult.id);
    }
  }, [dispatch, detailContactResult]);

  return (
    <>
      <section className="container">
        {/* {id ? "Edit" : "Tambah"} */}
        <div className="form-wrapper">
          <form
            action=""
            className="form-contact"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="form-group">
              <label htmlFor="">Nama :</label>
              <input
                type="text"
                name=""
                placeholder="Masukkan nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Nomor Telp :</label>
              <input
                type="text"
                name=""
                placeholder="Masukkan nomor"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="button button-action">
              <button className="btn-back" onClick={() => handleBack()}>
                Kembali
              </button>
              <button className="btn-submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default FormContact;
