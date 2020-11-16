Ext.define("ModernApp.view.main.Main", {
  extend: "Ext.grid.Grid",
  requires: ["ModernApp.view.main.MainModel"],
  viewModel: "main",
  title: "Personnel",
  bind: "{personnalStore}",
  columns: [
    {
      text: "Name",
      dataIndex: "name",
      flex: 2,
    },
    {
      text: "Email",
      dataIndex: "email",
      flex: 1,
    },
    {
      text: "Phone",
      dataIndex: "phone",
      flex: 1,
    },
  ],
});
