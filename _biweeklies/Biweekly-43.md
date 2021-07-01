---
layout: default
title: Biweekly 43
date: 1 July 2021, 1230 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 1 July 2021, 12:30 CEST |


## Pre-meeting stakeholders' reports

<!-- Please keep in mind that the minutes are publicly available.-->


#### Peter Gorm Larsen
* Since I will be the Danish cluster 4 support for the ministry I expect to spot more opportunities about digital twins earlier than normal

#### Nick Battle
* Created an error renumbering script for the FMI models (to avoid accidental duplication of error numbers)
* Added specialized @OnFail annotation handling for the Maestro FMI static checker (awaiting test in Maestro itself)
* Some more updates to the LSP HLD
* Added @VDMFunction and @VDMOperation Java annotations for VDMJ native libs, to protect against "operations" being used in functions.
* Attended Overture Core and Language Board meetings
* Discuss the detail of an LB issue with Hugo, regarding the semantics of def statements/expressions
* Will attend "Live from Behind the Walls" Team meeting.

#### Claudio Gomes
* won't be present at the meeting
* Working on the maestro V2 hybrid testing setup

#### Hao Feng
* discussed with Claudio and Casper about the process model paper.
* uploaded the video for ANNSIM
* making the slides for ANNSIM tutorial track.

#### Casper THule
* Fault injection (FI) paper
* RabbitMQ practitioners paper
* Maestro2 paper (expected submission August 31)
* Various maestro2 fixes because of papers
* Released bugfix-Maestro 2.1.5 because of FI.
* C++ code-gen ready for performance testing (kenneth will continue once back from vacation)
* Scenario Verifier for FM tutorial stuff
* ESA-GSTP proposal. Demoing maestro2 next week.
* Still struggling with IT regarding raspberry pi. Considering buying a wifi router and just connecting that, if it will be allowed on SEMI-TRUST.
* Adressing comments in IFD review
* NICK: Is there runtime semantics of FMI2? How can we use it? Think we have a good angle towards it via Maestro2
* Might be a bit late, Aske has to be picked up early because of first day in kindergarten!

#### Frederik Madsen
* Discussed FM presentation with Simon and Claudio.
* Maestro2: Documented the console printer.
* Maestro2: Fixed bug where JacobianStepBuilder reads config from string parameter.
* Maestro2: Consolidated DTO and other json data classes in core package.
* Maestro2: Created external tests for the scenario verifier implementation.
* Discussed fmi3 parser in Maestro2 with Casper and started to look into implementing it.

#### Emil Madsen
* Robot dynamics calibration tool (AURT):
  * Writing on the paper **AURT: A Tool for Dynamics Calibration of Robot Manipulators**.
* AU DTL-Skjern: Flex cell is not yet fully configured hardware wise and software wise.
  * Technicon forgot to send some cables for emergency stop. Those cables were sent Monday this week.
  * KUKA forgot to implement X11 (safety) interface. Technicon ordered this interface from KUKA.


## Sub-projects status


#### Sub-project X

#### Sub-project Y

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

TBA/August

<div id="edit_page_div"></div>
