<!--
GOA's manual (first pass, written by Claude from the training lessons and the CIS program itself).
Replace or extend it with the real manual when it's ready.

How GOA reads this file
  # Chapter            groups sections
  ## Section           one answer. Keep sections short and title them the way people ask.
  Questions: a | b     example phrasings people might use (never shown)
  Lesson: 6 › Move guidance    the lesson step GOA links to (0 = Overview)
  1. / - lines         numbered steps / bullet points. GOA shows numbered steps as steps.
  **Term**: meaning    a glossary definition

After editing, run:  python3 build-lessons.py   (it rebuilds GOA too)
-->

# Getting started

## What CIS is
Questions: what is cis | what does cis do | what is this program for | what is the core inventory system | why would i use cis | what's the point of cis
Lesson: 0 › What CIS does
The Core Inventory System (CIS) keeps a live record of every core box in a shed: which row, bay and slot it's in, and what's in it (feature, hole, box number and depths). Because it's saved in a shared folder, everyone on the team sees the same up-to-date shed.

It also plans and guides core moves. Give CIS a list of boxes and it works out where each one should go, guides you through the move box by box (or gives you a sheet to print), and updates the shed record when you're done.

## Opening CIS
Questions: where is cis | where is the cis file kept | where do i find the program | how do i open cis | where is the software saved | where's the file | how do i launch it | which folder is cis in
Lesson: 1 › Finding the program
CIS is at S:/BW Asset Delivery/Z_Geology/Software/Core Shed Planner/Core Inventory System.html. Copy that path into File Explorer, or browse to the Z_Geology folder → Software → Core Shed Planner. Open it straight from that folder and it opens in your default web browser.

If it doesn't open properly, set Microsoft Edge as your default browser and try again.

## Which browser to use
Questions: which browser should i use | does it work in firefox | does it work in safari | chrome or edge | best browser for cis
Lesson: 8 › Troubleshooting
Use Microsoft Edge or Google Chrome. Other browsers can't connect to a shared folder, so your projects would only be saved in that one browser.

## Connecting to the shared folder
Questions: how do i connect to the shared folder | connect a folder | which folder do i connect to | where is my data saved | set up the data folder | where are projects stored
Lesson: 1 › Connect to a shared folder
CIS must be connected to a shared folder before you use it, so the whole team works from the same records.

1. Open CIS and choose to connect to a shared folder.
2. Go to the same place you found the program.
3. Choose the folder called [Data] Program Files.

Any changes you make to a project or core move are saved in this folder automatically. For security, the browser asks for permission to the folder each time you open CIS. Allow it.

## Never delete the [Data] folder
Questions: can i delete the data folder | what happens if the data folder is deleted | is it safe to delete the data folder | clean up the data folder
Lesson: 1 › Connect to a shared folder
Never delete the [Data] Program Files folder. Deleting it won't break the software, but it wipes every record in it. If you're worried, copy the folder somewhere else as a backup.

## Two people editing the same project
Questions: can two people use it at once | someone else changed the project | my changes haven't been saved | load their version | can we both edit | working on the same project at the same time
Lesson: 1 › Connect to a shared folder
Two people can have the same project open. If someone else saves a change while you're editing, CIS warns you that your latest changes haven't been saved to the shared folder. You can load their version or keep yours.

To avoid this, agree who is editing a project at any one time.

# Projects and sheds

## Projects
Questions: what is a project | create a project | make a new project | start a new project | how do i set up a project | new dam
Lesson: 1 › Create a new project
A project represents one asset, such as a dam or weir. A project can hold several core sheds.

When you create a new project, you give it a project name and a shed name, then CIS takes you straight to setting up the shed.

## Setting up a new shed
Questions: set up a shed | new shed options | plan new core | import an existing shed | enter holes manually | import hole information later | which setup option should i choose | i don't have a spreadsheet
Lesson: 1 › Create a new project
When you set up a shed, CIS gives you four options:
- **Plan new core**: for a brand new shed with no existing layout. CIS gives every box an order and a position, starting from A1-1.
- **Import an existing shed**: for a shed where boxes already have locations. CIS reads the row-bay-slot data and locks every slot (including empty ones) so nothing is rearranged by accident.
- **Enter holes manually**: add holes one at a time if you don't have a spreadsheet. Type a range of boxes (e.g. 1-4) to create several boxes from the same hole.
- **Import hole information later**: skip importing boxes for now.

