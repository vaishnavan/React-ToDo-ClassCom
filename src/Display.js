import React from "react";

class Display extends React.Component {
  render() {
    const { myDataItem, onDelete, onEdit } = this.props;
    // console.log(myDataItem);
    return (
      <>
        {myDataItem.length === 0 && <h1>No Data available</h1>}
        {myDataItem
          .sort((a, b) => (a.id < b.id ? 1 : -1))
          .map((data, i) => {
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
