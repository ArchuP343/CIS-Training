<!--
GOA's manual: the final version, built from the full CIS user manual (Manual/CIS User Manual.docx).
Each ## section is one answer GOA can give. Keep them short, conversational, and titled the way people ask.

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
Questions: what is cis | what does cis do | what is this program for | what is the core inventory system | why would i use cis | what's the point of cis | what can cis do
Lesson: 0 › What CIS does
The Core Inventory System (CIS) is a one-stop shop for managing core. It keeps a live record of every core box in a shed: which row, bay and slot it's in, and what's in it (feature, hole, box number and depths). Because it's saved in a shared folder, everyone on the team sees the same up-to-date shed.

It also plans and guides core moves. Upload a list of boxes and CIS works out where each one should go, keeping boxes from the same feature and hole together and in order. Then it guides you through the move box by box (or gives you a sheet to print), and updates the shed record when you're done.

## A typical workflow
Questions: where do i start | what's the usual process | normal process | the process from start to finish | what order do i do things in | typical job | overview of the steps | how do i use cis from start to finish
Lesson: 0 › What CIS does
Most jobs go like this:
1. Connect to the shared Data [Program Files] folder.
2. Create a project and import the shed's existing inventory.
3. Use the rack plan, shed map, search and filters to find boxes and check the shed.
4. When boxes need to move, create a core move, upload a pallet sheet and follow move mode.
5. Save the finished move to the shed so the record stays accurate.
6. Export to the core inventory template whenever you need a spreadsheet.

## Opening CIS
Questions: where is cis | where is the cis file kept | where do i find the program | how do i open cis | where is the software saved | where's the file | how do i launch it | which folder is cis in | path to cis
Lesson: 1 › Finding the program
CIS is at S:/BW Asset Delivery/Z_Geology/Software/Core Shed Planner/Core Inventory System.html. Copy that path into File Explorer, or browse to the Z_Geology folder → Software → Core Shed Planner. Open it straight from that folder and it opens in your web browser.

Always open it from the S: drive rather than a copy on your desktop, so everyone uses the same version.

## Which browser to use
Questions: which browser should i use | does it work in firefox | does it work in safari | chrome or edge | best browser for cis | it opened in the wrong browser
Lesson: 8 › Troubleshooting
Use Microsoft Edge or Google Chrome. They're the only browsers that let CIS connect to a shared folder. In other browsers your projects are only saved inside that one browser.

If CIS opens in a different browser, right-click the file, choose ‘Open with’ and pick Edge or Chrome.

## How CIS runs
Questions: does cis need the internet | is there a server | is there a login | how does the program run | is it a website | does it need a database | does it work offline
Lesson: 1 › Finding the program
CIS is a single HTML file that runs in your browser. There's no server, database or login. Your projects are saved as files in whichever folder you connect CIS to.

The only thing that needs the internet is the Excel reader: CIS loads it the first time you import or export an Excel file. CSV files always work without internet.

## Can CIS break?
Questions: can i break cis | will it crash | is it safe to click things | what if i mess it up | can i ruin the program
Lesson: 2 › Shed vs core move
Good news: CIS can't really be broken. It runs in your browser with no servers or databases, so unless someone changes the code itself, it won't crash. The worst you can do is make a mess of a core move, and core moves never touch the saved shed until you choose to save them.

## I deleted the CIS file
Questions: i deleted the cis file | the html file is gone | where can i download cis | lost the program | reinstall cis | github
Lesson: 1 › Finding the program
Never delete ‘Core Inventory System.html’. If it happens, you can download it again from GitHub (https://github.com/ArchuP343/CIS-Software) or ordinaryuncovered.com/myworks. Your projects are safe: they live in the Data [Program Files] folder, not in the program file.

# Shared folder and saving

## Connecting to the shared folder
Questions: how do i connect to the shared folder | connect a folder | which folder do i connect to | set up the data folder | select shared folder | folder button
Lesson: 1 › Connect to a shared folder
CIS needs to be connected to a shared folder so the whole team works from the same records.
1. Click the folder button in the top right of the CIS home page.
2. Choose ‘Select shared folder…’.
3. Go to the Core Shed Planner folder and choose the folder called Data [Program Files].
4. When the browser asks if CIS can view and edit files, allow it.

The folder button turns from yellow to green and shows the folder's name. From then on, every change you make is saved to that folder automatically.

## Reconnecting each time I open CIS
Questions: why does it ask for the folder every time | reconnect the folder | it keeps asking for permission | do i have to connect every time | reconnect button
Lesson: 1 › Connect to a shared folder
That's normal. For security, the browser asks for permission to the folder every time you open CIS. Just press ‘Reconnect’ and allow access. Until you do, changes are saved in this browser only.

## Folder button options
Questions: folder button options | folder dropdown | change folder | refresh now | disconnect the folder | what's in the folder menu
Lesson: 1 › Connect to a shared folder
Once you're connected, the folder button dropdown has:
- **Refresh now**: loads everyone's latest changes straight away.
- **Change folder…**: connect to a different folder.
- **Disconnect**: stop using the folder. CIS goes back to projects saved in this browser.
- **Open project file (.json)…**: load a project or backup file.

## Seeing other people's changes
Questions: how often does it update | refresh the projects | i can't see my colleague's changes | live updates | does it sync | how do i see the latest version
Lesson: 1 › Connect to a shared folder
When you're connected to the shared folder, other people's changes load automatically every 30 seconds. To get them straight away, open the folder button dropdown and press ‘Refresh now’.

## The save status
Questions: is my work saved | what does saved in this browser mean | unsaved changes | saving to shared folder | save status message | where is it saving
Lesson: 1 › Connect to a shared folder
Next to the folder button (and in the top bar of an open shed or core move) CIS tells you where your work is going:
- **Saved to shared folder**: all good, it's in the shared folder.
- **Saving to shared folder…**: a change is being written right now.
- **Unsaved changes**: you've edited a core move and haven't pressed Save yet.
- **Saved in this browser**: no folder is connected, so it's only on this computer.
- **Shared folder not connected**: press Reconnect.

## Projects only saved in this browser
Questions: copy into shared folder | projects only in this browser | i made a project before connecting | move my project to the shared folder | not now button
Lesson: 1 › Connect to a shared folder
If you made projects before connecting a folder, CIS shows a banner after you connect, listing the projects saved only in this browser. Press ‘Copy into shared folder’ so everyone can see them. Browser-only projects are lost if the browser data is cleared.

## Never delete the Data [Program Files] folder
Questions: can i delete the data folder | what happens if the data folder is deleted | is it safe to delete the data folder | clean up the data folder | can i get rid of the data folder
Lesson: 1 › Connect to a shared folder
Never delete the Data [Program Files] folder. CIS will keep working, but every project in it is gone for good, and there's no way to get it back. It's a good idea to copy the whole folder somewhere safe every now and then as a backup.

## Two people editing the same project
Questions: can two people use it at once | someone else changed the project | my changes haven't been saved | load their version | keep mine | can we both edit | working on the same project at the same time | changed by someone else
Lesson: 1 › Connect to a shared folder
Two people can have the same project open. If someone else saves a change while you're editing, CIS shows a banner saying your latest changes haven't been saved. Choose:
- **Load their version**: throw away your unsaved changes and load theirs.
- **Keep mine**: save your version over theirs (their latest changes are lost).

To avoid this, agree who is editing a project at any one time. Just viewing is fine.

## Using CIS offline
Questions: use cis offline | no internet | work without the network | offline use | out in the field without the s drive | local folder
Lesson: 1 › Connect to a shared folder
The shared folder needs a connection to the network drive. To work without it:
1. Before you go, copy the project's .json file from Data [Program Files] › projects into a folder on your laptop.
2. Connect CIS to that local folder and work as normal.
3. When you're back, copy your edited file over the original in the shared folder.

Make sure nobody else edits that project while you're away, or one set of changes will be lost. If you'll import Excel files offline, open CIS once with internet first, or use CSV files.

## How projects are saved
Questions: how is data stored | where are my projects saved | where is my data saved | where are projects stored | what files does cis make | json files | projects folder | backups folder | file names | where are the files
Lesson: 2 › Project backups
Each shed is saved as its own .json file, named ‘Dam-Shed-Unique ID’, in the ‘projects’ subfolder of the connected folder. The unique ID means two sheds can share a name without mixing up their data. Backups go in a ‘Backups’ subfolder. If you use your own folder, CIS makes these subfolders for you.

Don't rename, move or edit the .json files by hand. Rename, copy and delete sheds inside CIS instead.

# Projects and sheds

## Projects
Questions: what is a project | create a project | make a new project | start a new project | how do i set up a project | new dam | new project or shed
Lesson: 1 › Create a new project
A project represents one asset, such as a dam or weir, and can hold several core sheds.

To make one, type a project name and a shed name in the ‘New project or shed’ box on the home page and press ‘Create’. CIS takes you straight to setting up the shed. If the project name already exists, CIS adds the new shed to that project instead.

## Finding a project
Questions: search for a project | find a project | filter projects | can't see my project in the list | project search bar
Lesson: 2 › Shed vs core move
Use the ‘Find a project’ box on the home page. Type part of a project, shed or core move name, or choose a project from the list. Press ‘Clear search’ to see everything again.

## Setting up a new shed
Questions: set up a shed | new shed options | which setup option should i choose | add hole information | setup options | step 1 of 2
Lesson: 1 › Create a new project
When you set up a shed, CIS gives you four options:
- **Plan new core**: a brand new shed with no existing layout. CIS gives every box a position, starting from A1-1.
- **Import an existing shed**: boxes already have locations. CIS reads the row, bay and slot of every box.
- **Enter holes manually**: no spreadsheet? Type holes in.
- **Import hole information later**: skip this for now and add boxes in the Edit tab later.

## Adding sheds to a project
Questions: add a shed | add another shed | more than one shed | second shed | multiple sheds in a project | add shed button
Lesson: 2 › Adding sheds
Press ‘+ Add shed’ in the project's shed tabs on the home page. The project name is filled in for you, so just type the shed name and press ‘Create’. Each shed in a project needs its own name.

## Sheds and core moves
Questions: difference between a shed and a core move | what is a core move | why can't i edit the shed | why is the shed locked for editing | the shed is read only | uneditable shed | what is the ground truth | view only
Lesson: 2 › Shed vs core move
A shed is the saved record of exactly which boxes are in the shed and where. It's the ‘ground truth’, so it's view only and can't be edited directly.

A core move is an editable copy of the shed. Plan and try things out in a core move without touching the real record. The only way to change the shed is to save a core move to it.

## Opening a shed
Questions: open shed | view the shed | look at the shed without editing | what does open shed do | saved layout view only
Lesson: 2 › Shed vs core move
Press ‘Open shed’ on the home page to see the shed's saved layout. You get the Rack plan and Shed map tabs, and you can search, filter, export and save map images, but you can't change anything. To make changes, press ‘+ New core move’.

## Setting up tag and greyed out buttons
Questions: setting up tag | open shed is greyed out | not set up yet | setup not finished | why can't i open the shed | new core move is greyed out
Lesson: 1 › Create a new project
A shed tagged ‘setting up’ hasn't finished its first setup, so ‘Open shed’ and ‘+ New core move’ stay greyed out. Open the core move called ‘Initial setup’ (it's tagged ‘Setup not finished’) and finish setting up the shed.

