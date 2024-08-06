import { Component, ComponentFactory, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'leaf-content',
  template: `
    This is the leaf content
  `,
})
export class LeafContent { 

  public Add(n1: number , n2: number) : number {
    return n1 + n2
  }

}

@Component({
  selector: 'app-vcr',
  templateUrl: './vcr.component.html',
  styleUrls: ['./vcr.component.css']
})
export class VcrComponent implements OnInit {

  constructor(private viewContainer: ViewContainerRef) { }

  ngOnInit(): void {
    this.loadContent()
  }

  loadContent() {
    this.viewContainer.clear();
    const componentRef = this.viewContainer.createComponent(LeafContent);
     console.log("componentRef", componentRef)

    let result = componentRef.instance.Add(5,5);
    // console.log("result", result)
  }
}



