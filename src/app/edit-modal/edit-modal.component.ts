import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IconDefinition, IconService } from '@ant-design/icons-angular';
import { DeleteFill } from '@ant-design/icons-angular/icons'

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  page = {
    "name": "Page 1",
    "desp": "random description",
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

  constructor(private _iconService: IconService, private router: Router) {
    this._iconService.addIcon(...[ DeleteFill ]);
    this._iconService.twoToneColor = { primaryColor: '#1890ff' };
   }

   view = [
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
   ]

   widget = [
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


   sectionView = [
    {
      "type": "form",
      "type_id": 0,
      "type_val": ""
    }
   ]
   sectionWidget = [
    {
      "type": "form",
      "type_id": 0,
      "type_val": ""
    }
   ]

   newView = ""
   newWidget = ""
   newSectionName = ""
   newPageName = ""
   newPageDesp = ""
   newSections = [{}]
   isNewPage = false
 

  ngOnInit(): void {
    this.newPageName = this.page.name
    this.newPageDesp = this.page.desp
  }

  openAddSection = () => {
    if(document.getElementById("add-section"))
    document.getElementById("add-section")!.style.display = "inline"
  }

  addView = () => {
    var temp = {
      "type": "form",
      "type_id": this.sectionView.length,
      "type_val": this.newView
    }
    this.sectionView.push(temp)
  }

  addWidget = () => {
    var temp = {
      "type": "form",
      "type_id": this.sectionWidget.length,
      "type_val": this.newWidget
    }
    this.sectionWidget.push(temp)
  }

  addSection = () => {
    if(!this.isNewPage){
      var newSection = {
        "name": this.newSectionName,
        "view": this.sectionView,
        "widget": this.sectionWidget
      }
      this.page.section.push(newSection)
    }
    else{
      var newSection = {
        "name": this.newSectionName,
        "view": this.sectionView,
        "widget": this.sectionWidget
      }
      var newPage = {
        "name": this.newPageName,
        "desp": this.newPageDesp,
        "section": [newSection]
      }
      this.page = newPage
    }
    if(document.getElementById("add-section"))
    document.getElementById("add-section")!.style.display = "none"
  }

  showSection = (event:any) => {
    console.log(event.srcElement.innerText)
    this.newSectionName = event.srcElement.innerText
    let section = this.page.section.filter((e) => e.name === event.srcElement.innerText)
    this.sectionView = section[0].view
    this.sectionWidget = section[0].widget

    if(document.getElementById("add-section"))
    document.getElementById("add-section")!.style.display = "inline"
  }

  addNewPage = () => {
    this.newPageName = ''
    this.newPageDesp = ''
    this.newView = ''
    this.newSectionName = ''
    this.newWidget = ''
    this.page.section = []
    this.isNewPage = true
  }
}

