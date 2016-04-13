angular
  .module('portfolio', [
    'ui.router', 'ui.router.stateHelper'
    ])
    .config(function(stateHelperProvider){
      stateHelperProvider
      .state({
        name: 'home', 
        templateURL: 'home.html',
        children: [
        {
          name: ''
        }
        ]
      }) 
    }
