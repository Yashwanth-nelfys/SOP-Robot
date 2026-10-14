export const sops = [
  {
    "slug": "efort-robot-backup",
    "file": "efort-robot-backup.pdf",
    "title": "EFORT Robot Backup",
    "description": "Export EFORT robot program backups to USB and transfer the files to dated folders on a computer.",
    "category": "Backup & Recovery",
    "theme": "cyan",
    "keywords": "USB, ToUSB, ENV ROBOT, export, backup folder",
    "pages": 15,
    "pageImages": [
      "/pages/efort-robot-backup/page-2.png",
      "/pages/efort-robot-backup/page-3.png",
      "/pages/efort-robot-backup/page-4.png"
    ]
  },
  {
    "slug": "ald-leadmicro-homing",
    "file": "ald-leadmicro-homing.pdf",
    "title": "ALD Lead Micro FANUC Robot Homing",
    "description": "Controller homing workflow for the ALD Lead Micro FANUC robot.",
    "category": "Robot Homing",
    "theme": "amber",
    "keywords": "T1, deadman switch, POSITION REG, PR[300], FCTN",
    "pages": 15,
    "pageImages": [
      "/pages/ald-leadmicro-homing/page-2.png",
      "/pages/ald-leadmicro-homing/page-3.png",
      "/pages/ald-leadmicro-homing/page-4.png"
    ]
  },
  {
    "slug": "fanuc-language-setting",
    "file": "fanuc-language-setting.pdf",
    "title": "FANUC Robot Language Setting — JSG ALD",
    "description": "Navigate teach pendant setup menus to locate the current language setting.",
    "category": "Controller Setup",
    "theme": "violet",
    "keywords": "MENU, SETUP, General, Current language, ENTER",
    "pages": 4,
    "pageImages": [
      "/pages/fanuc-language-setting/page-2.png",
      "/pages/fanuc-language-setting/page-3.png",
      "/pages/fanuc-language-setting/page-4.png"
    ]
  },
  {
    "slug": "efort-operation",
    "file": "efort-operation.pdf",
    "title": "EFORT Robot Operation Procedure",
    "description": "Operating procedure, components, safety precautions, program modules and trail-run checks.",
    "category": "Robot Operation",
    "theme": "emerald",
    "keywords": "PPE, safety interlocks, emergency stop, servo, ERROR, SET PC",
    "pages": 8,
    "pageImages": [
      "/pages/efort-operation/page-2.png",
      "/pages/efort-operation/page-3.png",
      "/pages/efort-operation/page-4.png"
    ]
  },
  {
    "slug": "jsg-fanuc-homing",
    "file": "jsg-fanuc-homing.pdf",
    "title": "JSG FANUC Robot Homing",
    "description": "Step-by-step homing sequence and HMI initialization for the JSG FANUC robot.",
    "category": "Robot Homing",
    "theme": "rose",
    "keywords": "T1, HOME program, deadman switch, SHIFT FWD, initialization",
    "pages": 16,
    "pageImages": [
      "/pages/jsg-fanuc-homing/page-2.png",
      "/pages/jsg-fanuc-homing/page-3.png",
      "/pages/jsg-fanuc-homing/page-4.png"
    ]
  }
] as const;
export const sopContent: Record<string,string> = {
  "ald-leadmicro-homing": "SOP – LEAD MICRO FANUC \nRobot Homing\n\nPrepared By : Chandrakala\nStep 1: Turn the nobe into “T1” \nfrom “AUTO” in robot contoller\n\nPrepared By : Chandrakala\nStep 2: Turn the nobe into “ON” \nfrom “OFF” in robot teach \npendent.\n\nPrepared By : Chandrakala\nStep 3: Hold the dead man switch. \nLocated at the backside of teach \npendent\nNOTE : DEADMAN switch should be hold continuously until \nthe functioning is completed.\nStep 4: Click “RESET” button \nuntil the FAULT LED turns off.\n\nPrepared By : Chandrakala\nStep 5: Click “F1” button to display \nthe [TYPE] where we can access the \nrobot homing line.\n\nPrepared By : Chandrakala\nStep 6: Navigate down and \nselect “POSITION REG” and \nclick “ENTER”\nThe [TYPE] options are \ndisplayed.\nStep 7: Click “ENTER” to open \nthe selected type.\n\nPrepared By : Chandrakala\nPR[296: A-side Robot Homing line.\nPR[297: B-side Robot Homing line.\nPR[300: Robot Homing line.\nStep 8: Select the PR[300 line \nfor robot homing.\nStep 9: Click “F2” to run the \nselected line.\n\nPrepared By : Chandrakala\nStep 10: Turn the nobe into \n“OFF” from “On” in robot teach \npendent.\n\nPrepared By : Chandrakala\nStep 11:  Click “FCTN” button and click \n“ENTER” to refresh all the robot functions. \n(Repeat it 3-4 times)\n\nPrepared By : Chandrakala\nFig: 12.1\nFig: 12.2\nFig: 12.3\n\nPrepared By : Chandrakala\nStep 12:\nAfter homing successful, Click on “SELECT” for programs list (Fig: 12.1)\nSelect the main program - RSR0001 from the programs list displayed. (Fig:12.2)\nUse the Arrow keys on the teach pendent to navigate through the list.\nOpen the main program by clicking on “ENTER” button (Fig:12.3)\n\nPrepared By : Chandrakala\nStep 13: Turn the nobe into \n“AUTO” from “T1” in robot \ncontroller.\n\nPrepared By : Chandrakala\nStep 14: Turn the nobe into \n“Manual” from AUTO of the HMI\n\nPrepared By : Chandrakala\nStep 15: Select “O_Reset” \nin the HMI.\n\nPrepared By : Chandrakala\nStep 16: Do “Channel_Home” of A side section.\nTurn the machine into “AUTO” mode and run.\n",
  "fanuc-language-setting": "FANUC Robot Language \nSetting – JSG ALD\n\nStep 1: Click on “MENU” button in \nteach Pendent\nPrepared By : Chandrakala\n\nAfter selecting “MENU” , The “MENU 1” screen will be \ndisplayed as shown in the attached image.\nUse the Arrow keys on the teach \npendent to navigate through the \nmenu options.\nStep 2: Select 6.SETUP \nand press “ENTER”.\nThe SETUP 1 screen will \nbe displayed.\nStep 3: Select 3.General \nand press “ENTER”\nPrepared By : Chandrakala\n\nStep 4: Using arrow keys , Navigate to \n“Current language” and press ENTER\nAfter selecting “General” , The screen will be \ndisplayed as shown in the attached image.\nPrepared By : Chandrakala\n",
  "efort-operation": "SOP – EFORT Robot Operation Procedure \n \n1. SOP Details  \nMachine name : Effort Industrial Robot System \nApplication : Automated material handling / pick & place operations. \nDepartment : Maintenance \nPrepared by : Kalla Naga Chandra kala \nVersion : 1.0 \n \n2. Purpose  \nTo provide the correct operating procedure for the Efort robot system to ensure safe, smooth, \nand efficient operation during production. \n \n3. Scope \nThis SOP applies to all operators, technicians, and maintenance personnel working with the \nEfort robot system. \n \n4. Safety Precautions \nPersonal Safety: \n• Wear PPE: safety shoes, helmet, gloves, mask, hair cover, and safety glasses \n• Do not enter inside robot working area during auto mode. \n• Never bypass safety interlocks or door sensors. \n• Keep hands away from moving parts and robot arm. \n• Use Emergency Stop immediately during abnormal conditions \nMachine Safety: \n• Ensure air pressure and power supply are normal. \n• Check robot area is free from obstacles. \n• Do not manually move robot arm when servo power is ON. \n \n \n \n\n5. Main Components \n• Teach Pendent \n• Efort Robot Arm \n• Gripper \n• Safety Sensors \n• Emergency Stop Switch \n \n6. Operating Procedure \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n1. Turn the key into \nmanual mode while \nentering into robot area. \n2. Press the \nunlock button. \n3. Set the Teach \nPendant Selector \nswitch in T1 \nmode while \noperating in \nmanual mode. \n4. Buttons for all robot axis \nto operate forward and \nbackward. \n\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n5. Hold the dead \nman switch to \nturn on the servo. \nIt is located at the \nbackside of teach \npendent. \n6. Robot Speed \ncontroller buttons. \n7. LOGIN Page. (Not \nmandatory everytime) \nEnter the credentials and \nlogin. \n\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n8. Click on ERROR. \n9. Reset all the errors/alarms. \n10. The main program of robot \noperation. \n\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nTO CLAMP OPEN:   \n \n \n \n \n \n \n \n \n \n \n \n11. Modules of the program for \nthe specific operation. \nA. Select the specific module \nfrom the list. (Ex: Clamp open) \nB. Select the first \nline or START line \nof the program \nC. Click “SET PC” for \noperation \n\n \n \n \n \n \n \n \n \n \n \n \n \nTO REHOMING THE ROBOT: \n \n \n \nD. Click play button to \nrun the selected \noperation. \nC. Click “SET PC” \nfor operation \nB. Select the run \nprogram line. \nA. Select the specific module \nfrom the list. (Ex: Rehome) \n\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nD. Click play button to \nrun the selected \noperation. \n12. Options for a \nmonitor icon. \n\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nTrail RUN : \n• Remove LOTO. \n• Ensure the robot is in the Home position. \n• Run the robot in manual mode and verify all axis movements. \n• Observe for abnormal noise, vibration or alarms. \n• Verify pick-and-place accuracy and alignment. \n13. Angle of all robot \naxis will be displayed \nhere. Confirm all the \naxis will be 0 deg after \nhoming. \n14. After the manual operations , at \nthe time of exiting the robot place \nwe should acknowledge the safety \nselector switch. \n",
  "jsg-fanuc-homing": "SOP – JSG FANUC Robot \nHoming\n\nPrepared By : Chandrakala\nStep 1: Turn the nobe into “T1” \nfrom “AUTO” in robot contoller\n\nPrepared By : Chandrakala\nStep 2: Turn the nobe into “ON” \nfrom “OFF” in robot teach \npendent.\n\nPrepared By : Chandrakala\nStep 3: Click “RESET” button \nuntil the FAULT LED turns off.\nStep 4: Click “SELECT” button to \ndisplay the program list.\nStep 5: Click “ENTER” button to \nopen the program.\nSelect the “HOME” program \nfrom the programs list \ndisplayed.\nUse the Arrow keys on the \nteach pendent to navigate \nthrough the list.\n\nPrepared By : Chandrakala\nStep 7: Hold the dead man switch. \nLocated at the backside of teach \npendent\nStep 6: The “HOME” program is \ndisplayed on the screen.\nNOTE : DEADMAN switch should be hold continuously until \nthe functioning is completed.\n\nPrepared By : Chandrakala\nStep 8: By holding, DeadMan \nswitch. Hold the “SHIFT” key and \nclick “FWD” button.\nRobot Homing done \nsuccessfully.\n\nPrepared By : Chandrakala\nFig: 9.1\nFig: 9.2\nFig: 9.3\n\nPrepared By : Chandrakala\nStep 9:\nAfter homing successful, Click on “SELECT” for programs list (Fig: 9.1)\nSelect the main program (Fig:9.2)\nOpen the main program by clicking on “ENTER” button (Fig:9.3)\n\nPrepared By : Chandrakala\nStep 10:  Click “FCTN” button and click \n“ENTER” to refresh all the robot functions. \n(Repeat it 3-4 times)\n\nPrepared By : Chandrakala\nStep 11: Turn the nobe into \n“OFF” from “On” in robot teach \npendent.\n\nPrepared By : Chandrakala\nStep 12: Turn the nobe into \n“AUTO” from “T1” in robot \ncontroller.\n\nPrepared By : Chandrakala\nStep 13: In HMI, Select the \n“Function Control”.\n\nPrepared By : Chandrakala\nStep 14: Select “Initialization”.\n\nPrepared By : Chandrakala\nStep 15: Click and hold \n“Suction cup” for 2.5sec to \ncomplete the initialization.\n\nPrepared By : Chandrakala\nStep 16: Select the “Manual \nControl”.\n\nPrepared By : Chandrakala\nStep 17: Click “Sucker” → “Suction \ncup vaccum”. \nTap on “Suction vaccum” and “Break \nthe vaccum” of both sucker A&B.\nTurn the machine into “AUTO” \nmode and run.\n",
  "efort-robot-backup": "SOP – EFORT ROBOT \nBACKUP \n\nEXPORT TO PENDRIVE\n2\nPen drive\nUSB Port\nStep 1: Connect the Pen Drive\nto the USB port on the side of \nthe Teach Pendant.\n\nSTEP - 1\nStep – 3: Go to File \nOption \nStep – 2: Remember the \nFile Name or Note down\n\nSTEP 2\nStep 4: Verify the program file name, ensure \nENV is set to ROBOT, and select the \ncorresponding program file.\nNote: If multiple file names are listed as like \nhere, carefully verify the correct file name \nbefore transferring it to the Pen Drive.\n\n5\nStep 5: Select the “USB” tab at the bottom, then \nchoose “ToUSB” from the available options\nStep 6: Program backup transfer to the USB \npendrive is completed.\n\nALD-LEADMICRO EFORT\nROBOT\n6\nStep A: Note down the \nname of the program file.\n\n7\nStep B: Click on “FILE” \noption. And Select “XPL” \nfrom the available options\n\n8\nStep C: Verify the program file \nname and confirm that the \nENV is set to ROBOT. Then, \nSelect the corresponding \nprogram file.\nStep D: Select the “USB” tab at \nthe bottom, then choose \n“ToUSB” from the available \noptions.\n\n9\nStep E: Click on “EXPORT” \nto transfer the backup \nprogram into pendrive\n\nIMPORT TO SYSTEM:\n10\nStep 7: Plug the Pen drive to \nthe system.\n\nFINAL TIPS & TAKEAWAYS\n11\nStep 8: Select the Pen drive\nstorage drive\n\nSPEAKING ENGAGEMENT METRICS\n12\nStep 9: Cut the \nprogram backup file \nfrom the pen drive\nstorage drive.\n\n13\nStep 10: Navigate to the desired \nstorage drive in the system where \nyou want to save the backup file\n\n14\nStep 11: Create a folder at the \ndesired location in the system \nand name it with the date for \nfuture reference.\n\n15\nStep 12: Paste the program \nbackup file into the folder you \ncreated.\n"
};
