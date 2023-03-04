    $(document).ready(function () {
  
      $.get("http://localhost:3000/Employees", function(data) {
        console.log(this);

         // arry of objects similar to arr in this filea
         let arr = data
         console.log(arr)
        for (let i = 0; i < arr.length; i++) {
            // 1) to create a <tr> for every object in the array
            let departments = JSON.parse(data[i].departments);
            const tr = `<tr>
                <td>${arr[i].name}</td>
                <td>${arr[i].gender}</td>

                 <td>${departments.map((department) => {
                   return `<span>${department}</span>`;
                 })}</td>
                 <td>${arr[i].salary}</td>

                  <td>${arr[i].date}</td>
                </tr>`;
        
            $(".tablebody").append(tr);
                }
        

        // all your table code sits here
      });
    });
  
    
  
   
    