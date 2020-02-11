---
layout: default
title: Biweekly 11
date: 12 February 2020, 1030 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# NetMeeting Default Template

|||
|---|---|
| Date | 12 February 2020, 10:30 CEST |
| Participants | AA, BB, ..., CC.  Minutes by DD. |


## Pre-meeting stakeholder's reports

<!-- Please keep in mind that the minutes are publicly available, and that
private information must be stored elsewhere.  -->

#### Stakeholder 1
* Discussion Point 1
* Discussion Point 2

#### Nick
* Working on FMI3 dynamic semantics mainly.
* Corrected mistake regarding variable index/references in FMI2 API. To avoid this kind of problem in FMI3, we need to check the dynamic semantic model using "external" callers (ie. verify that the formal modelled semantics is consistent with external parties' understanding and FMU implementation).
* Several FMI3 issues raised via the fmi-standard repository, and pull requests created to propose updates to the standard.
* The FMI3 static semantics/checker is stable, but probably subject to more change as the standard evolves.
* The FMI3 dynamic semantics is only just started. I want to get the fundamentals right here before adding the bulk of the APIs (many of which can be lifted from the FMI2 API work).
* Started talking to HDM about how to implement LSP/DAP against VDMJ.
* Quite a few Overture bugs fixed, so we've scheduled a new bugfix release for that in the near future.

#### HDM
* Has been working on the Arhus Vand case. Produced a presentation title for a meeting with WATEC next 13 of March. Produced a small project description for a co-simulation model of chemical wastewater treatment abstraction with the help of Michael Sandberg. I am also gathering the list of interested in this case. So just send me an email if you did not mention it before...
* More to report on the Sub-projects sections...

## Sub-projects status


#### INTO-CPS cloud app (HDM)
  * We hired a student worker and I helped him set up the INTO-CPS desktop app development environment. Last week we were surprised to find out that the gulp build was broken.  We had to update the gulp version to 4.0 as the previously used version was incompatible with the newer version of node (e.g.10 or 11). The student is now finishing a dependency checker for Java, which will warn users who click Simulate but do not have java installed. We expect this feature to be useful if the cloud app turns into a PWA. And in case there is no connection to a remote COE, we would/look for a local one and use a similar approach.

  * Last week we also found out that our own jenkins build server CI action is only triggered by a push to master. To allow us to discover problems in advance, I added a gitlab (Glad that CML and I talked about it earlier in the week so this feature was in the back of my mind) action to build the tool when we push to development. To make the build useful, I added [spectron](https://www.electronjs.org/spectron) to the project and use Mocha to test if the build launches the app with the default initial window. 

  * We have a new (Angular) student coming in and I expect her to start moving with the angular code in the cloud app.


#### Maestro V2 DT enabled (CT)
* RabbitMQ FMU has been released for cross-platform
* MaestroV2 is well on its way, still prototyping
* Simon will assist with developing a plugin for calculating dependencies.

#### Checker of FMUS (NB)
The static checkers for FMI2 and FMI3 have not changed a great deal over Xmas, just a few minor changes as a result of discussions of the fmi-standard. The main work is now focussed on dynamic semantics (see above).

#### Tolerance Language (JW) 


#### Graphical configuration inside App (CL)

#### Sub-project X

Next Meeting
------------

26 February 2020, 1030 CET


<div id="edit_page_div"></div>
