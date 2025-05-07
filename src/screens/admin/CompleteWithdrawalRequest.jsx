/* eslint-disable no-unused-vars */
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import PageLoader from "../../components/ui/PageLoader";
import { getCompleteWithdrawal, updateWithdrawalStatus } from "../../api/payment-api";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import Swal from "sweetalert2";

const CompleteWithdrawalRequest = () => {
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchWithdrawalHistory = async () => {
    try {
      setLoading(true);
      const response = await getCompleteWithdrawal();
      setData(response?.data);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch withdrawal data.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWithdrawalHistory();
  }, []);

  const serialNumberTemplate = (rowData, { rowIndex }) => rowIndex + 1;

  const dateTimeTemplate = (rowData) => new Date(rowData.createdAt).toUTCString();

  const statusTemplate = (rowData) => {
    return rowData.status === "success" ? (
      <Tag
        severity="success"
        value="Completed"
        style={{ fontSize: "1.2rem", padding: ".2rem .5rem" }}
      />
    ) : (
      <Tag
        severity="info"
        value={rowData.status}
        style={{ fontSize: "1.2rem", padding: ".2rem .5rem" }}
      />
    );
  };

  const handleAction = async (id, status) => {
    try {
      setLoading(true);
      const res = await updateWithdrawalStatus(id, status);
      await fetchWithdrawalHistory();

      Swal.fire({
        icon: "success",
        title: "Success",
        text: res?.message || `Request ${status} successfully.`,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error?.response?.data?.message || "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  const actionTemplate = (rowData) => (
    <div className="flex gap-2">
      <button
        onClick={() => handleAction(rowData._id, "approved")}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:scale-105"
      >
        <i className="pi pi-check mr-2"></i> Approve
      </button>
      <button
        onClick={() => handleAction(rowData._id, "rejected")}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:scale-105"
      >
        <i className="pi pi-times mr-2"></i> Reject
      </button>
    </div>
  );
  

  return (
    <>
      {loading && <PageLoader />}
      <div className="WithdrawalReport CompleteWithdrawalRequest martop">
        <div className="dataTable ss-card martop">
          <DataTable
            value={data}
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            filterDisplay="row"
            globalFilter={globalFilter}
          >
            <Column body={serialNumberTemplate} header="S.No" filter sortable />
            <Column field="userId.name" header="Username" filter sortable />
            <Column
              field="userWalletAddress"
              header="User Wallet Address"
              filter
              sortable
            />
            <Column
              field="amount"
              header="Amount"
              body={(rowData) => rowData.amount.toFixed(2)}
              filter
              sortable
            />
            <Column
              field="createdAt"
              body={dateTimeTemplate}
              header="Date"
              filter
              sortable
            />
            <Column
              field="status"
              header="Status"
              body={statusTemplate}
              filter
              sortable
            />
            <Column
              header="Actions"
              body={actionTemplate}
              style={{ minWidth: "10rem" }}
            />
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default CompleteWithdrawalRequest;
