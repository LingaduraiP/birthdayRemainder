import React from "react";

const List = (props) => {
  return (
    <>
      {props.people.map((people) => {
        return (
          <div className="content" key={people.id}>
            <img src={people.image} alt="" />
            <div className="content__details">
              <h2>{people.name}</h2>
              <p>{people.age}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
