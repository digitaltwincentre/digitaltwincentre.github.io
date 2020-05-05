---
layout: default
title: Biweekly 17
date: 06 May 2020, 1030 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 06 May 2020, 10:30 CEST |


## Pre-meeting stakeholder's reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### HDM
  
* The Three Water Tank is currently broken and needs a quick fix:
  <https://github.com/INTO-CPS-Association/example-three_tank_watertank/issues/2>. 
  No major rework or move. We just need somene to merge the currently working version
  as by Tutorial 1 and commit it to git. A major decision that we need to make, though,
  is to whom we pass Carl's responsibility. This case study and the LFR one must
  have an active maintainer.

* There have been some advances in the water case study. There is a new lead from
  Aarhus Vand, Lene for the ones who been to the meetings. From our side we will 
  have Mustafa. Lene will kick-of new developments after discussions with Grundfoss.
 
* I have been online in the last two Systems Engineering Tutorial sessions.

* I have been helping  Hao to reuse the VDM model of the Ether example in our time 
delay paper. He has been doing good advances on that side.

* I was invited to present at a WATEC led virtual meeting next week.

* I plan to add several improvements to my contribution to the ISOLA paper, but 
  I did not find the time yet.


#### Jim
* I've been working on a paper on probability in RoboChart (deadline 4th May). I'll now return to the technical report and ISoLA paper on the tolerance language.

#### Peter Gorm Larsen
* Two more digital twin projects in the area of buildings have been approved (PI for AU for both of them are Jochen Teizer) 
* Creased presentation that will be shown to the DiT4CPS board next week
* Submitted HUBCAP extended draft to ESA's MBSE event in September
* Another proposal involving digital twins was submitted to Villum Friday last week (we have a small role)

#### Nick
* I've resumed work on the FMI3 static model, bringing the VDM into line with the latest 3.0 XSD schema and FMU structure changes. They have moved several of the XML elements out of the main modelDescription.xml into separate buildDescription.xml and terminalsAndIcons.xml files within the FMU. The model still has static checking functions for these, so the VDMCheck tool is being updated to separately validate (up to) three XML files per FMU.
* The LSP server is really pretty stable now for all dialects. I'm routinely using it, via the vscode IDE, to work with the FMI model. This is because (unlike Overture) it will process the @OnFail annotations, so it's easier to test.
* I now own a copy of "Concrete Semantics" :-) I've read some of it too, with an eye to helping with Leo's work. I'm in touch with Jamie, who did the Isabelle translation.
* I'm talking to Claudio about the possibility of helping out with a new FMI mathematical model.
* A couple of bug fixes made to Overture/VDMJ due to Leo's work.

## Sub-projects status


#### INTO-CPS Application

* Testing: Last week I was able to run the new spectron test on my machine, 
  which means the tests are more robust. More work is being done to make the 
  tests ready to check the CI pipeline. Me and Armine are working on developing
  further tests.  We started Tutorial 3 last Friday to add to the covered
  tests: 1,2,7,3.

* Development: Traceability dead code was removed from the INTO-CPS App and it is in 
  testing. We are refactoring the code, to separate Electron related features
  from Angular features.
    
* New member: Mustafa has been welcomed to our team to fill in some gaps. He 
  will be running tests and managing external tools. We are in the process of
  (re-)/creating two procedures on how to test and how to update the INTO-CPS 
  External Tools

  
#### Improve the DSE  

I am preparing a maintenance plan to the DSE feature. I gathered a preliminary
list of the tasks that need to be done. I foresee at least three people
focusing on different parts: Python development, Angular Development, and 
Educational/Training Material development. I am open to suggestions on who will
be in charge of which of the following tasks.

	* Python Scripts:
		* Remove dead code
		* Remove unimplemented features
		* Make sure the scripts file names case match the app
    		* Upgrade to Python 3
		 
	* INTO-CPS App
		* Correct issue #87

	* Tutorial text 
		* Reshape the long paragraphs
		* Test the new steps


#### Sub-project Z

##  Any Other Business

Next Meeting
------------

20 May 2020, 1030 CET


<div id="edit_page_div"></div>