## Renaming, copying or deleting a project
Questions: rename a project | delete a project | duplicate a project | copy a project | remove a project | rename a shed | delete a shed | duplicate shed | manage button | get rid of an old project
Lesson: 2 › Project backups
Open the shed's ‘Manage’ dropdown on the home page:
- **Rename**: change the project name (for all its sheds) and the shed name.
- **Duplicate shed**: make a copy, called ‘(copy)’, with all its core moves.
- **Backup**: save a backup file.
- **Delete shed**: delete the shed and all its core moves. CIS asks you to confirm.

Make a backup before deleting anything you might need again.

## Project backups
Questions: back up a project | keep a copy of my project | make a backup | how do i backup | where are backups saved | json backup | backup before saving | where do backups go
Lesson: 2 › Project backups
1. On the CIS home page, go to your shed.
2. Open the ‘Manage’ dropdown.
3. Choose ‘Backup’.

CIS saves a timestamped .json file in the Backups subfolder of the shared folder. If no folder is connected, the backup downloads instead. Make a backup before any big change, like saving a move to the shed or importing a large spreadsheet.

## Restoring a backup
Questions: restore a backup | load a backup | open a project file | recover a project | go back to an old version | undo saving to the shed | get an older version back
Lesson: 2 › Project backups
Open the folder button dropdown, choose ‘Open project file (.json)…’ and pick the backup file from the Backups folder. CIS only opens its own project files.

## Project files
Questions: project file | export a json | download the project | send a project to someone | save the project as a file | json export
Lesson: 2 › Project backups
A project file is a .json copy of a shed and its core moves. Inside an open shed or core move, press Export › Project file to download one. Load it again with the folder button › ‘Open project file (.json)…’.

# Core moves

## Creating a core move
Questions: create a core move | new core move | start a move | make a core move | plan a change to the shed | how do i edit the shed
Lesson: 2 › Shed vs core move
On the home page, press ‘+ New core move’ under the shed, type a name and press ‘Create move’. The move starts as a copy of the shed's current saved layout. You can also press ‘+ New core move’ from inside an open shed.

## Core move status
Questions: core move status | what does draft mean | saved to project | edited since saved | setup not finished | status under the move name
Lesson: 2 › Saving a move to the shed
The status under each core move tells you where it's at:
- **Draft**: not saved to the shed yet.
- **Saved to project**: it's the shed's current layout.
- **Edited since saved**: it was saved to the shed but has changed since.
- **Setup not finished**: the shed's first setup isn't done yet.

## Managing core moves
Questions: open a core move | rename a core move | delete a core move | where are my core moves | core moves list
Lesson: 2 › Shed vs core move
Press ‘Core moves’ under a shed on the home page to see its moves. Each one has ‘Open’, ‘Save move to shed’, ‘Rename’ and ‘Delete’. Deleting a move never changes the shed.

## Saving a core move
Questions: save a core move | save button | ctrl s | don't save button | click don't save | i have unsaved changes | save this core move | don't save | keep editing | save and close | undo my changes
Lesson: 2 › Saving a move to the shed
Changes in a core move aren't kept until you press ‘Save’ in the top bar (or Ctrl+S). Saving a core move only saves the move, not the shed.

If you leave with unsaved changes, CIS asks ‘Save this core move?’:
- **Save and close**: keep the changes.
- **Don't save**: go back to how it was at the last save. Handy for undoing a mess.
- **Keep editing**: stay where you are.

