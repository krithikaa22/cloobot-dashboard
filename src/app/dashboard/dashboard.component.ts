import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  search =""
  grid_list = [
    {
      "page_name" : "first_page",
      "created_timestamp": "2022-10-2",
      "last_updated_timestamp": "2022-10-2",
      "started_flag": true,
      "description": "random description",
      "thumbnail_image": "https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_960_720.jpg",
      "section" : [
        {
          "name": "section 1",
          "view": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "View 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "View 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "View 3"
            }
          ],
          "widget": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "Widget 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "Widget 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "Widget 3"
            }
          ]
        },
        {
          "name": "section 3",
          "view": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "View 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "View 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "View 3"
            }
          ],
          "widget": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "Widget 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "Widget 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "Widget 3"
            }
          ]
        },
        {
          "name": "section 2",
          "view": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "View 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "View 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "View 3"
            }
          ],
          "widget": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "Widget 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "Widget 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "Widget 3"
            }
          ]
        }
       ]
    },
    {
      "page_name" : "second_page",
      "created_timestamp": "2022-10-2",
      "last_updated_timestamp": "2022-10-2",
      "started_flag": true,
      "description": "random description",
      "thumbnail_image": "https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_960_720.jpg",
      "section" : [
        {
          "name": "section 1",
          "view": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "View 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "View 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "View 3"
            }
          ],
          "widget": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "Widget 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "Widget 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "Widget 3"
            }
          ]
        },
        {
          "name": "section 3",
          "view": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "View 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "View 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "View 3"
            }
          ],
          "widget": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "Widget 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "Widget 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "Widget 3"
            }
          ]
        },
        {
          "name": "section 2",
          "view": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "View 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "View 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "View 3"
            }
          ],
          "widget": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "Widget 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "Widget 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "Widget 3"
            }
          ]
        }
       ]
    },
    {
      "page_name" : "third_page",
      "created_timestamp": "2022-10-2",
      "last_updated_timestamp": "2022-10-2",
      "started_flag": true,
      "description": "random description",
      "thumbnail_image": "https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_960_720.jpg",
      "section" : [
        {
          "name": "section 1",
          "view": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "View 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "View 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "View 3"
            }
          ],
          "widget": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "Widget 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "Widget 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "Widget 3"
            }
          ]
        },
        {
          "name": "section 3",
          "view": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "View 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "View 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "View 3"
            }
          ],
          "widget": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "Widget 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "Widget 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "Widget 3"
            }
          ]
        },
        {
          "name": "section 2",
          "view": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "View 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "View 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "View 3"
            }
          ],
          "widget": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "Widget 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "Widget 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "Widget 3"
            }
          ]
        }
       ]
    },
    {
      "page_name" : "first_page",
      "created_timestamp": "2022-10-2",
      "last_updated_timestamp": "2022-10-2",
      "started_flag": true,
      "description": "random description",
      "thumbnail_image": "https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_960_720.jpg",
      "section" : [
        {
          "name": "section 1",
          "view": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "View 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "View 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "View 3"
            }
          ],
          "widget": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "Widget 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "Widget 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "Widget 3"
            }
          ]
        },
        {
          "name": "section 3",
          "view": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "View 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "View 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "View 3"
            }
          ],
          "widget": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "Widget 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "Widget 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "Widget 3"
            }
          ]
        },
        {
          "name": "section 2",
          "view": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "View 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "View 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "View 3"
            }
          ],
          "widget": [
            {
              "type": "form",
              "type_id": 0,
              "type_val": "Widget 1"
            },
            {
              "type": "form",
              "type_id": 1,
              "type_val": "Widget 2"
            },
            {
              "type": "form",
              "type_id": 2,
              "type_val": "Widget 3"
            }
          ]
        }
       ]
    }
  ]

  grid_filterd_list = this.grid_list


  filterData = () => {
    this.grid_filterd_list = []
     console.log(this.search  )
    this.grid_list.map(e => {
      if(e.page_name.includes(this.search)) {
        console.log(e)
        this.grid_filterd_list.push(e)
      }
    })
    console.log(this.grid_filterd_list)
  }

  manage = () => {
    this.router.navigate(['/edit'])
  }

  ngOnInit(): void {
  }

}
