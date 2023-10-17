import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  plan =[
    {
      plan:"Free",
      price:0,
      features:[
        {
          name:"Single User",
          isEnable:true
          
        },
        {
          name:"5GB Storage",
          isEnable:true
        },
        {
          name:"Unlimited Public Projects",
          isEnable:true
        },
        {
          name:"Community Access",
          isEnable:true
        },
        {
          name:"Unlimited Private Projects",
          isEnable:false
        },
        {
          name:"Dedicated Phone Support",
          isEnable:false
        },
        {
          name:"Free Subdomain",
          isEnable:false
        },
        {
          name:"Monthly Status Reports",
          isEnable:false
        }
      ]
    },
    {
      plan:"Plus",
      price:9,
      features:[
        {
          name:"5 Users",
          isEnable:true
        },
        {
          name:"50GB Storage",
          isEnable:true
        },
        {
          name:"Unlimited Public Projects",
          isEnable:true
        },
        {
          name:"Community Access",
          isEnable:true
        },
        {
          name:"Unlimited Private Projects",
          isEnable:true
        },
        {
          name:"Dedicated Phone Support",
          isEnable:true
        },
        {
          name:"Free Subdomain",
          isEnable:true
        },
        {
          name:"Monthly Status Reports",
          isEnable:false
        }
      ]
    },
    {
      plan:"Pro",
      price:49,
      features:[
        {
          name:"Unlimited Users",
          isEnable:true
        },
        {
          name:"150GB Storage",
          isEnable:true
        },
        {
          name:"Unlimited Public Projects",
          isEnable:true
        },
        {
          name:"Community Access",
          isEnable:true
        },
        {
          name:"Unlimited Private Projects",
          isEnable:true
        },
        {
          name:"Dedicated Phone Support",
          isEnable:true
        },
        {
          name:"Free Subdomain",
          isEnable:true
        },
        {
          name:"Monthly Status Reports",
          isEnable:true
        }
      ]
    }
  ]
}
