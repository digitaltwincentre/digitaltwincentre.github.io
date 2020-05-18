---
layout: default
title: Biweekly 18
date: 20 May 2020, 1030 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 20 May 2020, 10:30 CEST |


## Pre-meeting stakeholder's reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Nick
* VDMCheck3 now checks up to three separate XML files from within an FMU, to account for the new FMI3 structures. Individual XML files of any type can also be checked.
* I'm working on the FMI3 VDM model using VS Code and the LSP server. This helps to flush out LSP problems as well as highlighting which features are useful to add to the server. Basic commands now added to the execution interface, which makes it more like Overture/VDMJ's command line (so you can `print expression` and `set annotations off` etc). Problem with IO VDM library fixed, so specs with `IO'println` and friends will send output to the VS Code console correctly.
* Widening the group of people who are willing to try out the LSP server. Paul Chisholm is now using it as well as Leo.
* The FMI3_API VDM model itself is progressing, though there is still a dizzying amount of change coming into the spec from the Community. The initialization of the four possible calls to `fmi3InstantiateXXX` are now complete, though testing continues.
* Some bug fixes to Overture that came in via Leo and PJ. Helping Hugo with the test of the latest RC.

#### Casper
* Worked on Maestrov2. Has initialization plugin, fixed step plugin and csv plugin. Supports existing multimodel format.
* MaestroV2 also gives some insights on the into-cps app. Expect to set up a meeting with Hugo about maestrov2 and into-cps app.

#### Stakeholder 3
* Discussion Point 1
* Discussion Point 2


## Sub-projects status


#### Sub-project Desktop Robotti
* Students are starting to work on it - awesome!
* Still awaiting Chrono Input from Frederik.

#### Sub-project Y

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

03 June 2020, 1030 CET


<div id="edit_page_div"></div>
