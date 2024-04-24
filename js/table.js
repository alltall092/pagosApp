angular.module('myApp', ['ui.bootstrap'])
  .controller('MainController', function($scope, $http,$filter) {
    $scope.combinedData = {
        users: [],
        banks: [],
        items: [],
        trans:[],
        tokens:[],
        filteredItems:[],
        displayedUsers:[],
        valid:[]
      };
      // Lista de usuarios mostrados en la página actual
      $scope.totalPages = 0;
      $scope.currentPage = 1;
      $scope.pageSize =5; // 
      $scope.filterUsers = function() {
        // Aplicar el filtro en base al texto de búsqueda
        $scope.combinedData.filteredItems = $filter('filter')($scope.combinedData.users, $scope.searchText);
    
        // Calcular el número total de páginas basado en la cantidad de usuarios filtrados y el tamaño de página
        $scope.totalPages = Math.ceil($scope.combinedData.filteredItems.length / $scope.pageSize);
    
        // Mostrar la primera página después de la búsqueda
        $scope.setPage(1);
    };
    
    // Make HTTP GET request to fetch data
    $http.get('https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/usuario')
      .then(function(response) {
        $scope.combinedData.users= response.data;
        $scope.combinedData.filteredItems = response.data; 
        $scope.combinedData.displayedUsers = response.data;
        $scope.filterUsers(); 
            $scope.generatePageNumbers(); 
       // Mostrar la primera página al cargar los datos
        // Initialize DataTable after data is loaded
        $('#myTable').DataTable();
      })
      .catch(function(error) {
        console.error('Error fetching data:', error);
      });

      $scope.setPage = function(page) {
        if (page < 1 || page > $scope.totalPages) return;
        $scope.currentPage = page;
        var startIndex = (page - 1) * $scope.pageSize;
        var endIndex = startIndex + $scope.pageSize;
        $scope.combinedData.displayedUsers = $scope.combinedData.filteredItems.slice(startIndex, endIndex);
    };

    $scope.prevPage = function() {
        $scope.setPage($scope.currentPage - 1);
    };

    $scope.nextPage = function() {
        $scope.setPage($scope.currentPage + 1);
    };
    
// Función para generar la lista de números de página
$scope.generatePageNumbers = function() {
  $scope.pages = [];
  for (var i = 1; i <= $scope.totalPages; i++) {
      $scope.pages.push(i);
  }
};
      $http.get('https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/bank')
      .then(function(response) {
        $scope.combinedData.banks= response.data;
        // Initialize DataTable after data is loaded
        $('#myTable').DataTable();
      })
      .catch(function(error) {
        console.error('Error fetching data:', error);
      });
      
      $http.get('https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/paisaportacion')
      .then(function(response) {
        $scope.combinedData.items=response.data;
        
        

        // Initialize DataTable after data is loaded
        $('#myTable').DataTable();
      })
      .catch(function(error) {
        console.error('Error fetching data:', error);
      });
       
      $http.get('https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/transferencia')
      .then(function(response) {
        $scope.combinedData.trans=response.data;
        
        

        // Initialize DataTable after data is loaded
        $('#myTable').DataTable();
      })
      .catch(function(error) {
        console.error('Error fetching data:', error);
      });
      $http.get('https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/registro-token')
      .then(function(response) {
        $scope.combinedData.tokens=response.data;
        
        

        // Initialize DataTable after data is loaded
        $('#myTable').DataTable();
      })
      .catch(function(error) {
        console.error('Error fetching data:', error);
      });
      $http.get('https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/validacion')
      .then(function(response) {
        $scope.combinedData.valid=response.data;
        
        

        // Initialize DataTable after data is loaded
        $('#myTable').DataTable();
      })
      .catch(function(error) {
        console.error('Error fetching data:', error);
      });
      $scope.getBankName = function(bankId) {
        // Busca el banco correspondiente en $scope.combinedData.banks y devuelve su nombre
        let bank = $scope.combinedData.banks.find(bank => bank.id === bankId);
        return bank ? bank.nombre : 'No encontrado';
      };
      $scope.getPaisAportacionName = function(paisaportacionId) {
        // Busca el país de aportación correspondiente en $scope.combinedData.paisaportacion y devuelve su nombre
        let paisaportacion = $scope.combinedData.items.find(p => p.id === paisaportacionId);
        return paisaportacion ? paisaportacion.pais : 'No encontrado';
      };
      $scope.getTrans=function(transId){
let transferencia=$scope.combinedData.trans.find(x=>x.id===transId);
return transferencia ? transferencia.tipoDeTransferencia: 'no encontrado';
      }
      $scope.getTrans2=function(transId){
        let transferencia=$scope.combinedData.trans.find(x=>x.id===transId);
        return transferencia ? transferencia.parentesco: 'no encontrado';
              }
              $scope.getTrans3=function(transId){
                let transferencia=$scope.combinedData.trans.find(x=>x.id===transId);
                return transferencia ? transferencia.tiempo: 'no encontrado';
                      }
                      $scope.getTrans4=function(transId){
                        let transferencia=$scope.combinedData.trans.find(x=>x.id===transId);
                        return transferencia ? transferencia.motivo: 'no encontrado';
                              }
                              $scope.getTrans5=function(transId){
                                let transferencia=$scope.combinedData.tokens.find(x=>x.id===transId);
                                return transferencia ? transferencia.token: 'no encontrado';
                                      }
                             
                                      $scope.getTrans6=function(transId){
                                        let transferencia=$scope.combinedData.valid.find(x=>x.id===transId);
                                        return transferencia ? transferencia.numero: 'no encontrado';
                                              }
                                 
  
                                    });