## Adding sheds to a project
Questions: add a shed | add another shed | more than one shed | second shed | multiple sheds in a project
Lesson: 2 › Adding sheds
If a project has more than one shed, press '+ Add shed' in the project tab to add another.

## Sheds and core moves
Questions: difference between a shed and a core move | what is a core move | why can't i edit the shed | why is the shed locked for editing | the shed is read only | uneditable shed | what is the ground truth
Lesson: 2 › Shed vs core move
A shed is the saved record of exactly which boxes are in the shed and where. It's the ‘ground truth’, so it can't be edited directly.

A core move builds on the current shed without changing its saved layout. Use core moves to plan and try out moves without messing up accurate records. The only way to replace a shed's layout with a core move's is to save the move to the shed.

## Saving a move to the shed
Questions: save a move to the shed | update the shed layout | make the move permanent | save to project | save the core move | when do i save to the shed
Lesson: 2 › Saving a move to the shed
When a core move is finished, save it to the shed so the record matches what's really there.

At the end of move mode, open ‘Save’ and choose:
- **Save to move**: keeps it as a core move for now. This is recommended, to avoid overwriting the shed by accident.
- **Save to project…**: makes it the shed's saved layout. CIS first shows a summary of what will change (new boxes, moved boxes, boxes put on pallets or removed), so you can check it matches what you moved.

If you saved to the core move, save it to the shed later from the CIS home page with ‘Save move to shed’.

## Project backups
Questions: back up a project | keep a copy of my project | make a backup | how do i backup | where are backups saved | json backup | backup before saving
Lesson: 2 › Project backups
1. On the CIS home page, go to your project.
2. Open the ‘Manage’ dropdown.
3. Choose ‘Backup’.

CIS saves a backup .json file in the backups folder of the connected drive. Make a backup before any big change, like saving a move to the shed or importing a large spreadsheet.

## Restoring a backup
Questions: restore a backup | load a backup | open a project file | recover a project | go back to an old version | undo saving to the shed
Lesson: 2 › Project backups
Load a backup with the ‘Open project file’ button in the folder connection drop-down list, then choose the backup .json file.

## Renaming, copying or deleting a project
Questions: rename a project | delete a project | duplicate a project | copy a project | remove a project
Lesson: 2 › Project backups
Go to the project on the CIS home page and open the ‘Manage’ dropdown. You can rename, duplicate or delete the project from there.

## Exporting a shed or core move
Questions: export to excel | export the inventory | download the inventory | get a spreadsheet of the shed | core inventory template | export with custom columns
Lesson: 2 › Exporting
Press ‘Export’ in the top corner of an open shed or core move. CIS exports its inventory into the standard core inventory template. You can also export to a non-standard template that includes custom columns.

Exports include any saved changes. If you prefer working in Excel, you can export a shed, edit it in Excel, then import the edited spreadsheet again.

# Importing boxes

## Spreadsheet columns and file types
Questions: what columns do i need | what file types can i import | can i upload a csv | which columns are required | spreadsheet format | what does my spreadsheet need
Lesson: 1 › Checking hole information
CIS reads .xlsx, .xls, .xlsm, .csv, .txt and .tsv files.

The only column CIS needs is Hole ID. Feature ID, Box, Of, From (m) and To (m) are optional but recommended. CIS tells you before importing if any of them aren't matched.

## Matching columns
Questions: headings weren't detected | my headings don't line up | match my columns | assign a field to a column | column matching page | my column names are different | split feature and hole id
Lesson: 1 › Checking hole information
When you import a spreadsheet, CIS matches headings that are the same as, or similar to, its own fields. If a column isn't matched automatically, assign it a field yourself.

If boxes are labelled with the feature ID and hole ID together (e.g. BFA1-DD100), CIS can split them into two columns. Just tick the box.

## Checking the import preview
Questions: import preview | check before importing | what does next do on the import page
Lesson: 1 › Checking hole information
Before the final import, check the preview to make sure you're importing exactly what you want, then press ‘Next’.

