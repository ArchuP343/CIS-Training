// Built from Lessons/Lessons.docx by build-lessons.py — edit the Word doc, not this file.
window.LESSONS = [
  {
    "id": "overview",
    "num": null,
    "title": "Overview",
    "summary": "Welcome to the Core Inventory System! Start here to find out what it is and what it can do.",
    "video": "videos/Overview_intro.mp4",
    "steps": [
      {
        "title": "Meet GOA!",
        "blocks": [
          {
            "type": "goa"
          },
          {
            "type": "text",
            "md": "GOA is your handy virtual assistant. He’s a piece of granite drill core I found on the ground – turns out he could speak and knew all about this program! Ask him anything you need to know throughout the coming lessons, or come back to him in the future whenever you have more questions about the Core Inventory System (CIS). Find him in the bottom corner of your screen on any page!"
          },
          {
            "type": "tip",
            "md": "GOA gets bored easily. Leave him alone for too long on the learning homepage and he may just wander off… or you know, drill a hole through the lesson."
          }
        ]
      },
      {
        "title": "Continue learning",
        "blocks": [
          {
            "type": "text",
            "md": "The coming lessons will teach you everything you need to know about the software from finding it to building sheds and planning moves. Hopefully CIS can speed up your workflow and get you managing your core inventory quicker and easier!"
          }
        ]
      }
    ],
    "suggestions": []
  },
  {
    "id": "lesson-1",
    "num": 1,
    "title": "Getting Started",
    "summary": "Finding the program, connecting it to a shared folder, creating a project",
    "video": "videos/Lesson 1.mp4",
    "steps": [
      {
        "title": "Finding the program",
        "blocks": [
          {
            "type": "text",
            "md": "CIS can be located in the Z_Geology folder under Software → Core management tool → Core Inventory System.html. Open the program directly from this folder and it should appear in your default browser automatically. If you are having issues, try using Microsoft Edge as your default."
          },
          {
            "type": "tip",
            "md": "Copy and paste this link into file explorer to find CIS:"
          }
        ]
      },
      {
        "title": "Connect to a shared folder",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "Clicking the connect to shared folder and navigating to the folder location",
            "src": null
          },
          {
            "type": "text",
            "md": "The program is designed to be collaborative so it must be connected to a shared folder before use. Connect to the folder called [Data] Program Files in the same place you found the program. Any changes you make to a project or core move will automatically be saved in this folder."
          },
          {
            "type": "warn",
            "md": "Never delete the [Data] folder. A deletion will not break the software, but it will wipe any records in it. If this is a concern, create a copy of the folder elsewhere as a backup."
          }
        ]
      },
      {
        "title": "Create a new project",
        "blocks": [
          {
            "type": "text",
            "md": "A project represents an individual asset such as a dam or weir. You can add multiple core sheds for each project. When creating a new project, you will be prompted to set up a new shed layout immediately."
          },
          {
            "type": "media",
            "kind": "gif",
            "desc": "Typing in project and shed name and pressing create",
            "src": null
          },
          {
            "type": "text",
            "md": "When brought to the initial setup page you are given 4 options:"
          },
          {
            "type": "options",
            "items": [
              {
                "title": "Plan new core",
                "md": "If you are setting up a brand new shed with no existing layout, this will automatically assign core boxes an order and position in the shed starting from A1-1."
              },
              {
                "title": "Import an existing shed",
                "md": "If you want to load in a shed layout with pre-determined positions (e.g. boxes already have locations), this option will read row-bay-slot data and ensure boxes are stored correctly. It will lock all slots (including empty ones) so they cannot accidentally be rearranged."
              },
              {
                "title": "Enter holes manually",
                "md": "If you do not have a spreadsheet to import, use this to add holes one by one.",
                "notes": [
                  {
                    "type": "tip",
                    "md": "Type in a range of boxes (e.g. 1-4) to create multiple boxes from the same hole."
                  }
                ]
              },
              {
                "title": "Import hole information later",
                "md": "If you want to skip box importing for now"
              }
            ]
          }
        ]
      },
      {
        "title": "Checking hole information",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "Scrolling down add hole info page, clicking on the excel drop downs",
            "src": null
          },
          {
            "type": "text",
            "md": "If using a spreadsheet to import box information, headings will automatically be detected if they are the same or similar to the planner fields. If not done automatically, columns can manually be assigned a field."
          },
          {
            "type": "tip",
            "md": "Boxes labelled by feature ID and hole ID together (e.g. BFA1-DD100) can be split into 2 columns automatically – just tick the box!"
          },
          {
            "type": "text",
            "md": "When you’re ready to go, check the preview to make sure you’re importing exactly what you want, and hit ‘Next’."
          },
          {
            "type": "media",
            "kind": "image",
            "desc": "Import preview",
            "src": null
          }
        ]
      },
      {
        "title": "Arranging a shed",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "switching around the shed layout",
            "src": null
          },
          {
            "type": "text",
            "md": "Before the final import, you can make preliminary adjustments to the layout of the core shed. Here, you can change naming conventions and row orientation. More detailed editing is available after the shed is created."
          }
        ]
      }
    ],
    "suggestions": []
  },
  {
    "id": "lesson-2",
    "num": 2,
    "title": "Managing projects",
    "summary": "Creating backups, exporting sheds, saving moves, adding more sheds",
    "video": "videos/Lesson2.mp4",
    "steps": [
      {
        "title": "Shed vs core move",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "On the home page open the core move drop down, then open the uneditable shed",
            "src": null
          },
          {
            "type": "text",
            "md": "You may have noticed the program uses the terms ‘shed’ and ‘core move’. The main difference between the two is that a shed contains cannot be edited, while core moves can. The idea is simple – the shed serves as the ‘ground truth’; it is the most up to date version of exactly what boxes are in the shed. Core moves on the other hand build upon the current shed without affecting the saved layout, allowing you to play around and plan out moves and adjustments to the shed without accidentally messing accurate records up."
          },
          {
            "type": "tip",
            "md": "The only way to override a shed layout with a core move layout is by manually pressing the ‘Save move to shed’ button."
          }
        ]
      },
      {
        "title": "Project backups",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "Manage drop down list",
            "src": null
          },
          {
            "type": "text",
            "md": "Project backups can be created on the CIS home page. Navigate to your project and select the ‘Manage’ dropdown, then choose ‘Backup’. This creates a backup .json file in the backups folder of the connected drive. You can also delete, duplicate, or rename projects from this drop down."
          },
          {
            "type": "tip",
            "md": "You can load a backup project into CIS through the ‘Open project file’ button in the folder connection drop down list."
          }
        ]
      },
      {
        "title": "Adding sheds",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "Adding sheds to a project",
            "src": null
          },
          {
            "type": "text",
            "md": "If there are multiple sheds for a project, you can add a new shed using the ‘+ Add shed’ button in the project tab."
          }
        ]
      },
      {
        "title": "Exporting",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "how to export a shed/core move inventory",
            "src": null
          },
          {
            "type": "text",
            "md": "CIS is integrated with existing core inventory templates. If you prefer working with these, or want an Excel copy, you can export shed/core move inventories directly into a standardised template using the ‘Export’ button in the top corner of opened sheds. You can also export to a non-standardised template that can include custom columns."
          },
          {
            "type": "tip",
            "md": "Exports include any saved changes. If you like working in Excel but want to keep CIS up to date, you can export a shed, edit in Excel, and then re-upload the edited spreadsheet following upload procedures in Lesson 1 and Lesson 7."
          }
        ]
      }
    ],
    "suggestions": []
  },
  {
    "id": "lesson-3",
    "num": 3,
    "title": "Navigating shed dashboards",
    "summary": "Rack plan, shed map, move mode, edit tabs, searching and filtering",
    "video": null,
    "steps": [],
    "suggestions": []
  },
  {
    "id": "lesson-4",
    "num": 4,
    "title": "Rack Plan",
    "summary": "Finding the program, connecting it to a shared folder, creating a project",
    "video": null,
    "steps": [],
    "suggestions": []
  },
  {
    "id": "lesson-5",
    "num": 5,
    "title": "Shed map",
    "summary": "Finding the program, connecting it to a shared folder, creating a project",
    "video": null,
    "steps": [],
    "suggestions": []
  },
  {
    "id": "lesson-6",
    "num": 6,
    "title": "Move mode",
    "summary": "Finding the program, connecting it to a shared folder, creating a project",
    "video": null,
    "steps": [],
    "suggestions": []
  },
  {
    "id": "lesson-7",
    "num": 7,
    "title": "Edit",
    "summary": "Finding the program, connecting it to a shared folder, creating a project",
    "video": null,
    "steps": [],
    "suggestions": []
  }
];
