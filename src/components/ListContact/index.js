import { CardContact } from "components";
import React, { useEffect, useState } from "react";

const ListContact = ({ loading, result, error, keyword }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (result !== false) {
      let dataContact = result.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key]
            .toString()
            .toLowerCase()
            .includes(keyword.toString().toLowerCase())
        );
      });
      setData(dataContact);
    }
  }, [result, keyword]);

  return (
    <>
      <section className="container">
        <div className="list-contact">
          {data ? (
            data.map((contact) => {
              return (
                <CardContact
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  phone={contact.phone}
                />
              );
            })
          ) : loading ? (
            <p>Loading...</p>
          ) : (
            <p>{error ? error : "Data Kosong"}</p>
          )}
        </div>
      </section>
    </>
  );
};

export default ListContact;
