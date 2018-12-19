var emp =[ {
            name:"Sangami",
            empid:"01",
            age:"21",
            location:"dgl",
            vehicle:"dio",
            position:"Developer",
            dateofjoining:"2018-03-23",
            exp:"5",
            mpc:"yes"
            }, {
            name:"Sangami",
            empid:"02",
            age:"21",
            location:"dgl",
            vehicle:"dio",
            position:"Developer",
            dateofjoining:"2018-03-23",
            exp:"5",
            mpc:"yes"
            }, {
            name:"karthiga",
            empid:"03",
            age:"24",
            location:"svg",
            vehicle:"dio",
            position:"Developer",
            dateofjoining:"2018-03-18",
            exp:"6",
            mpc:"yes"
            }, {
            name:"ajith",
            empid:"04",
            age:"20",
            location:"mdu",
            vehicle:"fz",
            position:"Developer",
            dateofjoining:"2018-03-19",
            exp:"2",
            mpc:"yes"
            }, {
            name:"shanmugam",
            empid:"05",
            age:"22",
            location:"mdu",
            vehicle:"car",
            position:"Teamlead",
            dateofjoining:"2018-03-20",
            exp:"5",
            mpc:"yes"
            }, {
            name:"yogesh",
            empid:"06",
            age:"22",
            location:"svg",
            vehicle:"fz",
            position:"Teamlead",
            dateofjoining:"2018-03-21",
            exp:"7",
            mpc:"no"
            }, {
            name:"bala",
            empid:"07",
            age:"21",
            location:"svg",
            vehicle:"car",
            position:"Projmanager",
            dateofjoining:"2018-03-27",
            exp:"4",
            mpc:"no"
            }, {
            name:"venkat",
            empid:"08",
            age:"20",
            location:"mdu",
            vehicle:"fz",
            position:"Projmanager",
            dateofjoining:"2018-03-25",
            exp:"11",
            mpc:"no"
            }
        ];
        
        
        displayDoj();
        ageLimit();
        sortByLatestDoj();
        filterByExperience();
        filterByMpc();
        displayVehicle();
        displayPosition();
        match();

        function displayDoj() {
          for(var i =0;i<emp.length;i++)
          {
          console.log(emp[i].name+ " " + emp[i].dateofjoining);
          }
        }
        
        function ageLimit(){
            for (var i = 0; i < emp.length; i++) {
              if((emp[i].age>21)&&(emp[i].age<25)){
              console.log(emp[i].name+" "+emp[i].age);
              }
            }
        }
        function sortByLatestDoj(){
          for (var i = 0; i < emp.length; i++) {
            emp.sort(function(a, b){
              var dateA=new Date(a.dateofjoining), dateB=new Date(b.dateofjoining);
              return dateB-dateA;
            })
            console.log(emp[i].name+" "+emp[i].dateofjoining);
          }
        }
        

      function filterByExperience() {
        for (var i = 0; i < emp.length; i++) {
          if ((emp[i].exp >= 2)&&(emp[i].position=="Developer")){
          console.log(emp[i].name+" "+emp[i].exp+" "+emp[i].position);
        }
        if ((emp[i].exp >= 5)&&(emp[i].position=="Teamlead")){
          console.log(emp[i].name+" "+emp[i].exp+" "+emp[i].position);
        }
        if ((emp[i].exp >= 10)&&(emp[i].position=="Projmanager")){
          console.log(emp[i].name+" "+emp[i].exp+" "+emp[i].position);
        }
        }
      }

      function filterByMpc(){
          for(var i =0;i<emp.length;i++)
          {
            if(emp[i].mpc=="yes")
          console.log(emp[i].name+ " " + emp[i].location);
            }
          }
      function displayVehicle() {
            for(var i =0;i<emp.length;i++)
            {
            console.log(emp[i].name+ " " + emp[i].vehicle);
            }
          }
      function displayPosition() {
            for(var i =0;i<emp.length;i++)
            {
            console.log(emp[i].name+ " " + emp[i].position);
            }
          }
      function match() {
            var user= emp.filter(function(data){
            return data.name == "Sangami";
            
            });
            console.log(user);
      }   
             