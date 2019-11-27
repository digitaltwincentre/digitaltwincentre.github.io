---
layout: default
title: Biweekly 9
date: 27 November 2019, 1030 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# NetMeeting Default Template

|||
|---|---|
| Date | 27 November 2019, 10:30 CEST |
| Participants | AA, BB, ..., CC.  Minutes by DD. |


## Pre-meeting stakeholder's reports

<!-- Please keep in mind that the minutes are publicly available, and that
private information must be stored elsewhere.  -->

#### Nick B
* Stopped work on the dynamic semantic model for FMI 2.0 and moved on to the static semantics of FMI 3.0.
* Initial FMI3 static model created, but XML-to-VDM parser incomplete.
* VDMCheck3.sh created.

#### Peter Gorm Larsen
* Initial planning of the face to face workshop to be held on the 27 -- 29 of January started up. This is checked into the DiT4CPS SVN. At the last afternoon the plan is to have a public event.
* I had a meeting with Xcelco Thursday who have a simulation capability for UR robots that we potentially can exploit for the manufacturing case. Carloas and Hugo will probably follow up here
* Stefan and I had a meeting with John Hatcliff Monday and there is a plan to arrange a 3 day event right before Easter discussing the use of Slang in relation to the co-simulation engine and verification of its properties. This will also be supported by a new PhD for Simon and a DK-US travel grant that Stefan has received.
* I have a physical MADE meeting where this weeks bi-weekly NM takes place so I will most likely not be able to take part in the meeting.

#### Claudio Gomes
* Currently at CMU writing an FMU exporter for the tool Keymaera X. The exporter can be used to export controller that have been proven correct, and to export monitor that ensure that co-simulation results are still within the assumptions used to prove the correctness of a coupled system.

#### Casper
* ESA task, API can be reused.
* Pull request for FMI standard. We have fork in into-cps association github. Use that for future pull requests to the standard.
* Discussion Point 2

#### Christian Legaard
* Working on R&D Project related to applying system identification techniques to create FMUs. Currently i am working on wrapping python code into a FMU and implementing automated process of loading data, estimating model and exporting FMU in Python.

#### Carlos
* Meeting with Xuping PhD students related to the configuration and control of the Enabled Robot arrengement(MiR with the UR5 on top)
* Assistant to students using the manufacture equipment for the Robotics class
* Continue with the VDM model for a case using the manufacture equipment

#### HDM
* Developing the cloud app.
* Will visit Xcelgo with Carlos before next meeting. 
* Met with Simon online about his project on Slang and INTO-CPS.
* Still waiting for co-sim ws publication instructions.


## Sub-projects status


#### Into-cps cloud app (HDM)
* Corrected the bugs found on backend COE's assignment.
* Launched a 5 COE version and performed first multi-user tests.
* Extended Overture workshop paper about it was sent for reviews.

#### Maestro V2 DT enabled (CT)

#### Checker of FMUs (NB)
* VDMCheck renamed VDMCheck2 and created VDMCheck3 to work with the FMI3 model.
* Early draft of tool available, but there are very few FMI3 FMUs to check.
* The XSD schema has been changing wildly, so many example FMUs are non-compliant.
* FMI3 static semantics is even less clear than FMI2 because of lack of documentation, so will seek to clarify with community.

#### Tolerance Language (JW)
* Continuing studying work suggested by Marcel V. Continuing writing paper on particle filter algorithms.

#### Graphical configuration inside App (CL)


Next Meeting
------------

13 December 2019, 1030 CET


<div id="edit_page_div"></div>
