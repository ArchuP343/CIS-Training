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
        "title": "What CIS does",
        "blocks": [
          {
            "type": "text",
            "md": "{{+The Core Inventory System (CIS) keeps a live record of every core box in a shed: which row, bay and slot it’s in, and what’s in it (feature, hole, box number and depths). Because it’s saved in a shared folder, everyone on the team sees the same up-to-date shed.+}}"
          },
          {
            "type": "text",
            "md": "{{+It also does the heavy lifting when boxes need to move. Give CIS a list of boxes and it works out where each one should go, guides you through the move box by box (or gives you a sheet to print), and updates the shed record when you’re done.+}}"
          },
          {
            "type": "text",
            "md": "{{+A typical job looks like this:+}}"
          },
          {
            "type": "text",
            "md": "- {{+Set up a project and import your shed’s inventory (Lesson 1)+}}\n- {{+Find boxes and check the shed using the dashboards (Lessons 3 to 5)+}}\n- {{+Plan and carry out a core move (Lesson 6)+}}\n- {{+Save the move to the shed so the record stays accurate (Lesson 2)+}}\n- {{+Export to the standard core inventory template when you need a spreadsheet (Lesson 2)+}}",
            "list": true
          }
        ],
        "suggested": true
      },
      {
        "title": "Key terms",
        "blocks": [
          {
            "type": "text",
            "md": "{{+You’ll see these words throughout CIS and these lessons.+}}"
          },
          {
            "type": "options",
            "items": [
              {
                "title": "Project",
                "blocks": [
                  {
                    "type": "text",
                    "md": "{{+An asset such as a dam or weir. A project can hold one or more sheds.+}}"
                  }
                ],
                "suggested": true
              },
              {
                "title": "Shed",
                "blocks": [
                  {
                    "type": "text",
                    "md": "{{+The saved record of exactly which boxes are in a core shed and where. It’s the ‘ground truth’, so it can’t be edited directly.+}}"
                  }
                ],
                "suggested": true
              },
              {
                "title": "Core move",
                "blocks": [
                  {
                    "type": "text",
                    "md": "{{+A working copy of a shed where you plan and record moves without touching the saved record. When the move is done, you save it to the shed.+}}"
                  }
                ],
                "suggested": true
              },
              {
                "title": "Row, bay and slot",
                "blocks": [
                  {
                    "type": "text",
                    "md": "{{+Where a box lives. A1-1 means row A, bay 1, slot 1. B2-4 means row B, bay 2, slot 4.+}}"
                  }
                ],
                "suggested": true
              },
              {
                "title": "Feature ID",
                "blocks": [
                  {
                    "type": "text",
                    "md": "{{+The structure or area a hole belongs to (e.g. BFA1). CIS groups boxes by feature.+}}"
                  }
                ],
                "suggested": true
              },
              {
                "title": "Hole ID",
                "blocks": [
                  {
                    "type": "text",
                    "md": "{{+The drill hole a box came from (e.g. DD100). It’s the only column CIS needs when you import a spreadsheet.+}}"
                  }
                ],
                "suggested": true
              },
              {
                "title": "Box",
                "blocks": [
                  {
                    "type": "text",
                    "md": "{{+One core tray, numbered down the hole, with its From and To depths in metres.+}}"
                  }
                ],
                "suggested": true
              },
              {
                "title": "Locked and held",
                "blocks": [
                  {
                    "type": "text",
                    "md": "{{+CIS never rearranges a locked bay or slot. A held box sits in an unlocked slot but keeps its place until you choose to update positions (Lesson 8).+}}"
                  }
                ],
                "suggested": true
              },
              {
                "title": "Temporary and permanent pallets",
                "blocks": [
                  {
                    "type": "text",
                    "md": "{{+Places for boxes that aren’t in a bay. Boxes on a temporary pallet are waiting for a slot. A permanent pallet (or shelf, or core pod) is where boxes are meant to stay (Lesson 5).+}}"
                  }
                ],
                "suggested": true
              },
              {
                "title": "Pallet sheet",
                "blocks": [
                  {
                    "type": "text",
                    "md": "{{+The spreadsheet of boxes you upload to start a core move (Lesson 6).+}}"
                  }
                ],
                "suggested": true
              }
            ]
          }
        ],
        "suggested": true
      },
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
    ]
  },
  {
    "id": "lesson-1",
    "num": 1,
    "title": "Getting started",
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
            "md": "Copy and paste this link into file explorer to find CIS: S:/BW Asset Delivery/Z_Geology/Software/Core Shed Planner/Core Inventory System.html"
          }
        ]
      },
      {
        "title": "Connect to a shared folder",
        "blocks": [
          {
            "type": "media",
            "kind": "video",
            "desc": "Clicking the connect to shared folder and navigating to the folder location",
            "src": "file:///S:/BW%20Asset%20Delivery/Z_Geology/Software/Core%20Shed%20Planner/CIS-Tutorial%20%5BProgram%20Files%5D/Clips%20for%20training%20site/Final%20cuts/1.3.mp4"
          },
          {
            "type": "text",
            "md": "The program is designed to be collaborative so it must be connected to a shared folder before use. Connect to the folder called [Data] Program Files in the same place you found the program. Any changes you make to a project or core move will automatically be saved in this folder."
          },
          {
            "type": "warn",
            "md": "Never delete the [Data] folder. A deletion will not break the software, but it will wipe any records in it. If this is a concern, create a copy of the folder elsewhere as a backup."
          },
          {
            "type": "tip",
            "md": "{{+The shared folder only works in Microsoft Edge or Google Chrome. For security, the browser asks for permission to the folder each time you open CIS, so just allow it.+}}"
          },
          {
            "type": "warn",
            "md": "{{+Two people can have the same project open, but if someone else saves a change while you’re editing, CIS warns you that your latest changes haven’t been saved to the shared folder. You can load their version or keep yours. To avoid this, agree who is editing a project at any one time.+}}"
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
                "blocks": [
                  {
                    "type": "text",
                    "md": "If you are setting up a brand new shed with no existing layout, this will automatically assign core boxes an order and position in the shed starting from A1-1."
                  }
                ]
              },
              {
                "title": "Import an existing shed",
                "blocks": [
                  {
                    "type": "text",
                    "md": "If you want to load in a shed layout with pre-determined positions (e.g. boxes already have locations), this option will read row-bay-slot data and ensure boxes are stored correctly. It will lock all slots (including empty ones) so they cannot accidentally be rearranged."
                  }
                ]
              },
              {
                "title": "Enter holes manually",
                "blocks": [
                  {
                    "type": "text",
                    "md": "If you do not have a spreadsheet to import, use this to add holes one by one."
                  },
                  {
                    "type": "tip",
                    "md": "Type in a range of boxes (e.g. 1-4) to create multiple boxes from the same hole."
                  }
                ]
              },
              {
                "title": "Import hole information later",
                "blocks": [
                  {
                    "type": "text",
                    "md": "If you want to skip box importing for now."
                  }
                ]
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
            "md": "If using a spreadsheet to import box information, headings will automatically be detected if they are the same or similar to the CIS fields. If a column isn’t matched automatically, you can assign it a field yourself."
          },
          {
            "type": "text",
            "md": "{{+CIS reads .xlsx, .xls, .xlsm, .csv, .txt and .tsv files. The only column it needs is Hole ID. Feature ID, Box, Of, From (m) and To (m) are optional but recommended, and CIS tells you before importing if any of them aren’t matched.+}}"
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
    ]
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
            "md": "You may have noticed the program uses the terms ‘shed’ and ‘core move’. The main difference between the two is that a shed cannot be edited, while core moves can. The idea is simple – the shed serves as the ‘ground truth’; it is the most up to date version of exactly what boxes are in the shed. Core moves on the other hand build upon the current shed without affecting the saved layout, allowing you to play around and plan out moves and adjustments to the shed without accidentally messing accurate records up."
          },
          {
            "type": "tip",
            "md": "The only way to override a shed layout with a core move layout is by manually pressing the ‘Save move to shed’ button."
          }
        ]
      },
      {
        "title": "Saving a move to the shed",
        "blocks": [
          {
            "type": "text",
            "md": "{{+When a core move is finished, save it to the shed so the shed record matches what’s really in there.+}}"
          },
          {
            "type": "text",
            "md": "{{+At the end of move mode, open ‘Save’ and choose ‘Save to move’ to keep it as a core move for now, or ‘Save to project…’ to make it the shed’s saved layout. Before it replaces the layout, CIS shows a summary of what will change (new boxes, moved boxes, boxes put on pallets or removed) so you can check the numbers match what you moved.+}}"
          },
          {
            "type": "text",
            "md": "{{+If you saved it to the core move, you can save it to the shed later from the CIS home page with ‘Save move to shed’.+}}"
          },
          {
            "type": "tip",
            "md": "{{+Make a backup (see Project backups) before saving a big move to the shed. If something goes wrong, you can load the backup.+}}"
          }
        ],
        "suggested": true
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
            "md": "Project backups can be created on the CIS home page. Navigate to your project and select the ‘Manage’ dropdown, then choose ‘Backup’. This creates a backup .json file in the backups folder of the connected drive. You can also delete, duplicate, or rename projects from this drop down. {{+It’s worth making a backup before any big change, like saving a move to the shed or importing a large spreadsheet.+}}"
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
    ]
  },
  {
    "id": "lesson-3",
    "num": 3,
    "title": "Navigating shed dashboards",
    "summary": "Rack plan, shed map, move mode, edit tabs, searching and filtering, statistics",
    "video": "videos/Lesson3.mp4",
    "steps": [
      {
        "title": "Rack plan tab",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "navigating around the rack plan page",
            "src": null
          },
          {
            "type": "text",
            "md": "The rack plan tab is the main inventory page of CIS. Here, you can view box locations and details, as well as rack details and dimensions."
          }
        ]
      },
      {
        "title": "Shed map",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "Playing with the shed map",
            "src": null
          },
          {
            "type": "text",
            "md": "The shed map tab is an interactive mapping layout. Here, you can create custom top-down shed layouts and save them as PNGs for reference."
          },
          {
            "type": "tip",
            "md": "Any edits made to rows or bays in the shed map are automatically applied to the rack plan!"
          }
        ]
      },
      {
        "title": "Move mode",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "doing a move",
            "src": null
          },
          {
            "type": "text",
            "md": "Move mode is the place to plan and execute core moves. Using an algorithm that groups boxes by common feature designations and hole IDs, then sorts them by box number and depth, move mode will automatically sort and assign new core boxes a location in the shed! But it doesn’t stop there…"
          },
          {
            "type": "text",
            "md": "It will also guide you through the move box by box in the most efficient and time effective way, taking the stress out of the process."
          }
        ]
      },
      {
        "title": "Edit tab",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "opening tabs in the edit tab",
            "src": null
          },
          {
            "type": "text",
            "md": "The edit tab is where you can fine tune box and bay information in CIS. Here you will also find a list of potential issues with the shed inventory, handy to flag and fix bookkeeping errors."
          }
        ]
      },
      {
        "title": "Searching and filtering",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "using the search and filters",
            "src": null
          },
          {
            "type": "text",
            "md": "In the top navigation bar, you’ll find a search and filter function. You can search for rows, bays, slots, features, or holes and the results will be highlighted in the shed overview and bay views, with a results summary also appearing at the top of the screen."
          },
          {
            "type": "text",
            "md": "Filters work as you would expect but can be used alongside search results to hone in further."
          },
          {
            "type": "tip",
            "md": "You can also search the edit tab in the same way, useful if you have a long list of holes, but you need to change the details of only one box."
          }
        ]
      },
      {
        "title": "Statistics",
        "blocks": [
          {
            "type": "media",
            "kind": "image",
            "desc": "Statistics section",
            "src": null
          },
          {
            "type": "text",
            "md": "The statistics section below the navigation bar gives a brief overview of the shed layout in numbers, telling you how many boxes are currently in it, and how many free slots there are."
          }
        ]
      },
      {
        "title": "Lock list",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "navigating the lock list",
            "src": null
          },
          {
            "type": "text",
            "md": "Lesson 1 mentioned the locking of bays so nothing could be moved or removed accidentally. The lock list gives you a quick overview of what is and isn’t locked, without the need to scroll through the bay views."
          },
          {
            "type": "text",
            "md": "Simply click on a bay to lock or unlock it, or click ‘Unlock row’ or ‘Lock row’ to lock all the bays in a row at once."
          },
          {
            "type": "tip",
            "md": "You can lock individual slots from the bay views once the bay itself is unlocked. You can also unlock/lock whole bays from the bay views."
          },
          {
            "type": "tip",
            "md": "If you unlock a bay with boxes you’ll notice it changes to ‘partly locked’ and the bay view says ‘held’. We’ll cover what this means in Lesson 8!"
          }
        ]
      },
      {
        "title": "Size panel",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "using the size panel",
            "src": null
          },
          {
            "type": "text",
            "md": "The size panel is located right next to the lock list and gives an overview of the different box and bay sizes currently in the shed."
          },
          {
            "type": "text",
            "md": "The size panel is also home to the ‘Will it fit?’ tool, where you can input box dimensions to see if and where there is a suitably sized slot in the shed."
          },
          {
            "type": "warn",
            "md": "The Will it fit? tool uses a pre-determined threshold to work out if a box will fit in a slot. For side-loading bays, a box fits if its width and height are equal to or less than the slot’s, and its length matches the slot length or is no more than 1 cm shorter. For front-loading bays, the 1 cm rule applies to the width instead, and the height and length must be equal to or less than the slot’s. You can change this threshold in the Edit tab under Advanced › Spacing (see Lesson 7)."
          }
        ]
      }
    ]
  },
  {
    "id": "lesson-4",
    "num": 4,
    "title": "Rack plan",
    "summary": "Shed overview, bay views",
    "video": "videos/Lesson4.mp4",
    "steps": [
      {
        "title": "Shed overview",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "using the shed overview",
            "src": null
          },
          {
            "type": "text",
            "md": "The first part of the rack plan tab is the shed overview section. Here, you can get a quick glimpse of what boxes are in what slots, how many slots are free, and if any boxes are missing. Designed to look as though you were in the shed looking at the bay, the shed overview dynamically adjusts bay heights based on contents, colour codes boxes by feature, and clearly displays empty slots and missing boxes."
          },
          {
            "type": "tip",
            "md": "You can scroll across the shed overview to see more bays or jump to them using the drop down. You can also click on a bay to jump to its bay view table."
          }
        ]
      },
      {
        "title": "Bay views",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "using the bay views",
            "src": null
          },
          {
            "type": "text",
            "md": "The second part of the rack plan tab is the bay views section. Bay views offer more detail than the shed overview, acting as a tabular layout of all the box information you imported. Scroll across the tables to see all the columns."
          },
          {
            "type": "tip",
            "md": "You can unlock bays by pressing the ‘Locked’ button. Once unlocked, you can lock individual slots by pressing the lock icon on the left hand side of the bay view tables."
          }
        ]
      }
    ]
  },
  {
    "id": "lesson-5",
    "num": 5,
    "title": "Shed map",
    "summary": "How to use, adding elements, pallets, tidying up, saving PNGs",
    "video": "videos/Lesson5.mp4",
    "steps": [
      {
        "title": "The basics",
        "blocks": [
          {
            "type": "text",
            "md": "The shed map allows you to create a top-down view of a core shed without needing any other software. Changes you make in the shed map are automatically applied to the inventory. The map has some basic functions:"
          },
          {
            "type": "options",
            "items": [
              {
                "title": "Moving rows",
                "blocks": [
                  {
                    "type": "media",
                    "kind": "gif",
                    "desc": "moving rows",
                    "src": null
                  },
                  {
                    "type": "text",
                    "md": "Rearrange the order of rows in the shed by dragging and dropping"
                  }
                ]
              },
              {
                "title": "Merging rows",
                "blocks": [
                  {
                    "type": "media",
                    "kind": "gif",
                    "desc": "merging rows",
                    "src": null
                  },
                  {
                    "type": "text",
                    "md": "Combine two or more rows into one under the same row letter by dragging rows adjacent to one another."
                  }
                ]
              },
              {
                "title": "Separating bays",
                "blocks": [
                  {
                    "type": "media",
                    "kind": "gif",
                    "desc": "separating bays",
                    "src": null
                  },
                  {
                    "type": "text",
                    "md": "Drag a bay from a row into empty space to create a new row."
                  }
                ]
              },
              {
                "title": "Edit rows/bays",
                "blocks": [
                  {
                    "type": "media",
                    "kind": "gif",
                    "desc": "editing bays",
                    "src": null
                  },
                  {
                    "type": "text",
                    "md": "Select a row header, or a bay, then press the pencil icon to edit details."
                  }
                ]
              },
              {
                "title": "Change orientation",
                "blocks": [
                  {
                    "type": "media",
                    "kind": "gif",
                    "desc": "changing row directions and bay directions",
                    "src": null
                  },
                  {
                    "type": "text",
                    "md": "Turn an entire row sideways, or turn bays sideways by clicking the row header, and editing the ‘Row runs’ and ‘Bays’ selections."
                  }
                ]
              },
              {
                "title": "Changing numbering system",
                "blocks": [
                  {
                    "type": "media",
                    "kind": "gif",
                    "desc": "changing row numbering",
                    "src": null
                  },
                  {
                    "type": "text",
                    "md": "Edit a row and choose between sequential or alternating number formats to adjust how double-sided rows are numbered."
                  }
                ]
              }
            ]
          },
          {
            "type": "tip",
            "md": "The information button in the bottom corner of the map layout has keyboard shortcuts and some more helpful tricks that you may find useful!"
          }
        ]
      },
      {
        "title": "Adding elements",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "adding elements to the map",
            "src": null
          },
          {
            "type": "text",
            "md": "To customise the look of the layout and map out important non-storage components, you can add in elements by clicking the corresponding icon in the toolbar and dragging the element in the layout. You can select from:"
          },
          {
            "type": "text",
            "md": "- Text\n- Label\n- Rectangle\n- Ellipse\n- Line\n- Arrow\n- Dimension lines\n- Symbols (door, roller door, window, wall, column, north arrow)\n- Pallet\n- Row",
            "list": true
          },
          {
            "type": "tip",
            "md": "You can customise colour and styles of elements by clicking them and adjusting values in the floating window."
          }
        ]
      },
      {
        "title": "Pallets",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "using a pallet",
            "src": null
          },
          {
            "type": "text",
            "md": "Pallets are either temporary or permanent elements in a shed. They are designed to be places to store boxes that do not have a place in a bay."
          },
          {
            "type": "options",
            "items": [
              {
                "title": "Temporary pallets",
                "blocks": [
                  {
                    "type": "text",
                    "md": "A temporary pallet exists as an intermediate location, designed as a storage spot that can be displayed on the shed layout when boxes have nowhere to go. Boxes stored here will display as ‘Waiting for a slot’ in the statistics zone."
                  }
                ]
              },
              {
                "title": "Permanent pallets",
                "blocks": [
                  {
                    "type": "text",
                    "md": "A permanent pallet does not necessarily have to be a pallet, it could be a shelf or a core pod, for example – you can distinguish these by renaming the pallet. Unlike a temporary pallet, boxes stored here are usually not going to be moved, so they do not appear as waiting for slots."
                  }
                ]
              }
            ]
          },
          {
            "type": "tip",
            "md": "You can change a pallet from temporary to permanent by selecting it in the shed map, and ticking ‘Permanent storage location’."
          },
          {
            "type": "tip",
            "md": "You can assign boxes to a pallet manually in the edit tab – just change the planned slot to the pallet name!"
          }
        ]
      },
      {
        "title": "Tidying up",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "display button",
            "src": null
          },
          {
            "type": "text",
            "md": "You can tidy up the map layout by pressing the ‘Display’ button in the toolbar. This offers a variety of settings to adjust to help keep your map looking clean!"
          }
        ]
      },
      {
        "title": "Saving PNGs",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "saving PNG",
            "src": null
          },
          {
            "type": "text",
            "md": "When you are happy with your map, you can save it as a PNG. Hit ‘Save PNG’, give it a title, then hit save again. It will automatically download the file while displaying a preview of the map."
          }
        ]
      }
    ]
  },
  {
    "id": "lesson-6",
    "num": 6,
    "title": "Move mode",
    "summary": "Overview, uploading data, connection type, order preferences, move guidance, saving, alternative approaches",
    "video": "videos/Lesson6.mp4",
    "steps": [
      {
        "title": "Overview",
        "blocks": [
          {
            "type": "media",
            "kind": "image",
            "desc": "move mode flowchart",
            "src": null
          },
          {
            "type": "text",
            "md": "Move mode was designed to take the stress out of core moves. No more flipping between pages trying to find the right box and where it goes; no more spending hours in preparation doing an inventory and working out where the boxes will go. Move mode takes on all that work for you, turning hours of work into seconds of it."
          },
          {
            "type": "text",
            "md": "The basic process is as follows – upload a list of boxes you want to move, CIS will sort and group them automatically and assign them a spot in the shed, start the move and follow along box by box, then save the move and make any required changes. Done!"
          },
          {
            "type": "text",
            "md": "{{+**How CIS picks slots:** it groups boxes by feature (alphabetically, or in your own order, see Lesson 7), then by hole, and orders them by box number and depth. Locked bays and slots are never rearranged, and boxes with sizes only go into slots they fit (see Will it fit? in Lesson 3).+}}"
          }
        ]
      },
      {
        "title": "Uploading data",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "Uploading data",
            "src": null
          },
          {
            "type": "text",
            "md": "Move mode is designed to work with an inventory of boxes to be moved. Upload a spreadsheet of the boxes you plan to move here (drag and drop, or click the +). Once uploaded, you will see a column matching page like the one in Lesson 1 – review the selections and make sure the data looks appropriate. {{+This list is called a pallet sheet.+}}"
          },
          {
            "type": "tip",
            "md": "The list you upload does not need to be in any order; CIS handles the ordering for you. Just include any box details you want displayed in the final inventory."
          }
        ]
      },
      {
        "title": "Connection type",
        "blocks": [
          {
            "type": "text",
            "md": "Connection type allows you to adjust the approach of move mode depending on how you like to work. Offline mode is paper based, while online mode is computer based and actively guided."
          }
        ]
      },
      {
        "title": "Offload order",
        "blocks": [
          {
            "type": "text",
            "md": "Offload order determines which order you will be guided through the move. Pallet order guides in the order which core boxes will be lifted off pallets (i.e. last box on = first box off), whereas slot order guides you simply from one slot to the next regardless of box order on pallets."
          },
          {
            "type": "tip",
            "md": "Pallet order is generally more logical and efficient!"
          }
        ],
        "branch": "Online connection type"
      },
      {
        "title": "Move guidance",
        "blocks": [
          {
            "type": "guidance",
            "items": [
              {
                "n": 1,
                "label": "next off pallet",
                "md": "This is the box that is expected to be moved next."
              },
              {
                "n": 2,
                "label": "goes to",
                "md": "This is the destination slot for the box"
              },
              {
                "n": 3,
                "label": "bay diagram",
                "md": "This indicator shows you where in the bay the slot is"
              },
              {
                "n": 4,
                "label": "put in slot button",
                "md": "Hit this if the box went in the assigned slot. You will be shown the next expected box"
              },
              {
                "n": 5,
                "label": "it didn’t go there button",
                "md": "Hit this if the box could not go into the assigned slot. You will be given some options to adjust the destination slot."
              },
              {
                "n": 6,
                "label": "not this box button",
                "md": "Hit this if the expected box is not the box you are holding. You will be given some alternatives based off positioning, or you can search the exact box."
              },
              {
                "n": 7,
                "label": "temporary pallet",
                "md": "If you have nowhere to put the box you can send it to a temporary pallet for now."
              },
              {
                "n": 8,
                "label": "different slot",
                "md": "If you placed the box in a different slot, record it here."
              },
              {
                "n": 9,
                "label": "the slot was meant for",
                "md": "If you placed the box in a different slot, before recording it, use these buttons to indicate if you left the original slot empty, or you used it for another box."
              },
              {
                "n": 10,
                "label": "up next",
                "md": "This is a preview of the next boxes in the order. Tap one to switch to it."
              },
              {
                "n": 11,
                "label": "temporary pallet",
                "md": "Boxes that don’t fit in a slot are sent here. You can assign a slot from here or send it back into the moving queue. Boxes on the pallet at the end of the move are saved here."
              },
              {
                "n": 12,
                "label": "placed so far",
                "md": "See what boxes you have placed or undo a move here."
              },
              {
                "n": 13,
                "label": "save",
                "md": "You can save the completed move to the core move file (recommended to avoid accidental overwrites), or you can save directly to the shed file.",
                "tip": "If you save to the core move file, you will have to save the move to the shed on the CIS homepage to update the permanent shed layout."
              },
              {
                "n": 14,
                "label": "make more changes",
                "md": "If you realised you messed up, or you want to change some pallets around, hit this."
              },
              {
                "n": 15,
                "label": "start over",
                "md": "Use this if you need to start from scratch."
              }
            ]
          }
        ],
        "branch": "Online connection type"
      },
      {
        "title": "Offload order",
        "blocks": [
          {
            "type": "text",
            "md": "Offload order determines which order you will be guided through the move. Pallet order guides in the order which core boxes will be lifted off pallets (i.e. last box on = first box off), whereas slot order guides you simply from one slot to the next regardless of box order on pallets."
          },
          {
            "type": "tip",
            "md": "Pallet order is generally more logical and efficient!"
          }
        ],
        "branch": "Offline connection type"
      },
      {
        "title": "Slot sheet",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "print sheet screen and downloading the pdf",
            "src": null
          },
          {
            "type": "text",
            "md": "CIS will show you a preview of a slot sheet. Select ‘print slot sheet’ to save it as a PDF document or immediately print the file. The slot sheet is a simple checklist that shows the core boxes in the selected move order, making it easy to track the move using just a piece of paper and a pen."
          },
          {
            "type": "text",
            "md": "At the end of the slot sheet, you’ll find a table where you can record changes made during the move."
          }
        ],
        "branch": "Offline connection type"
      },
      {
        "title": "Returning from the move",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "hitting the back from move button and changing order",
            "src": null
          },
          {
            "type": "text",
            "md": "When you are all finished with the move, you can go back into the Start Move step of move mode and press ‘I’m back from the move’. CIS will then ask whether everything went to plan, or whether some boxes went into different slots."
          },
          {
            "type": "options",
            "items": [
              {
                "title": "Everything went as planned",
                "blocks": [
                  {
                    "type": "text",
                    "md": "You will be taken to the finish page where you can save the move ([see the save options in online mode](goto:online#13))."
                  }
                ]
              },
              {
                "title": "Some boxes were moved",
                "blocks": [
                  {
                    "type": "text",
                    "md": "You will be taken to a page set out in a similar manner to the table in the slot sheet. Copy over what was changed, and what happened to the original slot. You will then be given the opportunity to validate the ordering in the event CIS made an error in the automatic process."
                  },
                  {
                    "type": "text",
                    "md": "Here you can drag around boxes to their actual location to tidy up. Then hit ‘update the plan’ and save the move ([see the save options in online mode](goto:online#13))."
                  }
                ]
              }
            ]
          }
        ],
        "branch": "Offline connection type"
      },
      {
        "title": "Alternative approaches",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "no pallet sheet option",
            "src": null
          },
          {
            "type": "text",
            "md": "If you are simply moving existing boxes around, and have no new boxes to import, you can select ‘No pallet sheet?’ from the move mode overview page. Here, you can search and select boxes already in the shed to use in a core move."
          }
        ]
      }
    ],
    "branched": true,
    "branches": [
      "Online connection type",
      "Offline connection type"
    ]
  },
  {
    "id": "lesson-7",
    "num": 7,
    "title": "Edit",
    "summary": "Issues, holes and boxes, bay settings, advanced editing",
    "video": "videos/Lesson7.mp4",
    "steps": [
      {
        "title": "Issues",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "Using issues tab",
            "src": null
          },
          {
            "type": "text",
            "md": "The issues tab is designed as a place to quickly review and resolve any issues with bookkeeping in the core inventory. CIS will automatically detect any double up boxes or missing information (e.g. hole ID, feature designation) in your inventory list, and give you an option to fix or ignore them."
          }
        ]
      },
      {
        "title": "Holes and boxes",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "using holes and boxes tab",
            "src": null
          },
          {
            "type": "text",
            "md": "The holes and boxes section is the place to make edits to hole and box information or add in new data. You can add new boxes in following the same steps as in Lesson 1, or you can scroll down to the box table to edit existing information."
          },
          {
            "type": "example",
            "name": "holes table"
          },
          {
            "type": "text",
            "md": "When editing hole information, you can change the planned slot by dragging rows around or typing the new slot directly into the ‘Planned Slot’ column."
          },
          {
            "type": "tip",
            "md": "You can search for holes in this table using the search function in the navigation bar. Particularly useful if you have a very long list of boxes!"
          }
        ]
      },
      {
        "title": "Edit bay settings",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "using bay settings tab",
            "src": null
          },
          {
            "type": "text",
            "md": "The bay settings tab is simply used to adjust bay details. Here, you can change the number of slots in a bay, dimensions, blocked slots and orientation. This is also the only place in CIS where you can delete bays."
          },
          {
            "type": "tip",
            "md": "Use the settings in a bay header to update an entire bay at once. Use the settings at the top of the tab to update every row at once."
          }
        ]
      },
      {
        "title": "Advanced editing",
        "blocks": [
          {
            "type": "media",
            "kind": "gif",
            "desc": "using advanced tab",
            "src": null
          },
          {
            "type": "text",
            "md": "The advanced tab is home to some extra features you may never need but are good to have:"
          },
          {
            "type": "options",
            "items": [
              {
                "title": "Feature order",
                "blocks": [
                  {
                    "type": "text",
                    "md": "CIS groups boxes by feature and hole, then organises by box number and depth. The order of features are determined alphabetically, but if you want your own custom ordering, just drag the features into the desired order."
                  }
                ]
              },
              {
                "title": "Spacing",
                "blocks": [
                  {
                    "type": "text",
                    "md": "If you ever need to consistently leave slots empty (not sure why you would but it’s here anyway!), change the spacing settings here. You can also change the threshold for box length and width in the Will it fit? tool in this pane (see Lesson 3)."
                  }
                ]
              },
              {
                "title": "Custom columns",
                "blocks": [
                  {
                    "type": "text",
                    "md": "If you need to add in or remove columns from the bay view tables, you can do so here!"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "lesson-8",
    "num": 8,
    "title": "Extras",
    "summary": "Holding boxes",
    "video": null,
    "steps": [
      {
        "title": "Holding boxes",
        "blocks": [
          {
            "type": "media",
            "kind": "image",
            "desc": "held box image",
            "src": null
          },
          {
            "type": "text",
            "md": "If you unlock a locked slot with a box in it, you will see the box gets a blue ‘held’ label. This is in place to ensure you can unlock slots without existing orders being messed up by the sorting algorithm."
          },
          {
            "type": "tip",
            "md": "At the top of rack plan page, you will see a banner advising you of this process. ‘Ignore’ allows you to remove the banner but keep the boxes held, while ‘Update positions’ uses the sorting algorithm to regroup boxes into the best order. Always press ignore if you do not want the ordering to change."
          }
        ]
      },
      {
        "title": "Troubleshooting",
        "blocks": [
          {
            "type": "options",
            "items": [
              {
                "title": "CIS won’t connect to the shared folder",
                "blocks": [
                  {
                    "type": "text",
                    "md": "{{+Use Microsoft Edge or Google Chrome. Other browsers can’t connect to a shared folder and only save projects in the browser. When the browser asks for access to the folder, allow it.+}}"
                  }
                ],
                "suggested": true
              },
              {
                "title": "My project is missing",
                "blocks": [
                  {
                    "type": "text",
                    "md": "{{+Check you’re connected to the [Data] Program Files folder in the shared drive, not a copy somewhere else. You can also load a backup with ‘Open project file’ (Lesson 2).+}}"
                  }
                ],
                "suggested": true
              },
              {
                "title": "CIS says someone else changed the project",
                "blocks": [
                  {
                    "type": "text",
                    "md": "{{+Another person saved the same project while you were editing it. Choose whether to load their version or keep yours (Lesson 1).+}}"
                  }
                ],
                "suggested": true
              },
              {
                "title": "A box is in the wrong slot",
                "blocks": [
                  {
                    "type": "text",
                    "md": "{{+Change its planned slot in Edit › Holes and boxes (Lesson 7), and check the Issues tab for doubled-up boxes.+}}"
                  }
                ],
                "suggested": true
              }
            ]
          }
        ],
        "suggested": true
      }
    ]
  }
];