## Arranging a new shed
Questions: arrange the shed before importing | naming convention | row orientation | change the layout before import
Lesson: 1 › Arranging a shed
Before the final import, you can make early changes to the shed layout, such as the naming convention and row orientation. More detailed editing is available once the shed is created, on the shed map and in the Edit tab.

# Shed dashboards

## Rack plan tab
Questions: what is the rack plan | main inventory page | where can i see box locations | rack details | rack dimensions
Lesson: 3 › Rack plan tab
The rack plan tab is the main inventory page. It shows box locations and details, plus rack details and dimensions. It has two parts: the shed overview and the bay views.

## Shed overview
Questions: shed overview | what do the colours mean | colour coding | missing boxes | empty slots | why are bays different heights
Lesson: 4 › Shed overview
The shed overview is the first part of the rack plan tab. It's laid out as if you were standing in the shed looking at the bays. It colour codes boxes by feature, adjusts bay heights to their contents, and clearly shows empty slots and missing boxes.

Scroll across to see more bays, or jump to one with the drop-down. Click a bay to jump to its bay view table.

## Bay views
Questions: bay view | bay table | box details table | see all the columns | scroll the table
Lesson: 4 › Bay views
Bay views are the second part of the rack plan tab: one table per bay, with all the box information you imported. Scroll across a table to see all its columns.

## Searching and filtering
Questions: search for a box | find a hole | where is a box | locate a box | filter the boxes | find a feature | search results
Lesson: 3 › Searching and filtering
Use the search and filters in the top navigation bar. You can search for rows, bays, slots, features or holes. Results are highlighted in the shed overview and bay views, and a summary appears at the top of the screen.

Use filters alongside a search to narrow it down further. You can search the Edit tab the same way.

## Statistics
Questions: how many boxes are in the shed | how many free slots | waiting for a slot | shed numbers | statistics section
Lesson: 3 › Statistics
The statistics section below the navigation bar shows the shed in numbers: how many boxes are in it and how many slots are free. Boxes on a temporary pallet show as ‘Waiting for a slot’.

## Lock list
Questions: lock list | which bays are locked | lock a row | unlock a row | lock a bay | unlock a bay
Lesson: 3 › Lock list
The lock list shows what is and isn't locked, without scrolling through the bay views.
- Click a bay to lock or unlock it.
- Press ‘Lock row’ or ‘Unlock row’ to change every bay in a row at once.

CIS never moves or removes boxes in locked bays and slots.

## Locking single slots
Questions: lock a single slot | lock individual slots | lock icon | padlock on a slot
Lesson: 4 › Bay views
1. Unlock the bay by pressing its ‘Locked’ button in the bay view.
2. Press the lock icon on the left of the slot's row in the bay view table.

You can also lock or unlock whole bays from the bay views.

## Held boxes
Questions: what does held mean | blue held label | partly locked | update positions | ignore the banner | banner at the top of the rack plan
Lesson: 8 › Holding boxes
If you unlock a locked slot with a box in it, the box gets a blue ‘held’ label and the bay shows as ‘partly locked’. Holding stops the sorting algorithm from moving boxes that already have a place.

A banner at the top of the rack plan explains this. ‘Ignore’ hides the banner but keeps the boxes held. ‘Update positions’ lets the sorting algorithm regroup boxes into the best order. Press ‘Ignore’ if you don't want the order to change.

## Size panel and Will it fit?
Questions: will it fit | does this box fit | box sizes in the shed | bay sizes | size panel | find a slot big enough for a box
Lesson: 3 › Size panel
The size panel sits next to the lock list and shows the box and bay sizes in the shed. Its ‘Will it fit?’ tool checks whether, and where, there's a slot that fits a box: enter the box's dimensions to see.

For side-loading bays, a box fits if its width and height are equal to or less than the slot's, and its length matches the slot length or is no more than 1 cm shorter. For front-loading bays, the 1 cm rule applies to the width instead, and the height and length must be equal to or less than the slot's.

## Changing the Will it fit? threshold
Questions: change the fit threshold | fit tolerance | change the 1 cm rule | change fit rules
Lesson: 7 › Advanced editing
Change the Will it fit? threshold for box length and width in the Edit tab, under Advanced › Spacing.

