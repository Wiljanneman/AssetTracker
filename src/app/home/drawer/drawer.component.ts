import { Component, OnInit } from '@angular/core';
import { Drawer } from 'flowbite';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  employees: any[] = [];
  drawer: Drawer;

  constructor(_http: Http) {

  }

  ngOnInit() {
    let drawer = document.getElementById('drawer-left');

    this.drawer = new Drawer(drawer, {
      backdrop: false,
      bodyScrolling: false,
      edge: true,
      edgeOffset: 'right-[60px]',
      
    });
    this.drawer.show();
    this.employees = this.getEmployees();

    this.employees.forEach(e => {
      e.avatar = 
    })
  }

  getEmployees() {
    return [
      {
        name: "Howard Martinez",
        role: "Compliance Admin",
        primaryAssets: [
          {
            description: "Dell XPS",
            id: 4353,
            icon: "fa-laptop"
          },
          {
            description: "iPhone 12",
            id: 1122,
            icon: "fa-mobile"
          },
          {
            description: "iPad Pro",
            id: 7890,
            icon: "fa-tablet"
          }
        ],
        secondaryAssets: [
          {
            description: "Wireless Mouse",
            id: 4456,
            icon: "fa-mouse"
          }
        ]
      },
      {
        name: "Carol Washington",
        role: "A&D",
        primaryAssets: [
          {
            description: "iPad Pro",
            id: 7890,
            icon: "fa-tablet"
          },
          {
            description: "Dell XPS",
            id: 4353,
            icon: "fa-laptop"
          },
          {
            description: "iPhone 12",
            id: 1122,
            icon: "fa-mobile"
          }
        ],
        secondaryAssets: [
          {
            description: "Noise-Cancelling Headset",
            id: 3345,
            icon: "fa-headphones-alt"
          }
        ]
      },
      {
        name: "Arthur Nelson",
        role: "Compliance Admin",
        primaryAssets: [
          {
            description: "iPhone 12",
            id: 1122,
            icon: "fa-mobile"
          },
          {
            description: "Dell XPS",
            id: 4353,
            icon: "fa-laptop"
          }
        ],
        secondaryAssets: [
          {
            description: "Dell Ultrasharp",
            id: 5678,
            icon: "fa-desktop"
          }
        ]
      },
      {
        name: "Kenneth Harris",
        role: "Records Clerk",
        primaryAssets: [
          {
            description: "Dell XPS",
            id: 4353,
            icon: "fa-laptop"
          },
          {
            description: "iPhone 12",
            id: 1122,
            icon: "fa-mobile"
          },
          {
            description: "iPad Pro",
            id: 7890,
            icon: "fa-tablet"
          }
        ],
        secondaryAssets: [
          {
            description: "Mechanical Keyboard",
            id: 9987,
            icon: "fa-keyboard"
          },
          {
            description: "Wireless Mouse",
            id: 4456,
            icon: "fa-mouse"
          }
        ]
      },
      {
        name: "Shawn Allen",
        role: "Land Tech",
        primaryAssets: [
          {
            description: "Dell XPS",
            id: 4353,
            icon: "fa-laptop"
          },
          {
            description: "iPhone 12",
            id: 1122,
            icon: "fa-mobile"
          },
          {
            description: "iPad Pro",
            id: 7890,
            icon: "fa-tablet"
          }
        ],
        secondaryAssets: [
          {
            description: "Noise-Cancelling Headset",
            id: 3345,
            icon: "fa-headphones-alt"
          }
        ]
      },
      {
        name: "Samuel Ross",
        role: "Records Clerk",
        primaryAssets: [
          {
            description: "Dell XPS",
            id: 4353,
            icon: "fa-laptop"
          },
          {
            description: "iPhone 12",
            id: 1122,
            icon: "fa-mobile"
          }
        ],
        secondaryAssets: [
          {
            description: "Thunderbolt Dock",
            id: 5674,
            icon: "fa-plug"
          }
        ]
      },
      {
        name: "Mildred Smith",
        role: "Records Clerk",
        primaryAssets: [
          {
            description: "iPad Pro",
            id: 7890,
            icon: "fa-tablet"
          }
        ],
        secondaryAssets: [
          {
            description: "SSD Backup Drive",
            id: 9876,
            icon: "fa-hdd"
          }
        ]
      },
      {
        name: "Robyn Moscowitz",
        role: "Developer",
        primaryAssets: [
          {
            description: "Dell XPS",
            id: 4353,
            icon: "fa-laptop"
          },
          {
            description: "iPhone 12",
            id: 1122,
            icon: "fa-mobile"
          },
          {
            description: "iPad Pro",
            id: 7890,
            icon: "fa-tablet"
          }
        ],
        secondaryAssets: [
          {
            description: "Apple Watch",
            id: 1234,
            icon: "fa-watch"
          }
        ]
      },
      {
        name: "Wanda King",
        role: "Land Tech",
        primaryAssets: [
          {
            description: "Dell XPS",
            id: 4353,
            icon: "fa-laptop"
          },
          {
            description: "iPhone 12",
            id: 1122,
            icon: "fa-mobile"
          }
        ],
        secondaryAssets: [
          {
            description: "Dell Ultrasharp",
            id: 5678,
            icon: "fa-desktop"
          }
        ]
      },
      {
        name: "Stephanie Garcia",
        role: "Compliance Admin",
        primaryAssets: [
          {
            description: "iPad Pro",
            id: 7890,
            icon: "fa-tablet"
          },
          {
            description: "Dell XPS",
            id: 4353,
            icon: "fa-laptop"
          }
        ],
        secondaryAssets: [
          {
            description: "Wireless Mouse",
            id: 4456,
            icon: "fa-mouse"
          }
        ]
      },
      {
        name: "Maria Johnson",
        role: "Project Manager",
        primaryAssets: [
          {
            description: "iPhone 12",
            id: 1122,
            icon: "fa-mobile"
          },
          {
            description: "iPad Pro",
            id: 7890,
            icon: "fa-tablet"
          }
        ],
        secondaryAssets: [
          {
            description: "Noise-Cancelling Headset",
            id: 3345,
            icon: "fa-headphones-alt"
          }
        ]
      },
      {
        name: "David Wright",
        role: "Developer",
        primaryAssets: [
          {
            description: "Dell XPS",
            id: 4353,
            icon: "fa-laptop"
          },
          {
            description: "iPhone 12",
            id: 1122,
            icon: "fa-mobile"
          },
          {
            description: "iPad Pro",
            id: 7890,
            icon: "fa-tablet"
          }
        ],
        secondaryAssets: [
          {
            description: "Apple Watch",
            id: 1234,
            icon: "fa-watch"
          },
          {
            description: "Thunderbolt Dock",
            id: 5674,
            icon: "fa-plug"
          }
        ]
      }
    ];
  }
}
