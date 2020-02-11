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

#### Stakeholder 2
* Discussion Point 1
* Discussion Point 2

#### Stakeholder 3
* Discussion Point 1
* Discussion Point 2

## Sub-projects status


#### INTO-CPS cloud app (HDM)
  * We hired a student worker and I helped him set up the INTO-CPS desktop app development environment. Last week we were surprised to find out that the gulp build was broken.  We had to update the gulp version to 4.0 as the previously used version was incompatible with the newer version of node (e.g.10 or 11). The student is now finishing a dependency checker for Java, which will warn users who click Simulate but do not have java installed. We expect this feature to be useful if the cloud app turns into a PWA. And in case there is no connection to a remote COE, we would/look for a local one and use a similar approach.

  * Last week we also found out that our own jenkins build server CI action is only triggered by a push to master. To allow us to discover problems in advance, I added a gitlab (Glad that CML and I talked about it earlier in the week so this feature was in the back of my mind) action to build the tool when we push to development. To make the build useful, I added [spectron](https://www.electronjs.org/spectron) to the project and use Mocha to test if the build launches the app with the default initial window. 

  * We have a new (Angular) student coming in and I expect her to start moving with the angular code in the cloud app.


#### Maestro V2 DT enabled (CT)

#### Checker of FMUS (NB)


#### Tolerance Language (JW) 


#### Graphical configuration inside App (CL)


Next Meeting
------------

26 February 2020, 1030 CET


<div id="edit_page_div"></div>
