import React, { useEffect, useState } from "react";
import SalesChart from "../../servicos/vendas";
import processarDadosVendas from "../../utils/processarDadosVendas";

function GraficoVendasPorTempo() {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    async function fetchSalesData() {
      const response = await fetch("http://localhost:8000/vendas/usuario/2");
      const sales = await response.json();
      const processedSalesData = processarDadosVendas(sales);
      setSalesData(processedSalesData);
    }

    fetchSalesData();
  }, []);

  return (
    <div>
      <SalesChart salesData={salesData} />
    </div>
  );
}

export default GraficoVendasPorTempo;
