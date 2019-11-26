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

#### Stakeholder 3
* Discussion Point 1
* Discussion Point 2


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

#### Graphical configuration inside App (CL)


Next Meeting
------------

13 December 2019, 1030 CET


<div id="edit_page_div"></div>
