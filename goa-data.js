// Built from the goa folder by build-goa.py — edit those files, not this one.
window.GOA_DATA = {
 "manual": "# Getting started\n\n## What CIS is\nQuestions: what is cis | what does cis do | what is this program for | what is the core inventory system | why would i use cis | what's the point of cis\nLesson: 0 › What CIS does\nThe Core Inventory System (CIS) keeps a live record of every core box in a shed: which row, bay and slot it's in, and what's in it (feature, hole, box number and depths). Because it's saved in a shared folder, everyone on the team sees the same up-to-date shed.\n\nIt also plans and guides core moves. Give CIS a list of boxes and it works out where each one should go, guides you through the move box by box (or gives you a sheet to print), and updates the shed record when you're done.\n\n## Opening CIS\nQuestions: where is cis | where is the cis file kept | where do i find the program | how do i open cis | where is the software saved | where's the file | how do i launch it | which folder is cis in\nLesson: 1 › Finding the program\nCIS is in the Z_Geology folder under Software → Core management tool → Core Inventory System.html. Open it straight from that folder and it opens in your default web browser.\n\nIf it doesn't open properly, set Microsoft Edge as your default browser and try again.\n\n## Which browser to use\nQuestions: which browser should i use | does it work in firefox | does it work in safari | chrome or edge | best browser for cis\nLesson: 8 › Troubleshooting\nUse Microsoft Edge or Google Chrome. Other browsers can't connect to a shared folder, so your projects would only be saved in that one browser.\n\n## Connecting to the shared folder\nQuestions: how do i connect to the shared folder | connect a folder | which folder do i connect to | where is my data saved | set up the data folder | where are projects stored\nLesson: 1 › Connect to a shared folder\nCIS must be connected to a shared folder before you use it, so the whole team works from the same records.\n\n1. Open CIS and choose to connect to a shared folder.\n2. Go to the same place you found the program.\n3. Choose the folder called [Data] Program Files.\n\nAny changes you make to a project or core move are saved in this folder automatically. For security, the browser asks for permission to the folder each time you open CIS. Allow it.\n\n## Never delete the [Data] folder\nQuestions: can i delete the data folder | what happens if the data folder is deleted | is it safe to delete the data folder | clean up the data folder\nLesson: 1 › Connect to a shared folder\nNever delete the [Data] Program Files folder. Deleting it won't break the software, but it wipes every record in it. If you're worried, copy the folder somewhere else as a backup.\n\n## Two people editing the same project\nQuestions: can two people use it at once | someone else changed the project | my changes haven't been saved | load their version | can we both edit | working on the same project at the same time\nLesson: 1 › Connect to a shared folder\nTwo people can have the same project open. If someone else saves a change while you're editing, CIS warns you that your latest changes haven't been saved to the shared folder. You can load their version or keep yours.\n\nTo avoid this, agree who is editing a project at any one time.\n\n# Projects and sheds\n\n## Projects\nQuestions: what is a project | create a project | make a new project | start a new project | how do i set up a project | new dam\nLesson: 1 › Create a new project\nA project represents one asset, such as a dam or weir. A project can hold several core sheds.\n\nWhen you create a new project, you give it a project name and a shed name, then CIS takes you straight to setting up the shed.\n\n## Setting up a new shed\nQuestions: set up a shed | new shed options | plan new core | import an existing shed | enter holes manually | import hole information later | which setup option should i choose | i don't have a spreadsheet\nLesson: 1 › Create a new project\nWhen you set up a shed, CIS gives you four options:\n- **Plan new core**: for a brand new shed with no existing layout. CIS gives every box an order and a position, starting from A1-1.\n- **Import an existing shed**: for a shed where boxes already have locations. CIS reads the row-bay-slot data and locks every slot (including empty ones) so nothing is rearranged by accident.\n- **Enter holes manually**: add holes one at a time if you don't have a spreadsheet. Type a range of boxes (e.g. 1-4) to create several boxes from the same hole.\n- **Import hole information later**: skip importing boxes for now.\n\n## Adding sheds to a project\nQuestions: add a shed | add another shed | more than one shed | second shed | multiple sheds in a project\nLesson: 2 › Adding sheds\nIf a project has more than one shed, press '+ Add shed' in the project tab to add another.\n\n## Sheds and core moves\nQuestions: difference between a shed and a core move | what is a core move | why can't i edit the shed | why is the shed locked for editing | the shed is read only | uneditable shed | what is the ground truth\nLesson: 2 › Shed vs core move\nA shed is the saved record of exactly which boxes are in the shed and where. It's the ‘ground truth’, so it can't be edited directly.\n\nA core move builds on the current shed without changing its saved layout. Use core moves to plan and try out moves without messing up accurate records. The only way to replace a shed's layout with a core move's is to save the move to the shed.\n\n## Saving a move to the shed\nQuestions: save a move to the shed | update the shed layout | make the move permanent | save to project | save the core move | when do i save to the shed\nLesson: 2 › Saving a move to the shed\nWhen a core move is finished, save it to the shed so the record matches what's really there.\n\nAt the end of move mode, open ‘Save’ and choose:\n- **Save to move**: keeps it as a core move for now. This is recommended, to avoid overwriting the shed by accident.\n- **Save to project…**: makes it the shed's saved layout. CIS first shows a summary of what will change (new boxes, moved boxes, boxes put on pallets or removed), so you can check it matches what you moved.\n\nIf you saved to the core move, save it to the shed later from the CIS home page with ‘Save move to shed’.\n\n## Project backups\nQuestions: back up a project | keep a copy of my project | make a backup | how do i backup | where are backups saved | json backup | backup before saving\nLesson: 2 › Project backups\n1. On the CIS home page, go to your project.\n2. Open the ‘Manage’ dropdown.\n3. Choose ‘Backup’.\n\nCIS saves a backup .json file in the backups folder of the connected drive. Make a backup before any big change, like saving a move to the shed or importing a large spreadsheet.\n\n## Restoring a backup\nQuestions: restore a backup | load a backup | open a project file | recover a project | go back to an old version | undo saving to the shed\nLesson: 2 › Project backups\nLoad a backup with the ‘Open project file’ button in the folder connection drop-down list, then choose the backup .json file.\n\n## Renaming, copying or deleting a project\nQuestions: rename a project | delete a project | duplicate a project | copy a project | remove a project\nLesson: 2 › Project backups\nGo to the project on the CIS home page and open the ‘Manage’ dropdown. You can rename, duplicate or delete the project from there.\n\n## Exporting a shed or core move\nQuestions: export to excel | export the inventory | download the inventory | get a spreadsheet of the shed | core inventory template | export with custom columns\nLesson: 2 › Exporting\nPress ‘Export’ in the top corner of an open shed or core move. CIS exports its inventory into the standard core inventory template. You can also export to a non-standard template that includes custom columns.\n\nExports include any saved changes. If you prefer working in Excel, you can export a shed, edit it in Excel, then import the edited spreadsheet again.\n\n# Importing boxes\n\n## Spreadsheet columns and file types\nQuestions: what columns do i need | what file types can i import | can i upload a csv | which columns are required | spreadsheet format | what does my spreadsheet need\nLesson: 1 › Checking hole information\nCIS reads .xlsx, .xls, .xlsm, .csv, .txt and .tsv files.\n\nThe only column CIS needs is Hole ID. Feature ID, Box, Of, From (m) and To (m) are optional but recommended. CIS tells you before importing if any of them aren't matched.\n\n## Matching columns\nQuestions: headings weren't detected | my headings don't line up | match my columns | assign a field to a column | column matching page | my column names are different | split feature and hole id\nLesson: 1 › Checking hole information\nWhen you import a spreadsheet, CIS matches headings that are the same as, or similar to, its own fields. If a column isn't matched automatically, assign it a field yourself.\n\nIf boxes are labelled with the feature ID and hole ID together (e.g. BFA1-DD100), CIS can split them into two columns. Just tick the box.\n\n## Checking the import preview\nQuestions: import preview | check before importing | what does next do on the import page\nLesson: 1 › Checking hole information\nBefore the final import, check the preview to make sure you're importing exactly what you want, then press ‘Next’.\n\n## Arranging a new shed\nQuestions: arrange the shed before importing | naming convention | row orientation | change the layout before import\nLesson: 1 › Arranging a shed\nBefore the final import, you can make early changes to the shed layout, such as the naming convention and row orientation. More detailed editing is available once the shed is created, on the shed map and in the Edit tab.\n\n# Shed dashboards\n\n## Rack plan tab\nQuestions: what is the rack plan | main inventory page | where can i see box locations | rack details | rack dimensions\nLesson: 3 › Rack plan tab\nThe rack plan tab is the main inventory page. It shows box locations and details, plus rack details and dimensions. It has two parts: the shed overview and the bay views.\n\n## Shed overview\nQuestions: shed overview | what do the colours mean | colour coding | missing boxes | empty slots | why are bays different heights\nLesson: 4 › Shed overview\nThe shed overview is the first part of the rack plan tab. It's laid out as if you were standing in the shed looking at the bays. It colour codes boxes by feature, adjusts bay heights to their contents, and clearly shows empty slots and missing boxes.\n\nScroll across to see more bays, or jump to one with the drop-down. Click a bay to jump to its bay view table.\n\n## Bay views\nQuestions: bay view | bay table | box details table | see all the columns | scroll the table\nLesson: 4 › Bay views\nBay views are the second part of the rack plan tab: one table per bay, with all the box information you imported. Scroll across a table to see all its columns.\n\n## Searching and filtering\nQuestions: search for a box | find a hole | where is a box | locate a box | filter the boxes | find a feature | search results\nLesson: 3 › Searching and filtering\nUse the search and filters in the top navigation bar. You can search for rows, bays, slots, features or holes. Results are highlighted in the shed overview and bay views, and a summary appears at the top of the screen.\n\nUse filters alongside a search to narrow it down further. You can search the Edit tab the same way.\n\n## Statistics\nQuestions: how many boxes are in the shed | how many free slots | waiting for a slot | shed numbers | statistics section\nLesson: 3 › Statistics\nThe statistics section below the navigation bar shows the shed in numbers: how many boxes are in it and how many slots are free. Boxes on a temporary pallet show as ‘Waiting for a slot’.\n\n## Lock list\nQuestions: lock list | which bays are locked | lock a row | unlock a row | lock a bay | unlock a bay\nLesson: 3 › Lock list\nThe lock list shows what is and isn't locked, without scrolling through the bay views.\n- Click a bay to lock or unlock it.\n- Press ‘Lock row’ or ‘Unlock row’ to change every bay in a row at once.\n\nCIS never moves or removes boxes in locked bays and slots.\n\n## Locking single slots\nQuestions: lock a single slot | lock individual slots | lock icon | padlock on a slot\nLesson: 4 › Bay views\n1. Unlock the bay by pressing its ‘Locked’ button in the bay view.\n2. Press the lock icon on the left of the slot's row in the bay view table.\n\nYou can also lock or unlock whole bays from the bay views.\n\n## Held boxes\nQuestions: what does held mean | blue held label | partly locked | update positions | ignore the banner | banner at the top of the rack plan\nLesson: 8 › Holding boxes\nIf you unlock a locked slot with a box in it, the box gets a blue ‘held’ label and the bay shows as ‘partly locked’. Holding stops the sorting algorithm from moving boxes that already have a place.\n\nA banner at the top of the rack plan explains this. ‘Ignore’ hides the banner but keeps the boxes held. ‘Update positions’ lets the sorting algorithm regroup boxes into the best order. Press ‘Ignore’ if you don't want the order to change.\n\n## Size panel and Will it fit?\nQuestions: will it fit | does this box fit | box sizes in the shed | bay sizes | size panel | find a slot big enough for a box\nLesson: 3 › Size panel\nThe size panel sits next to the lock list and shows the box and bay sizes in the shed. Its ‘Will it fit?’ tool checks whether, and where, there's a slot that fits a box: enter the box's dimensions to see.\n\nFor side-loading bays, a box fits if its width and height are equal to or less than the slot's, and its length matches the slot length or is no more than 1 cm shorter. For front-loading bays, the 1 cm rule applies to the width instead, and the height and length must be equal to or less than the slot's.\n\n## Changing the Will it fit? threshold\nQuestions: change the fit threshold | fit tolerance | change the 1 cm rule | change fit rules\nLesson: 7 › Advanced editing\nChange the Will it fit? threshold for box length and width in the Edit tab, under Advanced › Spacing.\n\n# Shed map\n\n## Shed map basics\nQuestions: what is the shed map | top down view | map layout | draw the shed | keyboard shortcuts on the map\nLesson: 5 › The basics\nThe shed map is a top-down view of the shed that you can build without any other software. Changes you make to rows and bays on the map are applied to the inventory and rack plan automatically.\n\nThe information button in the bottom corner of the map has keyboard shortcuts and more tips.\n\n## Rearranging rows on the map\nQuestions: move a row | reorder rows | merge rows | separate a bay | make a new row from a bay | drag rows on the map\nLesson: 5 › The basics\n- **Move rows**: drag and drop rows to change their order.\n- **Merge rows**: drag rows next to one another to combine them under the same row letter.\n- **Separate bays**: drag a bay out of a row into empty space to make a new row.\n\n## Editing rows and bays on the map\nQuestions: edit a row | edit a bay on the map | pencil icon | turn a row sideways | rotate bays | row direction | alternating numbering | sequential numbering | double sided rows\nLesson: 5 › The basics\nSelect a row header or a bay, then press the pencil icon to edit its details.\n- To turn a row or its bays sideways, click the row header and change ‘Row runs’ and ‘Bays’.\n- To change how double-sided rows are numbered, edit the row and choose sequential or alternating numbering.\n\n## Adding elements to the map\nQuestions: add text to the map | add a label | add a door | draw a rectangle | add an arrow | dimension lines | north arrow | add symbols | change the colour of an element\nLesson: 5 › Adding elements\nClick an icon in the toolbar and drag the element into the layout. You can add text, labels, rectangles, ellipses, lines, arrows, dimension lines, symbols (door, roller door, window, wall, column, north arrow), pallets and rows.\n\nClick an element to change its colour and style in the floating window.\n\n## Pallets\nQuestions: what is a pallet | temporary pallet | permanent pallet | store boxes on a shelf | core pod | make a pallet permanent | put a box on a pallet\nLesson: 5 › Pallets\nPallets hold boxes that don't have a place in a bay.\n- **Temporary pallets** are a stopgap. Boxes on them show as ‘Waiting for a slot’ in the statistics.\n- **Permanent pallets** are where boxes are meant to stay. They don't have to be real pallets: rename one to a shelf or core pod, for example. Boxes on them don't count as waiting.\n\nTo make a pallet permanent, select it on the shed map and tick ‘Permanent storage location’. To put a box on a pallet yourself, change its planned slot to the pallet's name in the Edit tab.\n\n## Tidying the map\nQuestions: tidy up the map | display settings | display button | make the map look cleaner\nLesson: 5 › Tidying up\nPress ‘Display’ in the toolbar for settings that help keep the map looking clean.\n\n## Saving the map as a PNG\nQuestions: save the map as a png | export the map | picture of the map | image of the shed layout | download the map\nLesson: 5 › Saving PNGs\n1. Press ‘Save PNG’.\n2. Give the map a title.\n3. Press save again.\n\nCIS downloads the file and shows a preview of the map.\n\n# Move mode\n\n## What move mode does\nQuestions: what is move mode | how does move mode work | plan a core move | move boxes | steps of move mode\nLesson: 6 › Overview\nMove mode plans and guides core moves. Upload a list of boxes to move and CIS sorts and groups them and gives each one a slot. Then follow the move box by box, save it, and make any changes.\n\nMove mode has five steps: Upload move data, Connection mode, Offload order, Start move and Finish.\n\n## How CIS picks slots\nQuestions: how does cis choose slots | sorting algorithm | order of the boxes | why did it put a box there | how are boxes grouped\nLesson: 6 › Overview\nCIS groups boxes by feature (alphabetically, or in your own order from Edit › Advanced), then by hole, and orders them by box number and depth. Locked bays and slots are never rearranged, and boxes with sizes only go into slots they fit.\n\n## Uploading a pallet sheet\nQuestions: upload boxes to move | what is a pallet sheet | upload move data | what list do i upload | does the list need to be in order\nLesson: 6 › Uploading data\nUpload a spreadsheet of the boxes you plan to move (drag and drop it, or click +). This list is called a pallet sheet. CIS then shows a column matching page like the one used when importing. Check the selections and make sure the data looks right.\n\nThe list doesn't need to be in any order, because CIS sorts it for you. Include any box details you want in the final inventory.\n\n## Moving boxes already in the shed\nQuestions: no pallet sheet | move existing boxes | rearrange boxes already in the shed | pick boxes from the shed\nLesson: 6 › Alternative approaches\nIf you're only moving boxes that are already in the shed, choose ‘No pallet sheet?’ on the move mode overview page. You can then search for and select boxes in the shed to use in the move.\n\n## Online or offline\nQuestions: online or offline | connection type | connection mode | paper or computer | which mode should i use\nLesson: 6 › Connection type\n- **Online** is computer based: CIS guides you through the move box by box on screen.\n- **Offline** is paper based: print a slot sheet, do the move, then tell CIS what changed.\n\n## Offload order\nQuestions: offload order | pallet order or slot order | what order should i use | which order is best\nLesson: 6 › Offload order\n- **Pallet order** follows the order boxes come off the pallets (last box on is the first box off).\n- **Slot order** goes from one slot to the next (A1-1, A1-2, A1-3…), whatever order the boxes are in on the pallets.\n\nPallet order is usually more logical and efficient. It needs a pallet sheet.\n\n## Guided move (online)\nQuestions: how do i do the move online | next off the pallet | goes to | put in slot | guided move | move guidance screen\nLesson: 6 › Move guidance\nThe move screen shows the box expected next off the pallet, the slot it goes to, and where that slot is in the bay.\n- Press ‘Put in [slot]’ if the box went in its assigned slot. CIS shows the next box.\n- Press ‘It didn't go there’ if it couldn't go in that slot.\n- Press ‘Not this box?’ if you're holding a different box.\n\n‘Up next’ shows the next few boxes: tap one to switch to it. Each box you confirm is locked into its slot and saved straight away.\n\n## When a box doesn't go in its slot\nQuestions: it didn't go there | the box doesn't fit its slot | box went in a different slot | the slot it was meant for | leave the slot empty | use it for the next box | nowhere to put a box\nLesson: 6 › Move guidance\nPress ‘It didn't go there’ and choose what happened:\n- Pick one of the empty slots the box fits, or type the slot it went in and press ‘Record it there’.\n- For the slot it was meant for, choose ‘Use it for the next box’ or ‘Leave it empty’ before recording.\n- If there's nowhere to put it, choose ‘Put it on the temporary pallet’.\n\nBoxes on the temporary pallet can be given a slot later or sent back into the queue. Any still on the pallet at the end of the move stay there.\n\n## Holding the wrong box\nQuestions: not this box | i'm holding a different box | wrong box | box came off out of order\nLesson: 6 › Move guidance\nPress ‘Not this box?’ and pick the box you're holding. CIS lists the closest boxes in the order first, or you can search for it. After you place it, CIS takes you back to the box it was expecting.\n\n## Undoing a placement\nQuestions: undo a placement | put a box in by mistake | placed so far | i put a box in the wrong slot during the move | take back a box\nLesson: 6 › Move guidance\nOpen ‘Placed so far’ to see the boxes you've placed, then press ‘Undo’ next to a box to put it back in the queue.\n\n## Finishing a move\nQuestions: finish a move | make more changes | start over | end the move | what do i do at the end of the move\nLesson: 6 › Move guidance\nOn the Finish step:\n- **Save**: ‘Save to move’ keeps it in the core move file (recommended), or ‘Save to project…’ saves it straight to the shed. If you save to the core move, save it to the shed later from the CIS home page.\n- **Make more changes**: go back if you made a mistake or want to move boxes between pallets.\n- **Start over**: start the move again from scratch.\n\n## Slot sheet (offline)\nQuestions: slot sheet | print the slot sheet | save the sheet as a pdf | paper checklist | do the move on paper\nLesson: 6 › Slot sheet\nCIS shows a preview of the slot sheet: a checklist of the boxes in the chosen move order. Press ‘Print slot sheet’ to print it or save it as a PDF. At the end of the sheet there's a table for noting any changes made during the move.\n\n## After an offline move\nQuestions: back from the move | returning from the move | some boxes went somewhere else | record changes after the move | everything went to plan\nLesson: 6 › Returning from the move\nGo back to the Start move step of move mode and press ‘I'm back from the move’. CIS asks whether everything went to plan.\n- **Everything went as planned**: go to the Finish step and save the move.\n- **Some boxes were moved**: enter each box that went somewhere else, its new slot, and what happened to its original slot (filled by the next box or left empty). Check the order, drag boxes to their real positions if needed, press ‘Update the plan’, then save the move.\n\n# Edit tab\n\n## Edit tab overview\nQuestions: what is the edit tab | where do i edit boxes | fine tune the shed | edit bay information\nLesson: 3 › Edit tab\nThe Edit tab is where you fine-tune box and bay information. It has four parts: Issues, Holes and boxes, Bay settings and Advanced.\n\n## Issues\nQuestions: issues tab | duplicate boxes | doubled up boxes | missing information | bookkeeping errors | fix errors in the inventory\nLesson: 7 › Issues\nThe Issues tab finds bookkeeping problems in the inventory, such as doubled-up boxes or missing information (like a hole ID or feature). You can fix or ignore each one.\n\n## Editing holes and boxes\nQuestions: edit a box | change box details | add new boxes | add a hole | edit hole information | box table\nLesson: 7 › Holes and boxes\nUse Holes and boxes to change hole and box information or add new data. Add new boxes the same way as when you set up a shed, or scroll down to the box table to edit existing boxes. Use the search in the navigation bar to find a hole quickly.\n\n## Changing a box's planned slot\nQuestions: change a planned slot | move a box up or down the order | move a box to a different slot | reorder boxes | type a slot | custom order | box is in the wrong slot\nLesson: 7 › Holes and boxes\nIn Edit › Holes and boxes, boxes are listed in fill order. Either:\n- drag ⠿ to move a box to a different place in the order, or\n- type a slot like A1-5 in the ‘Planned slot’ column to put the box exactly there. Boxes below it move down.\n\n## Bay settings\nQuestions: bay settings | change the number of slots | change bay dimensions | blocked slots | delete a bay | bay orientation | update every row at once\nLesson: 7 › Edit bay settings\nUse Bay settings to change the number of slots in a bay, its dimensions, blocked slots and orientation. It's the only place in CIS where you can delete bays.\n\nUse the settings in a bay header to update that whole bay, or the settings at the top of the tab to update every row.\n\n## Advanced settings\nQuestions: advanced settings | feature order | spacing | leave slots empty | custom columns | add a column | remove a column\nLesson: 7 › Advanced editing\n- **Feature order**: features are ordered alphabetically by default. Drag them into your own order.\n- **Spacing**: leave slots empty at regular intervals, and change the Will it fit? length and width threshold.\n- **Custom columns**: add or remove columns in the bay view tables.\n\n# Troubleshooting\n\n## CIS won't open\nQuestions: cis won't open | blank page | nothing loads | the program isn't working | it won't load\nLesson: 1 › Finding the program\nOpen CIS from the Z_Geology folder, not a copy. If it still won't open, set Microsoft Edge as your default browser and try again.\n\n## Can't connect to the shared folder\nQuestions: can't connect to the folder | folder won't connect | permission denied | access to the folder | projects only saved in this browser\nLesson: 8 › Troubleshooting\nUse Microsoft Edge or Google Chrome: other browsers can't connect to a shared folder. When the browser asks for access to the folder, allow it.\n\n## My project is missing\nQuestions: my project is missing | can't find my project | project disappeared | where did my project go | project not in the list\nLesson: 8 › Troubleshooting\nCheck you're connected to the [Data] Program Files folder in the shared drive, not a copy somewhere else. You can also load a backup with ‘Open project file’.\n\n# Glossary\n\n## Terms\nLesson: 0 › Key terms\n**Project**: an asset such as a dam or weir. A project can hold one or more sheds.\n**Shed**: the saved record of exactly which boxes are in a core shed and where. It can't be edited directly.\n**Core move**: a working copy of a shed for planning and recording moves without changing the saved record.\n**Row, bay and slot**: where a box lives. A1-1 means row A, bay 1, slot 1. B2-4 means row B, bay 2, slot 4.\n**Feature ID**: the structure or area a hole belongs to (e.g. BFA1). CIS groups boxes by feature.\n**Hole ID**: the drill hole a box came from (e.g. DD100).\n**Box**: one core tray, numbered down the hole, with its From and To depths in metres.\n**Locked**: a bay or slot CIS will never rearrange.\n**Held**: a box in an unlocked slot that keeps its place until you choose to update positions.\n**Temporary pallet**: a place for boxes waiting for a slot.\n**Permanent pallet**: a pallet, shelf or core pod where boxes are meant to stay.\n**Pallet sheet**: the spreadsheet of boxes you upload to start a core move.\n**Slot sheet**: the printed checklist used for an offline move.\n",
 "smallTalk": [
  {
   "id": "greeting",
   "match": [
    "hi",
    "hello",
    "hey",
    "hiya",
    "g'day",
    "gday",
    "howdy",
    "yo",
    "good morning",
    "good afternoon",
    "good evening",
    "morning",
    "afternoon",
    "hi there",
    "hello there",
    "hey there",
    "greetings"
   ],
   "replies": [
    "G'day! I'm GOA, Lord of Core. What can I help you with?",
    "Hello! Ask me anything about the Core Inventory System.",
    "Hi there. What are we digging into today?"
   ]
  },
  {
   "id": "how-are-you",
   "match": [
    "how are you",
    "how are you going",
    "how's your day",
    "how's your day going",
    "how is your day",
    "how's it going",
    "hows it going",
    "how are things",
    "how do you do",
    "how have you been",
    "what's up",
    "whats up",
    "sup",
    "you good",
    "you ok"
   ],
   "replies": [
    "Solid as ever. Granite doesn't have off days. How can I help?",
    "Rock steady, thanks for asking! What do you need?",
    "Feeling a bit sedimentary today, but I'll push through. What can I help with?"
   ]
  },
  {
   "id": "who-are-you",
   "match": [
    "who are you",
    "what are you",
    "what's your name",
    "whats your name",
    "what is your name",
    "who is goa",
    "what is goa",
    "what does goa stand for",
    "introduce yourself",
    "tell me about yourself"
   ],
   "replies": [
    "I'm GOA, Lord of Core: a piece of granite drill core that happens to know the CIS manual inside out. Ask me how to do something and I'll find it for you.",
    "GOA, Lord of Core, at your service. I'm a chunk of granite with a crown and a very good memory for the CIS manual."
   ]
  },
  {
   "id": "what-do-you-do",
   "match": [
    "what do you do",
    "what can you do",
    "what can i ask",
    "what can i ask you",
    "how do you work",
    "how can you help",
    "what are you for",
    "help",
    "help me",
    "i need help",
    "can you help",
    "can you help me",
    "what do you know",
    "what can you help with",
    "what can you help me with"
   ],
   "replies": [
    "I answer questions about the Core Inventory System from its manual, and point you to the lesson that covers it. Try “How do I make a backup?” or “What does held mean?”",
    "Ask me how to do anything in CIS, what a term means, or which lesson covers something. For example: “How do I lock a bay?”"
   ]
  },
  {
   "id": "thanks",
   "match": [
    "thanks",
    "thank you",
    "thanks goa",
    "cheers",
    "ta",
    "thx",
    "ty",
    "thanks heaps",
    "thank you so much",
    "~thanks for",
    "~thank you for",
    "awesome thanks",
    "great thanks",
    "perfect thanks"
   ],
   "replies": [
    "No worries! Anything else?",
    "Happy to help. I'm here if you need me.",
    "Cheers! Rock on."
   ]
  },
  {
   "id": "bye",
   "match": [
    "bye",
    "goodbye",
    "see ya",
    "see you",
    "cya",
    "catch you later",
    "that's all",
    "thats all",
    "i'm done",
    "im done",
    "nothing else",
    "no thanks"
   ],
   "replies": [
    "See you later! I'll be here, sitting very still.",
    "Bye for now. Don't take me for granite."
   ]
  },
  {
   "id": "joke",
   "match": [
    "~joke",
    "make me laugh",
    "say something funny",
    "~pun"
   ],
   "replies": [
    "Geologists make great partners. They really dig you.",
    "Don't worry, I'll never take you for granite.",
    "What's a rock's favourite music? Rock and roll. Mostly roll, if it's on a hill.",
    "I tried to write a joke about gneiss, but it came out all foliated."
   ]
  },
  {
   "id": "compliment",
   "match": [
    "good bot",
    "good job",
    "nice",
    "nice one",
    "great",
    "awesome",
    "you're great",
    "youre great",
    "you're awesome",
    "love you",
    "i love you",
    "you're the best",
    "legend",
    "you rock",
    "well done",
    "brilliant"
   ],
   "replies": [
    "Aw, shucks. You're making my quartz blush.",
    "You rock too.",
    "Thank you! I've been polishing my answers."
   ]
  },
  {
   "id": "frustration",
   "match": [
    "that's wrong",
    "thats wrong",
    "wrong answer",
    "not helpful",
    "that didn't help",
    "that didnt help",
    "you're useless",
    "youre useless",
    "useless",
    "this is useless",
    "stupid",
    "dumb",
    "that's not what i asked",
    "thats not what i asked",
    "not what i meant"
   ],
   "replies": [
    "Sorry about that. Try asking another way, like using the name of the button or screen you're on. If I still can't find it, the person who looks after CIS can help.",
    "My mistake. Can you rephrase it? Naming the tab or button you're looking at helps me a lot."
   ]
  },
  {
   "id": "ai",
   "match": [
    "are you ai",
    "are you an ai",
    "are you a robot",
    "are you real",
    "are you human",
    "are you a bot",
    "are you chatgpt",
    "are you alive",
    "are you sentient"
   ],
   "replies": [
    "I'm a rock with a search engine for a brain. I look up answers in the CIS manual rather than making them up, so what I tell you comes straight from the docs."
   ]
  },
  {
   "id": "creator",
   "match": [
    "who made you",
    "who created you",
    "who built you",
    "who wrote you",
    "where did you come from",
    "where are you from"
   ],
   "replies": [
    "I was found lying on the ground near a drill site. Turns out I could talk and knew all about CIS. The rest is history. Geological history."
   ]
  },
  {
   "id": "age",
   "match": [
    "how old are you",
    "what's your age",
    "whats your age",
    "when were you born"
   ],
   "replies": [
    "Around 300 million years, give or take. Granite ages well."
   ]
  },
  {
   "id": "ok",
   "match": [
    "ok",
    "okay",
    "k",
    "cool",
    "got it",
    "alright",
    "sounds good",
    "sure",
    "yep",
    "right",
    "ok thanks",
    "okay thanks"
   ],
   "replies": [
    "Great. Anything else I can help with?",
    "Easy. Shout if you need anything else."
   ]
  }
 ],
 "learned": {
  "votes": {},
  "good": [],
  "fixes": []
 }
};
