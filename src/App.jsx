import React, { useContext } from "react";
import EditDrawer from "./components/EditDrawer";
import CreateDrawer from "./components/CreateDrawer";
import Header from "./components/Header";
import Form from "./components/Form";
import RecordTable from "./components/RecordTable";
import { DataContext } from "./Context/DataContext";

const App = () => {

  const {editDrawer} = useContext(DataContext);
  return (
      <div className="max-w-[800px] m-auto">
        <Header />
        <Form />
        <RecordTable />
        <CreateDrawer />
        {editDrawer && <EditDrawer />}
      </div>
  );
};

export default App;
