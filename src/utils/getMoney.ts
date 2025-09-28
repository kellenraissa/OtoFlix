export const formatMoney = (value?: number, currency?: "USD") =>
  value
    ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency,
      }).format(value)
    : "";
