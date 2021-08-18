import React from "react";

class Display extends React.Component {
  render() {
    const { myDataItem, onDelete, onEdit } = this.props;
    // console.log(myDataItem);
    return (
      <>
        {myDataItem.map((data, i) => {
          return (
            <div key={data.id}>
              <h2>{data.name}</h2>
              <button onClick={() => onDelete(data.id)}>Delete</button>
              <button onClick={() => onEdit(data.id)}>Edit</button>
            </div>
          );
        })}
      </>
    );
  }
}

export default Display;
