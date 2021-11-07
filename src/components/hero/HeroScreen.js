import React from "react";
import { useSelector } from "react-redux";
import { HeroesAppBar } from "./HeroesAppBar";
import DataTable from "react-data-table-component";

export const HeroScreen = () => {
  const { heroes } = useSelector((state) => state.heroes);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = heroes.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <input
        placeholder="Search data"
        className="heroes__title-input"
        style={{ margin: 0 }}
        onChange={(e) => setFilterText(e.target.value)}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Hair Color",
      selector: (row) => row.hair_color,
      sortable: true,
    },
  ];

  const ExpandableComponent = (data) => (
    <div className="expanded-item">
      <p> Age: {data.data.age}</p>
      <p> Name: {data.data.name}</p>
      <p> Professions: {data.data.professions.join(", ")}</p>
      <p> Friends: {data.data.friends.join(", ")}</p>
      <p> Weight: {data.data.weight}</p>
      <p> Height: {data.data.height}</p>
      <p> Hair Color: {data.data.hair_color}</p>
    </div>
  );
  return (
    <>
      <div className="heroes__main-content">
        <HeroesAppBar />
        <div className="heroes__content">
          <DataTable
            columns={columns}
            data={filteredItems}
            pagination
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
            highlightOnHover
            expandableRows
            expandableRowDisabled={(row) => row.disabled}
            expandableRowsComponent={ExpandableComponent}
          />
        </div>
      </div>
    </>
  );
};