## Saving a move to the shed
Questions: save a move to the shed | update the shed layout | make the move permanent | save to project | save move to shed | when do i save to the shed | make my move the real layout
Lesson: 2 › Saving a move to the shed
When a core move is finished, save it to the shed so the record matches what's really there. Either:
- At the end of move mode, open ‘Save’ and choose ‘Save to project…’, or
- On the home page, open the shed's ‘Core moves’ and press ‘Save move to shed’.

CIS first shows a summary of what will change (new boxes, moved boxes, boxes put on or taken off pallets, boxes removed). Check it matches what you moved, then press ‘Yes, save to the project’. Make a backup first if it's a big move.

# Setting up a shed

## Initial setup move
Questions: initial setup | what is the initial setup move | where did the initial setup move come from | first core move
Lesson: 1 › Create a new project
Every new shed gets a core move called ‘Initial setup’, where you set it up. When you finish, it's saved to the shed automatically as the shed's first layout.

## Leaving setup halfway
Questions: i left setup | exit during setup | come back to setup | finish setting up later | how do i get back to setup
Lesson: 1 › Create a new project
No problem. The shed shows ‘setting up’ on the home page and the move shows ‘Setup not finished’. Press ‘Open’ on the Initial setup move to carry on where you left off.

## Plan new core
Questions: plan new core | brand new shed | let cis place the boxes | no existing layout | start from a1-1
Lesson: 1 › Create a new project
Use ‘Plan new core’ for a brand new shed, or when there's no existing layout. CIS ignores any rack positions and places boxes itself using the sorting algorithm, starting at A1-1. After importing, you'll set up the bays (step 2 of 2).

## Import an existing shed
Questions: import an existing shed | import a shed layout | boxes already have locations | row bay slot columns | location column | import my current shed
Lesson: 1 › Create a new project
Use ‘Import an existing shed’ when boxes already have locations. CIS reads each box's row, bay and slot and keeps them exactly where the spreadsheet says, without re-sorting. It reads bay sizes too.

Your sheet needs either one Location column (like A1-3 or A-1-3) or separate Row, Bay and Slot columns. Slot 1 is the top of the bay.

## Entering holes manually
Questions: enter holes manually | i don't have a spreadsheet | how do i add holes without a spreadsheet | no spreadsheet | type in boxes | add holes by hand | add a range of boxes | box numbers 1-4 | single box
Lesson: 1 › Create a new project
Choose ‘Enter holes manually’, then either:
- **Range of boxes**: type the Feature ID, Hole ID and box numbers to add a whole hole at once.
- **Single box**: add one box with its depths.

In box numbers, a dash adds everything in between (1-4 = 1, 2, 3, 4) and commas add just those boxes (1,3,5). You can add up to 1000 boxes at a time.

## Spreadsheet columns and file types
Questions: what columns do i need | what file types can i import | can i upload a csv | which columns are required | spreadsheet format | what does my spreadsheet need | is hole id required | does it take csv
Lesson: 1 › Checking hole information
CIS reads .xlsx, .xls, .xlsm, .csv, .txt and .tsv files. Drag and drop the file onto the page, or press ‘Choose file…’.

The only column CIS needs is Hole ID. Feature ID, Box, Of, From (m) and To (m) are optional but recommended. Box length, width and height columns are read too, so CIS can check boxes fit their slots.

## Matching columns
Questions: headings weren't detected | my headings don't line up | match my columns | assign a field to a column | column matching page | my column names are different | wrong match
Lesson: 1 › Checking hole information
CIS matches your headings to its own fields automatically (‘✓ Matched’). If one's wrong or missing, pick the right column from the drop-down, or type its letter (C) or number (3).

If your file has several sheets, choose the right one at the top. If nothing matches, check ‘Headings are in row’ is set to the row your headings are actually on (0 means no heading row).

## Heading names CIS recognises
Questions: what headings does cis recognise | column name synonyms | why didn't my column match | what should i call my columns | heading names
Lesson: 1 › Checking hole information
CIS doesn't mind upper or lower case, spaces or punctuation in headings. Headings it knows include Feat, Structure, Area, Borehole, Bore, Drillhole, Tray, Tray no, Core box, Total boxes, Depth from, Start, Top, Depth to, End, Bottom, Base, Loc, Position, Rack location, Aisle, Rack, Shelf, Level and Tier, as well as the plain field names.

If your headings are very different, match them by hand on the matching page.

## Splitting feature and hole IDs
Questions: split feature and hole id | split combined ids | bfa1-dd100 | feature and hole in one column | separate feature from hole
Lesson: 1 › Checking hole information
If your hole IDs include the feature (like BMA1-DD100), tick ‘Split combined IDs’ on the matching page. CIS splits them into separate Feature ID and Hole ID columns.

## Import warnings
Questions: hole id isn't matched | box isn't matched | feature id isn't matched | rows will be skipped | box ranges were found | import messages | why are rows being skipped
Lesson: 1 › Checking hole information
Messages under the matching table tell you what needs attention:
- **Hole ID isn't matched**: pick the column with hole IDs. You can't import without it.
- **Box isn't matched**: boxes come in without numbers. Match the box column if there is one.
- **Feature ID isn't matched**: if hole IDs look like BMA1-DD100, tick ‘Split combined IDs’.
- **Rows will be skipped**: rows with no hole or feature, usually blank or note rows. Nothing to do.
- **Box ranges were found**: CIS splits ranges like 1-4 into separate boxes for you.

## Bringing in extra columns
Questions: import extra columns | bring in every other column | unmatched columns | keep my other columns | core size column | custom columns on import
Lesson: 1 › Checking hole information
Tick ‘Bring in unmatched columns as custom columns’ (or ‘Bring in every other column too’ for a shed layout) to keep columns CIS doesn't have a field for, like core size or box condition. They show after To (m) in bay tables and exports. Manage them later in Edit › Advanced › Custom columns.

## Checking the import preview
Questions: import preview | check before importing | what does next do on the import page | first rows | preview of boxes to add | check the import before it goes in
Lesson: 1 › Checking hole information
At the bottom of the matching page there's a preview of the first few rows. Check everything has landed in the right columns before you carry on.

