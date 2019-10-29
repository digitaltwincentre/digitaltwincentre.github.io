---
layout: default
title: Biweekly 7
date: 30 October 2019, 1030 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# NetMeeting Default Template

|||
|---|---|
| Date | 30 October 2019, 10:30 CEST |
| Participants | AA, BB, ..., CC.  Minutes by DD. |


## Pre-meeting stakeholder's reports

<!-- Please keep in mind that the minutes are publicly available, and that
private information must be stored elsewhere.  -->

#### HDM
* Have been working on the cloud version of the aplication. The details about it are on the respective item of the new sub-project status reports at the bottom of the page. 
* Working on a new project proposal where Digital Twins and Model-Based Design are used in the development of Human-machine systems.

#### Nick
* Continuing refinement of the FMI2 static model and discussion with FMI Standard folk on their issue tracker. Small updates to the VDM model as a result (and new builds of the VDMCheck tool released).
* Created a combinatorial test for the dynamic semantic model in order to exercise the API (and therefore test the model constraints). Several enhancements and corrections made to the dynamic model as a result. This currently only covers the CoSimulation API; ModelExchange will follow.


#### Casper
* Initial fmi utilities online
* Busy with ESA stuff

#### Stakeholder 3
* Discussion Point 1
* Discussion Point 2

#### Claudio
* Holidays


## Sub-projects status

From this meeting on we will add to the status meetings a tracker 
for projects status and expected milestones. In the following we 
add a draft of what we expect, please adapt/add/change. 

#### Into-cps cloud app (HDM)
* Failling frontend tests were corrected and are all OK
* Improved user error notifications
* Increased the test suite
* Started working on backend 
* Preparing a 50 users max. version for tests in a couple of weeks

#### Maestro V2 DT enabled (CT)
* Not much progress as ESA is consuming our time.
* Expect to accelerate in November
* Will use the term virtual FMU as an FMU that is not really and FMU.
This opens up to all sorts of interesting activities, that does not necessarily have to be compiled into an FMU.

#### Checker of FMUS (NB)
Two small enhancement releases made to 0.0.2:
* Build 191016, downgrade new FMI 2.0.1 errors to be warnings
* Build 191021, corrected derivatives checks and detect multiple coSimulation/modelExchange in XML

#### Tolerance Language (JW)

#### Graphical configuration inside App (CL)



Next Meeting
------------

13 November 2019, 1030 CET


<div id="edit_page_div"></div>
