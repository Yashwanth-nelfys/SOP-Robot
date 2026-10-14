 "use client";
import {useMemo,useState} from "react";
import {useParams} from "next/navigation";
import {ArrowLeft,ArrowRight,Download,ExternalLink,FileText,ShieldCheck,BookOpen,ChevronLeft,ChevronRight,CheckCircle2,Circle,Search,PanelRightClose,PanelRightOpen,Maximize2,Minimize2,Clock3,ListChecks,Lightbulb,Info,Check,RotateCcw} from "lucide-react";
import {sops} from "../../sops-data";

type Step={title:string;detail:string;page:number;note?:string};
function getSteps(title:string):Step[]{
 const t=title.toLowerCase();
 if(t.includes("ald lead micro"))return [
 {title:"Set the robot controller to T1",detail:"Turn the robot controller mode selector from AUTO to T1, as shown in the source SOP.",page:2},
 {title:"Switch the teach pendant ON",detail:"Turn the teach pendant selector from OFF to ON.",page:3},
 {title:"Clear the fault indication",detail:"Press RESET until the FAULT LED turns off.",page:4},
 {title:"Open the HOME program",detail:"Press SELECT to display the program list. Use the teach pendant arrow keys to select HOME, then press ENTER.",page:4},
 {title:"Check the HOME program screen",detail:"Confirm that the HOME program is displayed on the teach pendant.",page:5},
 {title:"Hold the deadman switch",detail:"Hold the deadman switch located on the back of the teach pendant. The source SOP says it must be held continuously until the function is completed.",page:5,note:"Keep holding the deadman switch continuously until the function is completed."},
 {title:"Execute the homing command",detail:"While holding the deadman switch, hold SHIFT and press FWD. The source document marks this as the homing-complete step.",page:6},
 {title:"Open the main program",detail:"After homing, press SELECT to show the program list, select the main program and press ENTER.",page:8},
 {title:"Refresh robot functions",detail:"Press FCTN and ENTER to refresh the robot functions. The source SOP says to repeat this 3–4 times.",page:9},
 {title:"Turn the teach pendant OFF",detail:"Turn the teach pendant selector from ON to OFF.",page:10},
 {title:"Return the controller to AUTO",detail:"Turn the robot controller selector from T1 to AUTO.",page:11}
 ];
 if(t.includes("language"))return [
 {title:"Open the controller menu",detail:"Use the MENU key on the teach pendant to open the controller menu.",page:2},
 {title:"Open setup options",detail:"Navigate to the SETUP options shown in the supplied language-setting SOP.",page:2},
 {title:"Locate General settings",detail:"Navigate to General settings and find the Current language option.",page:3},
 {title:"Review the language setting",detail:"Use the on-screen setting and controller prompts shown in the source document. Confirm the intended language before making a change.",page:3,note:"The extracted text does not fully specify every screen interaction. Follow the controller prompts and authorized site instructions."}
 ];
 if(t.includes("efort robot operation"))return [
 {title:"Check PPE and the robot area",detail:"Wear the PPE listed in the SOP. Ensure the robot area is clear, air pressure and power supply are normal, and safety interlocks are not bypassed.",page:2,note:"Never enter the robot working area during auto mode. Use Emergency Stop during abnormal conditions."},
 {title:"Select manual mode and unlock",detail:"Turn the key to manual mode before entering the robot area, then press the unlock button as illustrated.",page:2},
 {title:"Set the pendant to T1",detail:"Set the Teach Pendant selector switch to T1 for manual operation.",page:2},
 {title:"Use axis controls as instructed",detail:"The SOP identifies the pendant buttons used to move robot axes forward and backward. Only trained, authorized personnel should perform these movements.",page:2},
 {title:"Enable servo with the deadman switch",detail:"Hold the deadman switch on the back of the teach pendant to turn on servo power.",page:3},
 {title:"Review speed controls and login",detail:"Locate the robot speed controller buttons. Log in on the pendant if the login page is presented and credentials are required.",page:3},
 {title:"Review and reset displayed alarms",detail:"Open ERROR and review/reset alarms using the pendant screen as shown in the SOP. Investigate recurring or unexplained faults.",page:4},
 {title:"Locate the required program module",detail:"Open the main robot program and select the module for the specific operation, such as Clamp open or Rehome.",page:5},
 {title:"Select the start line and set PC",detail:"Select the first/START line of the selected module and press SET PC, following the example shown in the source.",page:5},
 {title:"Run the selected operation",detail:"Use the pendant play button to run the selected operation, only after confirming the area is safe and the approved procedure applies.",page:6},
 {title:"Verify home position and trail run",detail:"The trail-run checklist calls for verifying home position and axis movement in manual mode, observing abnormal noise/vibration/alarms, and checking pick-and-place accuracy and alignment.",page:8}
 ];
 if(t.includes("jsg fanuc"))return [
 {title:"Set the controller to T1",detail:"Turn the robot controller mode selector from AUTO to T1.",page:2},
 {title:"Turn the teach pendant ON",detail:"Turn the teach pendant selector from OFF to ON.",page:3},
 {title:"Clear faults",detail:"Press RESET until the FAULT LED turns off.",page:4},
 {title:"Select the HOME program",detail:"Press SELECT, use the arrow keys to choose HOME in the program list, and press ENTER.",page:4},
 {title:"Confirm HOME is displayed",detail:"Check that the HOME program is visible on the teach pendant.",page:5},
 {title:"Hold the deadman switch",detail:"Hold the deadman switch on the back of the teach pendant continuously until the function completes.",page:5,note:"Do not release the deadman switch during the documented operation."},
 {title:"Run the homing command",detail:"While holding the deadman switch, hold SHIFT and press FWD.",page:6},
 {title:"Open the main program",detail:"Press SELECT, choose the main program and press ENTER.",page:8},
 {title:"Refresh robot functions",detail:"Press FCTN and ENTER to refresh all robot functions. Repeat 3–4 times, as the SOP specifies.",page:9},
 {title:"Turn the pendant OFF",detail:"Turn the teach pendant selector from ON to OFF.",page:10},
 {title:"Return controller to AUTO",detail:"Turn the controller selector from T1 to AUTO.",page:11},
 {title:"Open Function Control in HMI",detail:"In the HMI, select Function Control.",page:12},
 {title:"Select Initialization",detail:"Choose Initialization in Function Control.",page:13},
 {title:"Complete suction-cup initialization",detail:"The source SOP says to click and hold Suction cup for 2.5 seconds to complete initialization.",page:14},
 {title:"Select Manual Control",detail:"Select Manual Control in the HMI.",page:15},
 {title:"Review sucker vacuum controls",detail:"The SOP directs users to Sucker → Suction cup vacuum, then to tap Suction vacuum and Break the vacuum for both sucker A and B.",page:16},
 {title:"Return to AUTO and run",detail:"The final source instruction is to turn the machine to AUTO mode and run.",page:16,note:"Perform only after authorized checks confirm the machine and work area are safe."}
 ];
 if(t.includes("backup"))return [
 {title:"Prepare the USB drive",detail:"Use the backup destination and USB export process shown in the original EFORT backup SOP.",page:2},
 {title:"Locate the robot program export",detail:"Follow the source SOP's pendant screen flow to access the program/file export controls.",page:3},
 {title:"Export to USB",detail:"Use the ToUSB/export process illustrated in the source document. Do not interrupt the transfer while it is in progress.",page:4},
 {title:"Verify the exported files",detail:"Check that the expected program files appear on the USB drive before disconnecting it.",page:5},
 {title:"Copy to a dated backup folder",detail:"Transfer the exported files to the designated computer backup location and organize them using the site's naming convention.",page:6},
 {title:"Confirm backup completion",detail:"Confirm the copied files are present and readable. Keep the original files unchanged unless the approved backup policy says otherwise.",page:6}
 ];
 return [{title:"Review the source procedure",detail:"Open the original PDF and follow the illustrated instructions for this SOP. The interactive guide does not invent missing steps.",page:1}];
}
export default function SopPage(){
 const params=useParams<{slug:string}>();const sop=sops.find(s=>s.slug===params.slug);
 const [done,setDone]=useState<number[]>([]);const [active,setActive]=useState(0);const [showChecklist,setShowChecklist]=useState(true);const [search,setSearch]=useState("");const [showSearch,setShowSearch]=useState(false);
 const steps=useMemo(()=>sop?getSteps(sop.title):[],[sop]);const filteredSteps=steps.filter(x=>`${x.title} ${x.detail}`.toLowerCase().includes(search.toLowerCase()));
 if(!sop)return <main className="detail"><a href="/">← Back to library</a><h1>SOP not found</h1></main>;
 const current=steps[Math.min(active,steps.length-1)];const pct=Math.round(done.length/steps.length*100);
 const pageImg=(page:number)=>sop.pageImages.find(x=>x.endsWith(`page-${page}.png`))||sop.pageImages[0];
 return <main className={`detail interactive-detail theme-${sop.theme}`}>
 <header className="detailbar"><a href="/" className="back"><ArrowLeft size={15}/> SOP LIBRARY</a><b>PREMIER / ROBOTICS</b><a className="pdf" href={`/docs/${sop.file}`} target="_blank" rel="noreferrer"><Download size={14}/> Original PDF <ExternalLink size={12}/></a></header>
 <section className="detailhero wrap"><div className="detail-kicker"><i/>{sop.category} · {sop.pages} PAGE SOURCE</div><h1>{sop.title}</h1><p>{sop.description}</p><div className="detail-actions"><a href="#guided"><ListChecks size={15}/> Start interactive guide <ArrowRight size={15}/></a><span><ShieldCheck size={14}/> Source-led guidance</span></div><div className="doc-graphic"><FileText size={65}/><span>PROCEDURE FILE</span><b>{sop.pages} PAGES</b></div></section>
 <section className="guided wrap" id="guided">
  <div className="guided-heading"><div><div className="detail-kicker">INTERACTIVE WORKFLOW</div><h2>Follow the procedure.</h2><p>Move through the documented steps, check off completed items, and open the related source reference when you need it.</p></div><div className="progress-badge"><b>{pct}%</b><span>COMPLETED</span></div></div>
  <div className="progress-track"><span style={{width:`${pct}%`}}/></div>
  <div className="guided-layout">
   <aside className={`step-sidebar ${showChecklist?"":"collapsed"}`}><div className="sidebar-head"><span>PROCEDURE STEPS <b>{done.length}/{steps.length}</b></span><button onClick={()=>setShowChecklist(!showChecklist)} aria-label="Toggle steps">{showChecklist?<PanelRightClose size={15}/>:<PanelRightOpen size={15}/>}</button></div>
    {showChecklist&&<><label className="step-search"><Search size={14}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Find a step…"/></label><div className="step-list">{filteredSteps.map(step=>{const index=steps.indexOf(step);return <button key={step.title} className={`step-nav ${index===active?"active":""} ${done.includes(index)?"completed":""}`} onClick={()=>setActive(index)}><span className="step-status">{done.includes(index)?<CheckCircle2 size={17}/>:<Circle size={17}/>}</span><span><small>STEP {String(index+1).padStart(2,"0")}</small><b>{step.title}</b></span><ChevronRight size={14}/></button>})}{!filteredSteps.length&&<p className="no-steps">No matching steps.</p>}</div><button className="reset-checklist" onClick={()=>{setDone([]);setActive(0)}}><RotateCcw size={13}/> Reset progress</button></>}
   </aside>
   <article className="step-workspace"><div className="step-work-top"><span>STEP {String(active+1).padStart(2,"0")} <i>OF</i> {String(steps.length).padStart(2,"0")}</span><span><Clock3 size={13}/> Guided reference</span></div><div className="step-title-row"><div className="step-number">{String(active+1).padStart(2,"0")}</div><div><div className="detail-kicker">PROCEDURE INSTRUCTION</div><h3>{current.title}</h3></div></div><p className="step-description">{current.detail}</p>
    {current.note&&<div className="step-note"><Info size={17}/><div><b>Important note from the SOP</b><p>{current.note}</p></div></div>}
    <div className="source-reference"><div className="source-reference-head"><span><FileText size={15}/> SOURCE REFERENCE</span><span>PAGE {current.page}</span></div><div className="source-reference-body"><img src={pageImg(current.page)} alt={`Source reference for ${current.title}`}/><div><b>Refer to the original illustration</b><p>This preview is taken from the supplied SOP. Some page numbers may not have a separate thumbnail; use the full PDF for the exact page.</p><a href={`/docs/${sop.file}#page=${current.page}`} target="_blank" rel="noreferrer">Open source PDF at page {current.page} <ExternalLink size={13}/></a></div></div></div>
    <label className={`complete-step ${done.includes(active)?"is-done":""}`}><input type="checkbox" checked={done.includes(active)} onChange={e=>setDone(v=>e.target.checked?[...new Set([...v,active])]:v.filter(n=>n!==active))}/><span className="fake-check"><Check size={14}/></span><span><b>{done.includes(active)?"Step marked complete":"Mark this step complete"}</b><small>Your checklist progress is shown above.</small></span></label>
    <div className="step-navigation"><button disabled={active===0} onClick={()=>setActive(v=>Math.max(0,v-1))}><ChevronLeft size={16}/> Previous step</button>{active<steps.length-1?<button className="next-step" onClick={()=>setActive(v=>Math.min(steps.length-1,v+1))}>Next step <ChevronRight size={16}/></button>:<button className="next-step" onClick={()=>{setDone(steps.map((_,i)=>i));setActive(steps.length-1)}}><CheckCircle2 size={16}/> Finish checklist</button>}</div>
   </article>
  </div>
 </section>
 <section className="references wrap"><div className="ref-heading"><div><div className="detail-kicker">SOURCE DOCUMENT</div><h2>All reference pages.</h2><p>Browse the source-page previews or open the complete PDF for all annotated images and instructions.</p></div><a href={`/docs/${sop.file}`} target="_blank" rel="noreferrer">Open full PDF <ExternalLink size={14}/></a></div><div className="ref-grid">{sop.pageImages.map((src,n)=><a className="reference-tile" key={src} href={`/docs/${sop.file}#page=${Number(src.match(/page-(\d+)/)?.[1]||1)}`} target="_blank" rel="noreferrer"><img src={src} alt={`${sop.title} source page preview ${n+1}`}/><span>OPEN SOURCE PAGE <ExternalLink size={12}/></span></a>)}</div></section>
 <section className="warning wrap"><ShieldCheck size={22}/><div><b>Follow approved machine-specific procedures.</b><p>This interactive guide organizes the supplied SOP into a step checklist. It is not a substitute for authorized training, the complete source PDF, or site safety rules. Verify each step with an authorized supervisor before machine operation.</p></div></section>
 <footer className="footer wrap"><a href="/" className="back"><ArrowLeft size={14}/> Return to SOP library</a><span>{sop.title}</span><span>Source: uploaded PDF</span></footer>
 </main>
}