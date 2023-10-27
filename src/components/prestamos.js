import * as React from "react";
import "../styles/home.css";
import Box from "@mui/material/Box";
import PrestamosIcon from "../assets/icons/prestamos.png";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Aside from "../components/aside";

export const Prestamos = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "deudor", headerName: "Deudor", width: 200 },
    {
      field: "fechadelprestamo",
      headerName: "Fecha del prestamos",
      width: 170,
    },

    { field: "cantidad", headerName: "Cantidad", width: 150 },
    { field: "inversion", headerName: "Inversión", width: 170 },
    { field: "status", headerName: "Status", width: 140 },
  ];

  const rows = [
    {
      id: 1,
      deudor: "DATO DE PRUEBA 1",
      fechadelprestamo: "Octubre 20 de 2023",
      cantidad: 1000000,
      inversion: "DATO DE PRUEBA 1",
      status: "Pagado",
    },
    {
      id: 2,
      deudor: "DATO DE PRUEBA 2",
      fechadelprestamo: "Octubre 20 de 2023",
      cantidad: 2000000,
      inversion: "DATO DE PRUEBA 2",
      status: "Pendiente",
    },
    {
      id: 3,
      deudor: "DATO DE PRUEBA 3",
      fechadelprestamo: "Octubre 21 de 2023",
      cantidad: 3000000,
      inversion: "DATO DE PRUEBA 3",
      status: "Adeudo Atrasado",
    },
  ];

  return (
    <>
      <body
        className="body"
        style={{ backgroundColor: "#E9E6E6", height: "120vh", width: "100vw" }}
      >
        <Box >
          <div class="icon-and-title" style={{ marginLeft: "5.5%" }}>
            <div class="icon">
              <img src={PrestamosIcon} alt="dashboard" />
            </div>
            <h3>PRESTAMOS</h3>
          </div>

          <Box
            style={{
              height: "90hw",
              width: "90vw",
              marginLeft: "5.5%",
              backgroundColor: "white",
            }}
          >
            <Button
              variant="contained"
              startIcon={<AddIcon style={{ height: "15px" }} />}
              style={{
                fontSize: "10px",
                marginLeft: "78vw",
                marginTop: "1%",
                height: "4.5vh",
                marginBottom: "1%",
                backgroundColor: "#2A46AE",
                borderRadius: "30px",
              }}
            >
              Nuevo Prestamo
            </Button>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </Box>
        </Box>
      </body>
    </>
  );
};
