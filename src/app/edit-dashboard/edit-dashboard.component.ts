import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-edit-dashboard',
  templateUrl: './edit-dashboard.component.html',
  styleUrls: ['./edit-dashboard.component.css']
})
export class EditDashboardComponent implements OnInit {
  grid_list : any;
  grid_filterd_list:any;

  constructor(private router: Router, private http: DataServiceService) { 
    http.listOfCards().subscribe((res:any) => {
     console.log(res.data)
     this.grid_list = res.data
     this.grid_filterd_list = this.grid_list
    })
   }

  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  search =""
  // grid_list = [
  //   {
  //     "page_name" : "first_page",
  //     "created_timestamp": "2022-10-2",
  //     "last_updated_timestamp": "2022-10-2",
  //     "started_flag": true,
  //     "description": "random description",
  //     "thumbnail_image": "https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_960_720.jpg",
  //     "section" : [
  //       {
  //         "name": "section 1",
  //         "view": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "View 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "View 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "View 3"
  //           }
  //         ],
  //         "widget": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "Widget 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "Widget 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "Widget 3"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "section 3",
  //         "view": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "View 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "View 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "View 3"
  //           }
  //         ],
  //         "widget": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "Widget 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "Widget 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "Widget 3"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "section 2",
  //         "view": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "View 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "View 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "View 3"
  //           }
  //         ],
  //         "widget": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "Widget 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "Widget 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "Widget 3"
  //           }
  //         ]
  //       }
  //      ]
  //   },
  //   {
  //     "page_name" : "second_page",
  //     "created_timestamp": "2022-10-2",
  //     "last_updated_timestamp": "2022-10-2",
  //     "started_flag": true,
  //     "description": "random description",
  //     "thumbnail_image": "https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_960_720.jpg",
  //     "section" : [
  //       {
  //         "name": "section 1",
  //         "view": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "View 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "View 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "View 3"
  //           }
  //         ],
  //         "widget": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "Widget 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "Widget 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "Widget 3"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "section 3",
  //         "view": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "View 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "View 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "View 3"
  //           }
  //         ],
  //         "widget": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "Widget 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "Widget 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "Widget 3"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "section 2",
  //         "view": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "View 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "View 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "View 3"
  //           }
  //         ],
  //         "widget": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "Widget 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "Widget 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "Widget 3"
  //           }
  //         ]
  //       }
  //      ]
  //   },
  //   {
  //     "page_name" : "third_page",
  //     "created_timestamp": "2022-10-2",
  //     "last_updated_timestamp": "2022-10-2",
  //     "started_flag": true,
  //     "description": "random description",
  //     "thumbnail_image": "https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_960_720.jpg",
  //     "section" : [
  //       {
  //         "name": "section 1",
  //         "view": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "View 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "View 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "View 3"
  //           }
  //         ],
  //         "widget": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "Widget 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "Widget 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "Widget 3"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "section 3",
  //         "view": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "View 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "View 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "View 3"
  //           }
  //         ],
  //         "widget": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "Widget 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "Widget 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "Widget 3"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "section 2",
  //         "view": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "View 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "View 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "View 3"
  //           }
  //         ],
  //         "widget": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "Widget 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "Widget 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "Widget 3"
  //           }
  //         ]
  //       }
  //      ]
  //   },
  //   {
  //     "page_name" : "first_page",
  //     "created_timestamp": "2022-10-2",
  //     "last_updated_timestamp": "2022-10-2",
  //     "started_flag": true,
  //     "description": "random description",
  //     "thumbnail_image": "https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_960_720.jpg",
  //     "section" : [
  //       {
  //         "name": "section 1",
  //         "view": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "View 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "View 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "View 3"
  //           }
  //         ],
  //         "widget": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "Widget 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "Widget 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "Widget 3"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "section 3",
  //         "view": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "View 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "View 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "View 3"
  //           }
  //         ],
  //         "widget": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "Widget 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "Widget 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "Widget 3"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "section 2",
  //         "view": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "View 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "View 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "View 3"
  //           }
  //         ],
  //         "widget": [
  //           {
  //             "type": "form",
  //             "type_id": 0,
  //             "type_val": "Widget 1"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 1,
  //             "type_val": "Widget 2"
  //           },
  //           {
  //             "type": "form",
  //             "type_id": 2,
  //             "type_val": "Widget 3"
  //           }
  //         ]
  //       }
  //      ]
  //   }
  // ]

  // grid_filterd_list = this.grid_list

  check = () => console.log("clicked")
  filterData = () => {
    this.grid_filterd_list = []
     console.log(this.search  )
    this.grid_list.map((e:any) => {
      if(e.page_name.includes(this.search)) {
        console.log(e)
        this.grid_filterd_list.push(e)
      }
    })
    console.log(this.grid_filterd_list)
  }

  ngOnInit(): void {
  }

  edit = (data:any) => {
    // var page = {
    //   "name": data?.page_name,
    //   "desp": data?.description,
    //   "section" : data?.section
    //  }
    // console.log(page,data)
    // this.http.setPage(page)
    // this.router.navigate(['/modal'])
    this.http.editCard(data.id).subscribe((res:any)=> {
      console.log(res)
          this.http.setPage(res.data)
    this.router.navigate(['/modal'])
    })
  }

  delete = (data:any) => {
    console.log(data)
    // this.grid_filterd_list = this.grid_filterd_list.filter((e:any) => e.page_name != data.page_name)
    this.http.deleteCard(data.id).subscribe((res:any)=> {
      if(res.status){
        this.grid_filterd_list = this.grid_filterd_list.filter((e:any) => e.page_name != data.page_name)
        window.alert("SUCCESS")
      }
      else{
        window.alert("Error Occurred!")
      }
    })
  }

  newPage = () => {
    this.router.navigate(['/modal'])
  }

}
