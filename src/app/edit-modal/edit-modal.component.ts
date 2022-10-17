import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IconDefinition, IconService } from '@ant-design/icons-angular';
import { DeleteFill } from '@ant-design/icons-angular/icons'
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  page : any
   view : any

   widget : any

   sectionView : any
   sectionWidget :any

   
   newView = ""
   newWidget = ""
   newSectionName = ""
   newPageName = ""
   newPageDesp = ""
   newSections = [{}]
   isNewPage = false
   addNewSection = false

   constructor(private _iconService: IconService, private router: Router, private dataService: DataServiceService) {
    this._iconService.addIcon(...[ DeleteFill ]);
    this._iconService.twoToneColor = { primaryColor: '#1890ff' };
   }
 

  ngOnInit(): void {
    this.page = this.dataService.getPage()
    this.dataService.dropDownListView().subscribe((res:any)=> {
      console.log(res.data)
      this.view = res.data
    })
    this.dataService.dropDownListWidget().subscribe((res:any) => {
      this.widget = res.data
    })
    console.log(this.page)
    this.newPageName = this.page.name
    this.newPageDesp = this.page.desp
  }

  openAddSection = () => {
    this.addNewSection = true
    if(document.getElementById("add-section"))
    document.getElementById("add-section")!.style.display = "inline"
    this.newSectionName = ''
    this.sectionView = []
    this.sectionWidget = []
  }

  addView = () => {
    var temp = {
      "type": "form",
      "type_id": this.sectionView.length,
      "type_val": this.newView
    }
    this.sectionView.push(temp)
    if(!this.addNewSection){
      this.page.section.filter((e:any) => e.name == this.newSectionName)[0].view.push(temp)
    }
  }

  addWidget = () => {
    
    var temp = {
      "type": "form",
      "type_id": this.sectionWidget.length,
      "type_val": this.newWidget
    }
    this.sectionWidget.push(temp)
    if(!this.addNewSection){
      this.page.section.filter((e:any) => e.name == this.newSectionName)[0].widget.push(temp)
    }
  }

  addSection = () => {
    if(this.addNewSection)
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
    this.addNewSection = false
    console.log(event.srcElement.innerText)
    this.newSectionName = event.srcElement.innerText
    let section = this.page.section.filter((e:any) => e.name === event.srcElement.innerText)
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

  updatePage(){
    this.router.navigate(['/'])
  }

  deleteSection = (i:any) => {
    this.page.section = this.page.section.filter((e:any) => e.name !== i.name)
  }

  deleteView = (i:any) => {
    this.sectionView = this.sectionView.filter((e:any) => e.type_val !== i.type_val)
    this.page.section.map((e:any) => {
      if(e.name == this.newSectionName)
        e.view = this.sectionView
    })
  }

  deleteWidget = (i:any) => {
    this.sectionWidget = this.sectionWidget.filter((e:any) => e.type_val !== i.type_val)
    this.page.section.map((e:any) => {
      if(e.name == this.newSectionName)
      e.widget = this.sectionWidget
    })
  }
}

