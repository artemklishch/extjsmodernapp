Ext.define("ModernApp.view.main.MainModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.main",
  requires: ["ModernApp.model.Personnel"],
  stores: {
    personnalStore: {
      model: "ModernApp.model.Personnel",
      autoLoad: true,
    },
  },
});
