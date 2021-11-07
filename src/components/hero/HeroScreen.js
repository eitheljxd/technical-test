import React from "react";
import { useSelector } from "react-redux";
import { HeroesAppBar } from "./HeroesAppBar";
import DataTable from "react-data-table-component";

export const HeroScreen = () => {
  const { heroes } = useSelector((state) => state.heroes);
  const [filterText, setFilterText] = React.useState("");
  const { loading } = useSelector((state) => state.ui);
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = heroes.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <input
        placeholder="Search data for name"
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
      <p> <b>Age:</b> {data.data.age}</p>
      <p> <b>Name:</b> {data.data.name}</p>
      <p> <b>Professions:</b> {data.data.professions.join(", ")}</p>
      <p> <b>Friends:</b>{data.data.friends.join(", ")}</p>
      <p> <b>Weight:</b>{data.data.weight}</p>
      <p> <b>Height:</b> {data.data.height}</p>
      <p> <b>Hair Color:</b> {data.data.hair_color}</p>
      <p> <img width="230" height="220" src={data.data.thumbnail} /></p>
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
            progressPending={loading}
            expandableRowDisabled={(row) => row.disabled}
            expandableRowsComponent={ExpandableComponent}
          />
        </div>
      </div>
    </>
  );
};
