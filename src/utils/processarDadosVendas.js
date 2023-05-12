function processarDadosVendas(sales) {
    const salesByDay = {};
  
    sales.forEach((sale) => {
      const date = sale.createdAt.split("T")[0];
  
      if (!salesByDay[date]) {
        salesByDay[date] = {
          date,
          total_vendas: 0,
        };
      }
  
      salesByDay[date].total_vendas += sale.valor_total;
    });
  
    return Object.values(salesByDay);
  }
  
  export default processarDadosVendas;