# Shed map

## Shed map basics
Questions: what is the shed map | top down view | map layout | draw the shed | keyboard shortcuts on the map
Lesson: 5 › The basics
The shed map is a top-down view of the shed that you can build without any other software. Changes you make to rows and bays on the map are applied to the inventory and rack plan automatically.

The information button in the bottom corner of the map has keyboard shortcuts and more tips.

## Rearranging rows on the map
Questions: move a row | reorder rows | merge rows | separate a bay | make a new row from a bay | drag rows on the map
Lesson: 5 › The basics
- **Move rows**: drag and drop rows to change their order.
- **Merge rows**: drag rows next to one another to combine them under the same row letter.
- **Separate bays**: drag a bay out of a row into empty space to make a new row.

## Editing rows and bays on the map
Questions: edit a row | edit a bay on the map | pencil icon | turn a row sideways | rotate bays | row direction | alternating numbering | sequential numbering | double sided rows
Lesson: 5 › The basics
Select a row header or a bay, then press the pencil icon to edit its details.
- To turn a row or its bays sideways, click the row header and change ‘Row runs’ and ‘Bays’.
- To change how double-sided rows are numbered, edit the row and choose sequential or alternating numbering.

## Adding elements to the map
Questions: add text to the map | add a label | add a door | draw a rectangle | add an arrow | dimension lines | north arrow | add symbols | change the colour of an element
Lesson: 5 › Adding elements
Click an icon in the toolbar and drag the element into the layout. You can add text, labels, rectangles, ellipses, lines, arrows, dimension lines, symbols (door, roller door, window, wall, column, north arrow), pallets and rows.

Click an element to change its colour and style in the floating window.

## Pallets
Questions: what is a pallet | temporary pallet | permanent pallet | store boxes on a shelf | core pod | make a pallet permanent | put a box on a pallet
Lesson: 5 › Pallets
Pallets hold boxes that don't have a place in a bay.
- **Temporary pallets** are a stopgap. Boxes on them show as ‘Waiting for a slot’ in the statistics.
- **Permanent pallets** are where boxes are meant to stay. They don't have to be real pallets: rename one to a shelf or core pod, for example. Boxes on them don't count as waiting.

To make a pallet permanent, select it on the shed map and tick ‘Permanent storage location’. To put a box on a pallet yourself, change its planned slot to the pallet's name in the Edit tab.

## Tidying the map
Questions: tidy up the map | display settings | display button | make the map look cleaner
Lesson: 5 › Tidying up
Press ‘Display’ in the toolbar for settings that help keep the map looking clean.

## Saving the map as a PNG
Questions: save the map as a png | export the map | picture of the map | image of the shed layout | download the map
Lesson: 5 › Saving PNGs
1. Press ‘Save PNG’.
2. Give the map a title.
3. Press save again.

CIS downloads the file and shows a preview of the map.

# Move mode

## What move mode does
Questions: what is move mode | how does move mode work | plan a core move | move boxes | steps of move mode
Lesson: 6 › Overview
Move mode plans and guides core moves. Upload a list of boxes to move and CIS sorts and groups them and gives each one a slot. Then follow the move box by box, save it, and make any changes.

Move mode has five steps: Upload move data, Connection mode, Offload order, Start move and Finish.

## How CIS picks slots
Questions: how does cis choose slots | sorting algorithm | order of the boxes | why did it put a box there | how are boxes grouped
Lesson: 6 › Overview
CIS groups boxes by feature (alphabetically, or in your own order from Edit › Advanced), then by hole, and orders them by box number and depth. Locked bays and slots are never rearranged, and boxes with sizes only go into slots they fit.

## Uploading a pallet sheet
Questions: upload boxes to move | what is a pallet sheet | upload move data | what list do i upload | does the list need to be in order
Lesson: 6 › Uploading data
Upload a spreadsheet of the boxes you plan to move (drag and drop it, or click +). This list is called a pallet sheet. CIS then shows a column matching page like the one used when importing. Check the selections and make sure the data looks right.

The list doesn't need to be in any order, because CIS sorts it for you. Include any box details you want in the final inventory.

