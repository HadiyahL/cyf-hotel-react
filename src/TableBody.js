import React, { useState } from "react";
import moment from "moment";

const TableBody = ({ data }) => {
  const [selection, setSelection] = useState(false);
  const toggleSelectRow = () => {
    if (selection === false) {
      setSelection(true);
    } else {
      setSelection(false);
    }
  };
  const numberOfNights = (checkIn, checkOut) => {
    let checkInDate = moment(checkIn);
    let checkOutDate = moment(checkOut);
    return checkOutDate.diff(checkInDate, "days");
  };

  return (
    <tbody>
      {data.map(customer => {
        return (
          <tr onClick={toggleSelectRow} key={customer.id}>
            <th scope="row">{customer.id}</th>
            <td>{customer.title}</td>
            <td>{customer.firstName}</td>
            <td>{customer.surname}</td>
            <td>{customer.email}</td>
            <td>{customer.roomId}</td>
            <td>{customer.checkInDate}</td>
            <td>{customer.checkOutDate}</td>
            <td>
              {numberOfNights(customer.checkInDate, customer.checkOutDate)}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
