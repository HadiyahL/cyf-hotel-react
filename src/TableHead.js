import React from "react";

const TableHead = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">FirstName</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room Id</th>
        <th scope="col">Check-in Date</th>
        <th scope="col">Check-out Date</th>
        <th scope="col">Number of Nights</th>
      </tr>
    </thead>
  );
};

export default TableHead;