## Moving boxes already in the shed
Questions: no pallet sheet | move existing boxes | rearrange boxes already in the shed | pick boxes from the shed
Lesson: 6 › Alternative approaches
If you're only moving boxes that are already in the shed, choose ‘No pallet sheet?’ on the move mode overview page. You can then search for and select boxes in the shed to use in the move.

## Online or offline
Questions: online or offline | connection type | connection mode | paper or computer | which mode should i use
Lesson: 6 › Connection type
- **Online** is computer based: CIS guides you through the move box by box on screen.
- **Offline** is paper based: print a slot sheet, do the move, then tell CIS what changed.

## Offload order
Questions: offload order | pallet order or slot order | what order should i use | which order is best
Lesson: 6 › Offload order
- **Pallet order** follows the order boxes come off the pallets (last box on is the first box off).
- **Slot order** goes from one slot to the next (A1-1, A1-2, A1-3…), whatever order the boxes are in on the pallets.

Pallet order is usually more logical and efficient. It needs a pallet sheet.

## Guided move (online)
Questions: how do i do the move online | next off the pallet | goes to | put in slot | guided move | move guidance screen
Lesson: 6 › Move guidance
The move screen shows the box expected next off the pallet, the slot it goes to, and where that slot is in the bay.
- Press ‘Put in [slot]’ if the box went in its assigned slot. CIS shows the next box.
- Press ‘It didn't go there’ if it couldn't go in that slot.
- Press ‘Not this box?’ if you're holding a different box.

‘Up next’ shows the next few boxes: tap one to switch to it. Each box you confirm is locked into its slot and saved straight away.

## When a box doesn't go in its slot
Questions: it didn't go there | the box doesn't fit its slot | box went in a different slot | the slot it was meant for | leave the slot empty | use it for the next box | nowhere to put a box
Lesson: 6 › Move guidance
Press ‘It didn't go there’ and choose what happened:
- Pick one of the empty slots the box fits, or type the slot it went in and press ‘Record it there’.
- For the slot it was meant for, choose ‘Use it for the next box’ or ‘Leave it empty’ before recording.
- If there's nowhere to put it, choose ‘Put it on the temporary pallet’.

Boxes on the temporary pallet can be given a slot later or sent back into the queue. Any still on the pallet at the end of the move stay there.

## Holding the wrong box
Questions: not this box | i'm holding a different box | wrong box | box came off out of order
Lesson: 6 › Move guidance
Press ‘Not this box?’ and pick the box you're holding. CIS lists the closest boxes in the order first, or you can search for it. After you place it, CIS takes you back to the box it was expecting.

## Undoing a placement
Questions: undo a placement | put a box in by mistake | placed so far | i put a box in the wrong slot during the move | take back a box
Lesson: 6 › Move guidance
Open ‘Placed so far’ to see the boxes you've placed, then press ‘Undo’ next to a box to put it back in the queue.

## Finishing a move
Questions: finish a move | make more changes | start over | end the move | what do i do at the end of the move
Lesson: 6 › Move guidance
On the Finish step:
- **Save**: ‘Save to move’ keeps it in the core move file (recommended), or ‘Save to project…’ saves it straight to the shed. If you save to the core move, save it to the shed later from the CIS home page.
- **Make more changes**: go back if you made a mistake or want to move boxes between pallets.
- **Start over**: start the move again from scratch.

## Slot sheet (offline)
Questions: slot sheet | print the slot sheet | save the sheet as a pdf | paper checklist | do the move on paper
Lesson: 6 › Slot sheet
CIS shows a preview of the slot sheet: a checklist of the boxes in the chosen move order. Press ‘Print slot sheet’ to print it or save it as a PDF. At the end of the sheet there's a table for noting any changes made during the move.

## After an offline move
Questions: back from the move | returning from the move | some boxes went somewhere else | record changes after the move | everything went to plan
Lesson: 6 › Returning from the move
Go back to the Start move step of move mode and press ‘I'm back from the move’. CIS asks whether everything went to plan.
- **Everything went as planned**: go to the Finish step and save the move.
- **Some boxes were moved**: enter each box that went somewhere else, its new slot, and what happened to its original slot (filled by the next box or left empty). Check the order, drag boxes to their real positions if needed, press ‘Update the plan’, then save the move.