## Import notes
Questions: import notes | shared location | two boxes in one slot | missing note | empty note | unknown depth | question mark in depth | rows have no readable location
Lesson: 1 › Checking hole information
When you import an existing shed, notes under the table flag things in your spreadsheet (they're not CIS errors):
- **Shared locations**: two boxes have the same slot, usually a typo. Both are kept; fix it in Edit › Issues.
- **Missing boxes**: ‘MISSING’ in the hole or depth fields. The slot is kept, with a red ‘missing’ label.
- **Empty slots**: ‘EMPTY’ in the hole ID field. The slot is left empty.
- **Unknown depths**: ‘Unknown’ depths show as ‘?’.
- **No readable location**: rows without a row, bay and slot are skipped.

## Arranging a new shed
Questions: arrange the shed before importing | arrange the shed page | naming convention | row orientation | change the layout before import | set every row to | can i change row orientation before importing
Lesson: 1 › Arranging a shed
After matching columns for an existing shed, the ‘Arrange the shed’ page lets you set each row's letter, which way it runs, how its bays sit, and the order of rows from left to right, so the map matches the real shed. Use ‘Set every row to’ to change all rows at once. A shed preview shows the result. You can fine-tune everything later on the shed map.

## Row and bay naming
Questions: naming convention | what does a1-3 mean | what does b2-4 mean | what does a1-1 mean | how are bays named | slot numbering | row letters | which slot is slot 1
Lesson: 0 › Key terms
CIS follows the 2026 geology team conventions. Each row has a letter, each bay a number along the row, and each slot a number after a dash. A1-3 is Row A, Bay 1, Slot 3, and B2-4 is Row B, Bay 2, Slot 4. Slot 1 is always the top of the bay, and Row A is the furthest left on the map.

## Row direction and how bays sit
Questions: upright or sideways | back to back bays | single file | rows two bays wide | front loading | side loading | turn bays sideways | row runs top to bottom
Lesson: 1 › Arranging a shed
- **Row direction**: rows run top to bottom (upright) or left to right (sideways).
- **Back to back**: tick it if rows are two bays wide.
- **Bays**: upright bays take boxes end on; sideways bays take boxes side on, for racks installed the other way round.

Change these on the Arrange page, the shed map, or Edit › Edit Bay Settings.

## Sequential or alternating numbering
Questions: sequential numbering | alternating numbering | bay numbering | how are back to back bays numbered | numbering across | numbering down
Lesson: 5 › The basics
In back-to-back rows, bays can be numbered:
- **Sequential**: down one side, then down the next.
- **Alternating**: across, then down.

Set it on the Arrange page, the shed map (Display or edit a row) or Edit › Edit Bay Settings.

## Locking an imported shed
Questions: lock the imported bays | should i lock bays when importing | lock on import | protect the existing layout
Lesson: 1 › Create a new project
When importing an existing shed, tick ‘Lock the imported bays so nothing in them moves’. Locked bays are never rearranged, which protects your existing layout from accidental shifts. It's recommended for existing sheds.

## Setting up the bays
Questions: set up the bays | slots per bay | how many bays do i need | step 2 of 2 | build rack plan | blocked slots during setup | number of rows
Lesson: 1 › Arranging a shed
For a new shed, step 2 asks how it's built:
- **Slots per bay**: all shelves, including blocked ones.
- **Blocked slots**: shelves never used (e.g. 1-2 for the top two).
- **Number of bays**: worked out from your boxes, or type your own.
- **Rows, numbering, back to back and direction**: how the bays are laid out.

Check the preview, then press ‘Build rack plan →’. You can change all of this later.

# Shed dashboards

## The tabs
Questions: what tabs are there | i can't see move mode | what does each tab do | why are there only two tabs | where are the other tabs
Lesson: 3 › Rack plan tab
A core move has four tabs along the top: Rack plan, Shed map, Move mode and Edit. An opened shed only has the first two, because it's view only. If you can't see Move mode or Edit, open a core move instead.

## Rack plan tab
Questions: what is the rack plan | main inventory page | where can i see box locations | rack details | rack dimensions
Lesson: 3 › Rack plan tab
The rack plan tab is the main inventory page. It has two parts: the shed overview (a picture of every bay) and the bay views (a table for every bay).

## Shed overview
Questions: shed overview | what do the colours mean | colour coding | why are bays different heights | what does 6/6 locked mean | legend colours
Lesson: 4 › Shed overview
The shed overview is laid out as if you were standing in the shed looking at the bays. Boxes are colour coded by feature (the legend shows which is which), bay heights adjust to their contents, and each slot shows the hole and box number, like DD100·3. Under each bay you'll see how full it is, e.g. ‘6/6 · locked’.

## Shed overview symbols
Questions: striped slot | red slot | red fill | blocked slot | spare slot | missing box | empty slot | what does the striped pattern mean
Lesson: 4 › Shed overview
- **Striped**: a blocked slot, never used.
- **Bright red**: a missing box. Its slot is kept for it.
- **Empty**: a free slot.
- **Spare**: kept free by your spacing settings.

## Getting around the shed overview
Questions: jump to a row | hover over a bay | see bay dimensions | click a bay | scroll across the bays | jump to row
Lesson: 4 › Shed overview
- Use ‘Jump to row…’ next to the Shed overview heading to go straight to a row.
- Scroll sideways to see more bays.
- Hover over a bay to see its size, or a slot to see the box in it.
- Click a bay to jump to its table in the bay views.

## Bay views
Questions: bay view | bay table | box details table | see all the columns | scroll the table | how do i see all the columns in a bay
Lesson: 4 › Bay views
Bay views are the second part of the rack plan: one table per bay, with a row per slot and all the box information you imported (Feature, Hole ID, Box, Of, From, To and any custom columns). Scroll across a table to see every column.

In a core move, a ‘Change’ column shows whether each box is new, came from another slot, or stayed put.

## Labels in the bay views
Questions: what does the missing label mean | blocked not for use | spare kept free | new label | updated position was | labels in the table
Lesson: 4 › Bay views
- ‘missing’ means the box should be there but isn't. Its slot is kept.
- ‘held’ means kept where it was when its bay was unlocked.
- ‘Blocked, not for use’ means a slot CIS never fills.
- ‘Spare, kept free’ means a gap left by your spacing settings.
- ‘New’ means added in this core move.
- ‘updated position, was …’ means the bay was renamed, usually after moving it on the shed map.

## Searching and filtering
Questions: search for a box | find a hole | where is a box | locate a box | find a feature | search results | how do i find where dd100 is | search syntax
Lesson: 3 › Searching and filtering
Type into the search bar at the top. You can search for:
- a hole or feature (DD100, BFA1)
- a row (Row A), a bay (A1) or a slot (A1-3)
- several things at once, separated by commas

Results are highlighted in the shed overview and bay views, and a results panel lists each hole with its boxes and location. Press ‘Show’ to jump to one, tick ‘Only show bays with results’ to hide the rest, or ‘Clear’ to start again. You can search the Edit tab the same way.

## Filters
Questions: filter the boxes | add a filter | filter conditions | saved filters | save a filter | filter by depth | filter by core size | boxes below 20 m | find boxes deeper than | boxes between two depths
Lesson: 3 › Searching and filtering
Press ‘Filters’, then ‘+ Add condition’. Pick a field, a test and a value:
- Text fields (feature, hole, row, bay, custom columns): contains, is exactly, starts with, does not contain.
- Number fields (box, of, from, to): equals, at least, at most, between.

Boxes must match every condition, and the search bar narrows it further. Type a name under ‘Save these conditions as’ and press ‘Save filter’ to reuse it. ‘Clear search and filters’ resets everything.

## Statistics
Questions: how many boxes are in the shed | how many free slots | waiting for a slot | shed numbers | statistics section | how many empty slots are there
Lesson: 3 › Statistics
The bar under the tabs shows the shed in numbers: rows, bays, boxes and free slots (empty slots, not counting blocked ones). If any boxes don't have a slot yet, including boxes on a temporary pallet, you'll also see ‘Waiting for a slot’. Hover over a number to see exactly what it counts.

## Lock list
Questions: lock list | bay locks | which bays are locked | lock a row | unlock a row | lock a bay | unlock a bay | partly locked | lock everything in a row
Lesson: 3 › Lock list
Press the lock button in the statistics bar to open the bay locks panel. It shows what is and isn't locked, row by row:
- Click a bay to lock or unlock it.
- Press ‘Lock row’ or ‘Unlock row’ to change every bay in a row at once.

You can also lock a row from the lock button on its row in the shed overview, or a bay from its bay view. Before importing new boxes, lock the bays that are already full.

## Locking single slots
Questions: lock a single slot | lock individual slots | lock icon | padlock on a slot | lock just one slot
Lesson: 4 › Bay views
1. Unlock the bay by pressing its ‘Locked’ button in the bay view.
2. Press the lock icon on the left of the slot's row.

A locked slot keeps its box exactly where it is while CIS is free to rearrange the rest of the bay.

## Comparing locked, blocked and spare slots
Questions: difference between locked and held slots | locked vs blocked | what's the difference between blocked and spare | locked or blocked
Lesson: 4 › Bay views
- A locked slot is never rearranged by CIS, and nothing new goes into its empty slots. Unlock it in the bay view or lock list.
- A held box sits in an unlocked slot but stays put until you update positions.
- A blocked slot is shown but never used. Change it in Edit Bay Settings.
- A spare slot is kept free by your spacing settings (Edit › Advanced).

## Held boxes
Questions: what does held mean | blue held label | update positions | ignore the banner | banner at the top of the rack plan | update unlocked bays to best positions | how do i get rid of held
Lesson: 8 › Holding boxes
When you unlock a bay or slot that has boxes in it, those boxes get a blue ‘held’ label. They stay where they are, so unlocking doesn't suddenly reshuffle the shed.

A banner at the top of the rack plan explains this:
- **Update unlocked bays to best positions**: lets the sorting algorithm regroup them into the best order.
- **Ignore**: hides the banner but keeps them held.

Press ‘Ignore’ if you don't want the order to change.

## Size panel and Will it fit?
Questions: will it fit | does this box fit | check if a box will fit | how do i check a box size | box sizes in the shed | bay sizes | size panel | find a slot big enough for a box | will a tray fit anywhere | boxes by size | bays by size
Lesson: 3 › Size panel
Press ‘Sizes’ in the statistics bar. It lists every box size and bay size in the shed, and how many bays each box size fits. Use ‘Will it fit?’ to type a box size in mm and see which bays it fits, split into bays with free slots, locked bays with free slots, and bays that fit but are full.

For upright bays, the box's width and height must be the same or smaller than the slot's, and its length can be up to 10 mm (1 cm) shorter than the bay, never longer. For sideways bays, that rule applies to the width instead.

## Changing the Will it fit? threshold
Questions: change the fit threshold | fit tolerance | change the 1 cm rule | change fit rules | box length tolerance | change the 10 mm rule
Lesson: 7 › Advanced editing
Go to Edit › Advanced › Spacing and change ‘Box length tolerance (mm)’. It's how much shorter than the bay a box can be and still sit on the rests. The default is 10 mm.

## Boxes that don't fit
Questions: boxes don't fit | box doesn't fit any bay | bays of the right size are full | wrong size for every bay | why is a box waiting | not enough slots
Lesson: 3 › Statistics
If boxes can't be placed, a message at the top of the rack plan says why, and they show as ‘Waiting for a slot’. To fix it, unlock a bay of the right size, add bays of the right size in Edit › Edit Bay Settings, check the box sizes are right, or put the boxes on a permanent pallet.

## Back to the top
Questions: back to top | top button | scroll to the top | long page
Lesson: 3 › Rack plan tab
On long pages a ‘Top’ button appears in the bottom corner. Click it to jump back to the top.

# Shed map

## Shed map basics
Questions: what is the shed map | top down view | map layout | draw the shed | can i edit the map in a shed | map is view only
Lesson: 5 › The basics
The shed map is a top-down view of the shed that you can build without any other software. Anything you change about rows and bays on the map flows straight into the rack plan.

In an opened shed the map is view only. Open a core move to change it. Click any bay or row header to see what's in it.

## Moving around the map
Questions: zoom the map | pan the map | fit to screen | i can't see the whole map | zoom in | move around the map
Lesson: 5 › The basics
Scroll to zoom in and out, and drag empty space to move around. Press Display › ‘Fit to screen’ to see the whole map.

## Rearranging rows on the map
Questions: move a row | reorder rows | merge rows | separate a bay | make a new row from a bay | drag rows on the map | move a bay | swap two bays | join two rows together
Lesson: 5 › The basics
- **Move a row**: drag its dark header.
- **Merge rows**: drag rows next to each other to combine them under one letter.
- **Move a bay**: drag it anywhere. Near another bay it snaps on.
- **Swap bays**: drop a bay on top of another.
- **Separate a bay**: drag it into empty space to make a new row.

Bay IDs can change when you move things (rows are lettered left to right). CIS tells you the new name and updates the rack plan.

## Stretching bays on the map
Questions: stretch bays | make bays bigger on the map | resize a row | reset stretched bays | standard bay size
Lesson: 5 › The basics
Drag a row's right or bottom edge to stretch its bays so the map matches the real rack size. To undo it, select the row and press ‘Reset stretched bays to the standard size’.

## Editing rows and bays on the map
Questions: edit a row | edit a bay on the map | pencil icon | turn a row sideways | rotate bays | row direction | change the numbering to alternating | double sided rows | change a row letter | lock every bay in the row
Lesson: 5 › The basics
Select a row header or a bay, then press the pencil icon.
- **Row**: change its letter, number of bays, numbering, which way it runs (‘Row runs’), whether bays are upright or sideways (‘Bays’), or lock every bay.
- **Bay**: change its slots, blocked slots and lock, see its boxes, or press ‘Show in rack plan →’.

## Adding a row on the map
Questions: add a row on the map | new row of bays | add bays to the map | row button
Lesson: 5 › Adding elements
Press the Row button in the map toolbar to add a new row of bays. New rows go to the right of the others.

## Adding elements to the map
Questions: add text to the map | add a label | add a door | draw a rectangle | add an arrow | north arrow | add symbols | draw a wall | roller door | window | column | toolbar tools
Lesson: 5 › Adding elements
Pick a tool in the toolbar, then click to place it or drag to size it:
- Text and Label (text in a box)
- Rectangle, Ellipse, Line and Arrow
- Dimension lines
- Symbols: door, roller door, window, wall, column and north arrow
- Pallet and Row

Press Esc to stop drawing.

## Styling things on the map
Questions: change the colour of an element | change colour | fill pattern | line thickness | text size | opacity | rounded corners | turn a door | flip a door | hinge side
Lesson: 5 › Adding elements
Select anything to style it in the side bar: fill colour and pattern, line thickness and style, size, corners, text size, colour, alignment, bold and opacity. Doors can be turned 90° (⟳ Turn) and their hinge swapped (⇋ Flip).

## Dimension lines
Questions: dimension lines | measure on the map | scale for dimensions | set the map scale | distances on the map
Lesson: 5 › Adding elements
Draw a dimension line with the Dimension tool. Set the scale in Display › ‘Scale for dimensions’ and CIS measures it for you, or type the length yourself (e.g. 12.5 m).

## Selecting and locking things on the map
Questions: select several | select multiple | shift click | select everything | lock in place | lock a shape | i can't move a shape | it's locked in place | draw over the bays
Lesson: 5 › The basics
- **Select several**: Shift+click, or Shift+drag a box around them. Drag any one to move them all. Ctrl+A selects everything.
- **Lock in place**: select it and press the lock button (or L). Locked items can't be moved, and you can draw over them. Press L again to unlock.

## Bring to front and send to back
Questions: bring to front | send to back | shape is covering the bays | rectangle covering the bays | can't see behind a shape | layers | shape is hidden behind | send behind the bays | order of shapes
Lesson: 5 › Adding elements
Select a shape and use ‘Bring to front’ or ‘Send to back’ to change which one sits on top. Shapes can also be sent behind the bays.

## Map shortcuts and undo
Questions: keyboard shortcuts on the map | undo on the map | redo | duplicate | delete a shape | nudge | map shortcuts | information button
Lesson: 5 › The basics
- Ctrl+Z undo, Ctrl+Shift+Z redo
- Ctrl+D duplicate, Delete to delete
- Arrow keys nudge
- L locks or unlocks
- Ctrl+A selects everything, Esc stops drawing

The toolbar has Undo, Redo, Duplicate and Delete buttons too, and the ‘i’ button in the bottom corner lists these tips.

## Tidying the map
Questions: tidy up the map | make the map look tidier | neaten the map | display settings | display button | make the map look cleaner | snap to grid | show grid | tidy layout | line rows up
Lesson: 5 › Tidying up
Press ‘Display’ in the toolbar:
- **Fit to screen**: show the whole map.
- **Tidy layout**: line rows up side by side.
- **Snap to grid** and **Show grid**: keep things neat.
- **Scale for dimensions**: so dimension lines measure themselves.
- **Bay numbering**: sequential or alternating for the whole shed.

## Map legend
Questions: map legend | what do the colours on the map mean | show the legend | legend button
Lesson: 5 › Tidying up
Press the Legend button on the map to see which colour goes with each feature, and how locked bays look.

## Pallets
Questions: what is a pallet | temporary pallet | permanent pallet | store boxes on a shelf | core pod | make a pallet permanent | put a box on a pallet | what does a temporary pallet do | rename a pallet
Lesson: 5 › Pallets
Pallets hold boxes that don't have a place in a bay. Add one with the Pallet tool on the shed map.
- **Temporary pallets** are a stopgap. Boxes on them show as ‘Waiting for a slot’.
- **Permanent pallets** are where boxes are meant to stay. Rename one to a shelf or core pod, for example. Boxes on them don't count as waiting.

To make a pallet permanent, select it and tick ‘Permanent storage location’. To put a box on a pallet yourself, type the pallet's name as its planned slot in the Edit tab.

## Saving the map as a PNG
Questions: save the map as a png | export the map | picture of the map | image of the shed layout | download the map | make a picture of the layout
Lesson: 5 › Saving PNGs
1. Press ‘Save PNG’.
2. Give the map a title and choose whether to include the legend.
3. Press save again.

CIS downloads the image and shows a preview. If it didn't download, right-click the preview and choose ‘Save Image As’, or press ‘Download PNG again’.

## Starting the map again
Questions: start the shed map again | reset the map | the map is a mess | redo the layout | reset the shed map
Lesson: 7 › Edit bay settings
Go to Edit › Edit Bay Settings › ‘Start the shed map again’. It puts every bay back into evenly split rows. Boxes, slots and locks stay with their bays, but bays may get new IDs and any positions you set on the map are lost.

# Move mode

## What move mode does
Questions: what is move mode | how does move mode work | plan a core move | move boxes | steps of move mode | flowchart
Lesson: 6 › Overview
Move mode takes the stress out of core moves. Upload a list of boxes to move and CIS sorts and groups them and gives each one a slot. Then follow the move box by box (or on a printed sheet), save it, and make any changes.

There are five steps, shown as a flowchart: Upload move data, Connection mode, Offload order, Start move and Finish. Click a step to go back to it.

## How CIS picks slots
Questions: how does cis choose slots | sorting algorithm | order of the boxes | why did it put a box there | how are boxes grouped | how does cis decide where boxes go | sort rules
Lesson: 6 › Overview
CIS groups boxes by feature (A to Z, or your own order from Edit › Advanced), then by hole (DD100 before DD101), then orders them by box number and depth. It fills the shed from A1-1 onwards.

It never rearranges locked bays or slots, leaves held boxes where they are, skips blocked and spare slots, and only puts boxes with sizes into slots they fit.

## Uploading a pallet sheet
Questions: upload boxes to move | what is a pallet sheet | upload move data | what list do i upload | does the list need to be in order | do i need to sort my box list first | set pallet order
Lesson: 6 › Uploading data
Click the + on ‘Upload Move Data’ (or drag the file in) to upload a spreadsheet of the boxes you're moving. This is the pallet sheet. Check the column matches, then press ‘Set pallet order’.

For slot planning the list can be in any order, because CIS sorts it. If you want to use Pallet order, list boxes in the order they were stacked, with a Pallet column if there's more than one pallet.

## Boxes already in the shed
Questions: same box move it | different box add as new | already in the shed | box on the pallet sheet is already stored | duplicate on the pallet sheet
Lesson: 6 › Uploading data
If boxes on the pallet sheet match boxes already in the shed (same feature, hole and box), CIS asks what each one is:
- **Same box: move it**: it's the one in the shed, so CIS moves it.
- **Different box: add as new**: it's a separate box, so CIS adds it.

Use the ‘All:’ buttons to set them all at once. Boxes added as new show up under Edit › Issues as duplicates.

## Moving boxes already in the shed
Questions: no pallet sheet | move existing boxes | rearrange boxes already in the shed | pick boxes from the shed | just shuffle boxes that are already in there
Lesson: 6 › Alternative approaches
Choose ‘No pallet sheet? Pick boxes from the shed’. Search by hole, box, feature or location (e.g. DD100, A2, Pallet A) and press ‘+ Add’ to add boxes to the move. If you've already changed boxes in this core move, ‘Use the boxes changed in this move’ builds the move from those.

## Online or offline
Questions: online or offline | connection type | connection mode | paper or computer | which mode should i use | laptop or paper
Lesson: 6 › Connection type
- **Online**: follow along on the laptop. CIS guides you box by box and records each one as you go.
- **Offline**: print a slot sheet, do the move on paper, then tell CIS what changed.

## Offload order
Questions: offload order | pallet order or slot order | what order should i use | which order is best | difference between pallet order and slot order
Lesson: 6 › Offload order
- **Pallet order** follows the order boxes come off the pallets (last box on is the first box off).
- **Slot order** goes from one slot to the next, whatever order the boxes are in on the pallets.

Pallet order is usually more logical and efficient.

## Guided move (online)
Questions: how do i do the move online | next off pallet | goes to | put in slot | guided move | move guidance screen | bay diagram | what does put in slot do
Lesson: 6 › Move guidance
The move screen shows the box expected next off the pallet, the slot it goes to (Row · Bay · Slot), and a diagram of where that slot is in the bay.
- Press ‘✓ Put in …’ (or Enter) if it went in. CIS shows the next box.
- Press ‘✗ It didn't go there’ if it couldn't go in that slot.
- Press ‘Not this box?’ if you're holding a different box.

‘Up next’ shows the next few boxes; tap one to switch to it. Every box you confirm is locked in and saved straight away.

## When a box doesn't go in its slot
Questions: it didn't go there | the box doesn't fit its slot | box went in a different slot | the slot it was meant for | leave the slot empty | use it for the next box | nowhere to put a box | the box wouldn't go in the slot it said | record it there
Lesson: 6 › Move guidance
Press ‘It didn't go there’ and choose what happened:
- **Different slot**: pick a suggested slot, or type one like B2-4, and press ‘Record it there’.
- **The slot it was meant for**: say whether you left it empty or used it for the next box.
- **Temporary pallet**: nowhere to put it? Send it to the temporary pallet.

If the box doesn't fit the slot you pick, CIS tells you why. Choose another, or ‘Record it there anyway’ if it really did fit. A 🔒 slot is an empty slot in a locked bay.

## Using the temporary pallet in move mode
Questions: temporary pallet in move mode | put it there | back in the queue | keep on the pallet | boxes left on the pallet | what happens to boxes on the temporary pallet
Lesson: 6 › Move guidance
Boxes you send to the temporary pallet are listed under it. For each one, type a slot and press ‘Put it there’, send it ‘Back in the queue’, or ‘Keep on the pallet’. Any still there at the end of the move are saved on the pallet. Tick ‘Permanent storage location’ if that's where they'll stay.

## Holding the wrong box
Questions: not this box | i'm holding a different box | wrong box | box came off out of order | i grabbed the wrong tray | which box do you have
Lesson: 6 › Move guidance
Press ‘Not this box?’ and pick the box you're holding. CIS lists the closest boxes in the order first, or search for any box. After you place it, CIS takes you back to the box it was expecting.

## Undoing a placement
Questions: undo a placement | put a box in by mistake | placed the wrong box | made a mistake placing a box | placed so far | i put a box in the wrong slot during the move | take back a box | undo a box i placed
Lesson: 6 › Move guidance
Open ‘Placed so far’ to see every box you've placed, then press ‘Undo’ next to a box to put it back in the queue.

## Finishing a move
Questions: finish a move | make more changes | start over | end the move | what do i do at the end of the move | finish page | save to move | what does start over do
Lesson: 6 › Move guidance
On the Finish step:
- **Save › Save to move**: keep it in this core move (recommended, so you can check it first).
- **Save › Save to project…**: make it the shed's saved layout, after a summary of the changes.
- **Make more changes**: go back if something's wrong or you want to swap pallets around.
- **Check box positions**: drag boxes into where they really are.
- **Start over**: clear move mode and start from scratch.

Once saved, press ‘Start a new move’ or ‘Back to Projects’.

## Slot sheet (offline)
Questions: slot sheet | print the slot sheet | save the sheet as a pdf | paper checklist | do the move on paper | print the checklist | export the move sheet to excel
Lesson: 6 › Slot sheet
In offline mode CIS shows a preview of the slot sheet: a checklist of the boxes in your chosen order, with where each one goes and a Done tick box. Press ‘Print’ to print it or save it as a PDF, or ‘Export to Excel’.

At the end there's a ‘Changes from the plan’ table. Write down every box that went somewhere other than its ‘Goes to’ slot, and whether its planned slot was left empty or filled by the next box.

## After an offline move
Questions: back from the move | returning from the move | some boxes went somewhere else | record changes after the move | everything went to plan | i'm back from the move | update the plan
Lesson: 6 › Returning from the move
Go back to the Start move step and press ‘I'm back from the move →’. CIS asks if everything went to plan:
- **Yes**: go to Finish and save the move.
- **No, some boxes went somewhere else**: enter each box from your ‘Changes from the plan’ table, where it went, and what happened to its planned slot. Type ‘pallet’ for a box still on the pallet. Then press ‘Update the plan’.

## Checking box positions
Questions: check box positions | drag boxes to where they really are | looks right | fix the positions after a move | validate the order
Lesson: 6 › Returning from the move
After updating the plan (or from the Finish page), CIS shows the bays so you can check them. Drag any box that's in the wrong place to where it really is. Dropping onto a full slot pushes that box and the ones after it down one. Drag a box to the temporary pallet area if it's still on the pallet. Press ‘Looks right →’ when you're done.

# Edit tab

## Edit tab overview
Questions: what is the edit tab | what is in the edit tab | where is the edit tab | where do i edit boxes | fine tune the shed | edit bay information | what is in the edit tab
Lesson: 3 › Edit tab
The Edit tab (in core moves only) is where you fine-tune things. It has four parts:
- **Issues**: duplicate boxes and missing information.
- **Holes & boxes**: add, import, edit and reorder boxes.
- **Edit Bay Settings**: rows, bays, slots and sizes.
- **Advanced**: feature order, spacing and custom columns.

## Issues
Questions: issues tab | duplicate boxes | doubled up boxes | missing information | bookkeeping errors | fix errors in the inventory | how do i fix duplicate boxes | ignore an issue
Lesson: 7 › Issues
Issues lists bookkeeping problems CIS finds automatically:
- **Duplicate boxes**: the same feature, hole and box number more than once. ‘Show’ jumps to each copy, ‘Delete’ removes a copy, ‘Ignore’ hides it, ‘Ignore all’ hides every duplicate.
- **Missing information**: a box with no feature, hole or box number. ‘Fix’ takes you straight to the empty field.

Duplicates are usually a typo in a box number.

## Editing holes and boxes
Questions: edit a box | change box details | add new boxes | add a hole | edit hole information | box table | add a new box | change a hole id
Lesson: 7 › Holes and boxes
In Edit › Holes & boxes you can:
- **Import a spreadsheet**: add boxes the same way as in setup.
- **Add holes manually**: a whole hole, or one box you missed.
- **Edit the box table**: click into any cell to change it.

Use the search bar at the top to find a hole quickly in a long list.

## Importing more boxes
Questions: import more boxes | add to existing boxes | replace all boxes | skip boxes already in the plan | import a spreadsheet in the edit tab | upload more holes
Lesson: 7 › Holes and boxes
When you import a spreadsheet in Edit › Holes & boxes, choose whether to add to the existing boxes or replace them all. Tick ‘Skip boxes already in the plan (same feature, hole and box)’ to avoid duplicates.

‘Import a shed layout’ is different: it replaces every bay and box in the move, so CIS asks you to confirm first.

## Changing a box's planned slot
Questions: change a planned slot | move a box up or down the order | move a box to a different slot | reorder boxes | type a slot | custom order | box is in the wrong slot | reset to automatic order | move a box further up the order
Lesson: 7 › Holes and boxes
In Edit › Holes & boxes, boxes are listed in fill order. Either:
- drag the handle on the left to move a box to a different place in the order, or
- type a slot like A1-5 in ‘Planned slot’ to put it exactly there (boxes below move down), or a pallet name to put it on that pallet.

Once you drag boxes, the list shows ‘Custom order’. Press ‘Reset to automatic order’ to go back.

## Removing boxes
Questions: remove a box | delete a box | remove all boxes | delete every box | take a box out of the shed
Lesson: 7 › Holes and boxes
In the box table in Edit › Holes & boxes, press the ✕ at the end of a box's row to remove it, or ‘Remove all’ to remove every box (CIS asks you to confirm). Remember this only changes the core move until you save it to the shed.

## Bay settings
Questions: bay settings | change the number of slots | change bay dimensions | blocked slots | delete a bay | bay orientation | update every row at once | remove a bay | add a bay | bay size
Lesson: 7 › Edit bay settings
Edit Bay Settings is where you change slots, sizes, blocked slots and orientation. It's the only place you can delete bays.
- Type into ‘Every bay’ at the top to change all bays at once.
- Each row line sets that row's letter, direction, upright or sideways bays, and size (L × W × H mm).
- Each bay line sets its own length, width, height and lock.
- ‘+ Bay’ adds a bay to the end of a row; the ✕ removes one.

## Adding rows and bays
Questions: add a row | add more bays | fit number of bays to the boxes | not enough bays | add a row of bays in edit
Lesson: 7 › Edit bay settings
In Edit › Edit Bay Settings, press ‘+ Add a row’ for a new row (it goes to the right of the others on the map) or ‘+ Bay’ to add a bay to a row. ‘Fit number of bays to the boxes’ adds or removes bays so there are just enough for all the boxes.

## Advanced settings
Questions: advanced settings | advanced tab | what's in advanced | sort rules
Lesson: 7 › Advanced editing
Edit › Advanced has extra settings you may never need:
- **Feature order**: your own order for features.
- **Spacing**: leave spare slots, and change the Will it fit? tolerance.
- **Custom columns**: add or remove columns.

It also shows the sort rules: feature, then hole ID, then box number, then From and To depth.

## Feature order
Questions: change the feature order | custom feature order | sort features | reset to a to z | features in my own order | why is bma10 after bma2
Lesson: 7 › Advanced editing
Features sort A to Z by default, with numbers in numeric order (BMA1, BMA2, BMA10). To use your own order, go to Edit › Advanced, tick ‘Use my own feature order’ and drag the features into place. Press ‘Reset to A to Z’ to go back.

## Spacing
Questions: spacing | leave slots empty | spare slots after each hole | spare slots after each feature | start each feature in a new bay | gaps between holes
Lesson: 7 › Advanced editing
In Edit › Advanced › Spacing you can leave room for boxes that come later:
- **Spare slots after each hole** or **after each feature**.
- **Start each feature in a new bay**.
- **Box length tolerance (mm)**: the Will it fit? rule.

## Custom columns
Questions: custom columns | add a column | remove a column | can i add my own column | extra columns | rename a column
Lesson: 7 › Advanced editing
In Edit › Advanced › Custom columns, type a name and press ‘Add column’, or ‘Delete’ to remove one. Custom columns show after To (m) in every bay table, the box list and exports. Good for things like core size, logged by or photo taken.

# Exporting

## Exporting a shed or core move
Questions: export to excel | export the inventory | download the inventory | get a spreadsheet of the shed | core inventory template | export options | export to csv | full planner layout | i want the shed in excel | edit it in excel and bring it back in | re-import an export | can i edit it and bring it back in
Lesson: 2 › Exporting
Press ‘Export’ in the top corner of an open shed or core move:
- **Excel, inventory template**: the standard core inventory template.
- **CSV, inventory template**: the same as a CSV.
- **Excel, full planner layout**: every column, with a sheet for every bay.
- **Project file**: a .json copy you can load back into CIS.

Exports include any saved changes. Prefer Excel? Export, edit it, then import it back into a core move.

## Exporting custom columns
Questions: export with custom columns | can i export custom columns | columns won't be captured in the template | continue with the template anyway
Lesson: 2 › Exporting
The standard template has fixed columns, so if your shed has custom columns CIS warns you they won't be captured. Tick ‘Continue with the template anyway’ to leave them out, or leave it unticked to export the full planner layout, which keeps every column.

## Export problems
Questions: excel export didn't work | it exported a csv instead | export needs internet | can't fill the template | export in another browser
Lesson: 2 › Exporting
- If CIS exported a CSV instead of Excel, the Excel reader isn't loaded yet. Connect to the internet once and try again.
- Filling the template needs Microsoft Edge or Google Chrome. If it can't, CIS exports in the original layout instead.

# Troubleshooting

## CIS won't open
Questions: cis won't open | blank page | nothing loads | the program isn't working | it won't load | the page is blank | it opens weird in my browser
Lesson: 1 › Finding the program
Open CIS from the Core Shed Planner folder on the S: drive, not a copy, in Microsoft Edge or Google Chrome. If it still won't open, set Edge as your default browser and try again.

## Can't connect to the shared folder
Questions: can't connect to the folder | folder won't connect | permission denied | access to the folder | the folder won't connect | couldn't open that folder | couldn't reconnect
Lesson: 8 › Troubleshooting
- Use Microsoft Edge or Google Chrome.
- When the browser asks for access to the folder, allow it.
- Check the S: drive is available and you have permission to edit the folder.
- If ‘Reconnect’ doesn't work, use ‘Change folder…’ and choose Data [Program Files] again.

## Couldn't save to the shared folder
Questions: couldn't save to the shared folder | network drive not available | save failed | lost connection to the s drive
Lesson: 8 › Troubleshooting
The network drive is probably unavailable. Check your connection to the S: drive. Until it's back, CIS saves in the browser, so don't clear your browser data.

## My project is missing
Questions: my project is missing | can't find my project | project disappeared | where did my project go | project not in the list | my project is gone
Lesson: 8 › Troubleshooting
- Check you're connected to the Data [Program Files] folder on the S: drive, not a copy somewhere else.
- Press ‘Refresh now’ in the folder button dropdown.
- If you made it before connecting a folder, look for the ‘Copy into shared folder’ banner.
- Otherwise, load a backup with ‘Open project file’.

## Couldn't read that file
Questions: couldn't read that file | my spreadsheet won't import | file won't upload | excel reader isn't available offline | import failed
Lesson: 1 › Checking hole information
Save the spreadsheet as .xlsx or .csv and try again. If CIS says the Excel reader isn't available, connect to the internet once, or save the sheet as CSV.

## I can't edit anything
Questions: i can't edit anything | buttons don't work | can't change the shed | everything is read only | can't drag boxes
Lesson: 2 › Shed vs core move
You're probably looking at a saved shed, which is view only. Press ‘+ New core move’ and make your changes there.

## It says it's locked
Questions: it's locked | this box is locked to its slot | can't move a box | can't move a bay | locked in place unlock it to move it
Lesson: 3 › Lock list
Something's locked. Unlock the bay or slot in the bay view or lock list, or on the shed map select the item and press L. Then try again.

## I made a mess of a core move
Questions: i made a mess | i messed up the core move | undo everything | go back to the last save | start the move again
Lesson: 2 › Shed vs core move
No harm done: the shed doesn't change until you save a move to it. Leave the move and choose ‘Don't save’ to go back to your last save, or delete the move and make a new one.

## I saved the wrong move to the shed
Questions: saved the wrong move | undo save to shed | i saved to the shed by mistake | revert the shed
Lesson: 2 › Project backups
Load a backup from before the save with the folder button › ‘Open project file (.json)…’, or save the correct core move to the shed.

# Glossary

## Terms
Questions: what is a slot | what is a feature id | what does hole id mean | what is a temporary pallet | what is a permanent pallet | what is a pallet sheet | what is a core move | what does locked mean | glossary | key terms | what does this word mean
Lesson: 0 › Key terms
**Project**: an asset such as a dam or weir. A project can hold one or more sheds.
**Shed**: the saved record of exactly which boxes are in a core shed and where. It can't be edited directly.
**Core move**: a working copy of a shed for planning and recording changes without touching the saved record.
**Initial setup**: the first core move of every new shed, used to set it up.
**Row, bay and slot**: where a box lives. A1-3 means row A, bay 1, slot 3. Slot 1 is the top.
**Feature ID**: the structure or area a hole belongs to (e.g. BFA1). CIS groups boxes by feature.
**Hole ID**: the drill hole a box came from (e.g. DD100). The only column CIS needs.
**Box**: one core tray, numbered down the hole, with its From and To depths in metres.
**Of**: the total number of boxes for the hole.
**Locked**: a bay or slot CIS will never rearrange.
**Blocked slot**: a slot shown on the plan but never filled.
**Spare slot**: a slot kept free by your spacing settings.
**Missing box**: a box that should be in a slot but isn't. Its slot is kept for it.
**Temporary pallet**: a place for boxes waiting for a slot.
**Permanent pallet**: a pallet, shelf or core pod where boxes are meant to stay.
**Pallet sheet**: the spreadsheet of boxes you upload to start a core move.
**Slot sheet**: the printed checklist used for an offline move.
**Custom column**: an extra column of box information you add, like core size.
**Data [Program Files]**: the shared folder on the S: drive where all projects are saved.
