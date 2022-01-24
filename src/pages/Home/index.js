import { ListContact, TopBar } from "components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "store/contact/action";

export default function Home() {
  const [keyword, setKeyword] = useState("");

  const {
    getContactResult,
    getContactLoading,
    getContactError,
    addContactResult,
    deleteContactResult,
  } = useSelector((state) => state.contact);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  useEffect(() => {
    if (addContactResult || deleteContactResult) {
      dispatch(getContact());
    }
  }, [addContactResult, deleteContactResult, dispatch]);

  const searchValue = (value) => {
    setKeyword(value);
  };

  return (
    <>
      <div>
        <div className="container">
          <h1 className="title-page">APLIKASI KONTAK</h1>
        </div>
        <TopBar searchValue={searchValue} />
        <ListContact
          loading={getContactLoading}
          result={getContactResult}
          error={getContactError}
          keyword={keyword}
        />
      </div>
    </>
  );
}