# Edit tab

## Edit tab overview
Questions: what is the edit tab | where do i edit boxes | fine tune the shed | edit bay information
Lesson: 3 › Edit tab
The Edit tab is where you fine-tune box and bay information. It has four parts: Issues, Holes and boxes, Bay settings and Advanced.

## Issues
Questions: issues tab | duplicate boxes | doubled up boxes | missing information | bookkeeping errors | fix errors in the inventory
Lesson: 7 › Issues
The Issues tab finds bookkeeping problems in the inventory, such as doubled-up boxes or missing information (like a hole ID or feature). You can fix or ignore each one.

## Editing holes and boxes
Questions: edit a box | change box details | add new boxes | add a hole | edit hole information | box table
Lesson: 7 › Holes and boxes
Use Holes and boxes to change hole and box information or add new data. Add new boxes the same way as when you set up a shed, or scroll down to the box table to edit existing boxes. Use the search in the navigation bar to find a hole quickly.

## Changing a box's planned slot
Questions: change a planned slot | move a box up or down the order | move a box to a different slot | reorder boxes | type a slot | custom order | box is in the wrong slot
Lesson: 7 › Holes and boxes
In Edit › Holes and boxes, boxes are listed in fill order. Either:
- drag ⠿ to move a box to a different place in the order, or
- type a slot like A1-5 in the ‘Planned slot’ column to put the box exactly there. Boxes below it move down.

## Bay settings
Questions: bay settings | change the number of slots | change bay dimensions | blocked slots | delete a bay | bay orientation | update every row at once
Lesson: 7 › Edit bay settings
Use Bay settings to change the number of slots in a bay, its dimensions, blocked slots and orientation. It's the only place in CIS where you can delete bays.

Use the settings in a bay header to update that whole bay, or the settings at the top of the tab to update every row.

## Advanced settings
Questions: advanced settings | feature order | spacing | leave slots empty | custom columns | add a column | remove a column
Lesson: 7 › Advanced editing
- **Feature order**: features are ordered alphabetically by default. Drag them into your own order.
- **Spacing**: leave slots empty at regular intervals, and change the Will it fit? length and width threshold.
- **Custom columns**: add or remove columns in the bay view tables.

# Troubleshooting

## CIS won't open
Questions: cis won't open | blank page | nothing loads | the program isn't working | it won't load
Lesson: 1 › Finding the program
Open CIS from the Z_Geology folder, not a copy. If it still won't open, set Microsoft Edge as your default browser and try again.

## Can't connect to the shared folder
Questions: can't connect to the folder | folder won't connect | permission denied | access to the folder | projects only saved in this browser
Lesson: 8 › Troubleshooting
Use Microsoft Edge or Google Chrome: other browsers can't connect to a shared folder. When the browser asks for access to the folder, allow it.

## My project is missing
Questions: my project is missing | can't find my project | project disappeared | where did my project go | project not in the list
Lesson: 8 › Troubleshooting
Check you're connected to the [Data] Program Files folder in the shared drive, not a copy somewhere else. You can also load a backup with ‘Open project file’.

# Glossary

## Terms
Lesson: 0 › Key terms
**Project**: an asset such as a dam or weir. A project can hold one or more sheds.
**Shed**: the saved record of exactly which boxes are in a core shed and where. It can't be edited directly.
**Core move**: a working copy of a shed for planning and recording moves without changing the saved record.
**Row, bay and slot**: where a box lives. A1-1 means row A, bay 1, slot 1. B2-4 means row B, bay 2, slot 4.
**Feature ID**: the structure or area a hole belongs to (e.g. BFA1). CIS groups boxes by feature.
**Hole ID**: the drill hole a box came from (e.g. DD100).
**Box**: one core tray, numbered down the hole, with its From and To depths in metres.
**Locked**: a bay or slot CIS will never rearrange.
**Held**: a box in an unlocked slot that keeps its place until you choose to update positions.
**Temporary pallet**: a place for boxes waiting for a slot.
**Permanent pallet**: a pallet, shelf or core pod where boxes are meant to stay.
**Pallet sheet**: the spreadsheet of boxes you upload to start a core move.
**Slot sheet**: the printed checklist used for an offline move.
