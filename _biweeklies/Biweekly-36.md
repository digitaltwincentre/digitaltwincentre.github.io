---
layout: default
title: Biweekly 36
date: 24 March 2021, 1030 CET
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 24 March 2021, 10:30 CET |


## Pre-meeting stakeholders' reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Peter Gorm Larsen
* Met with Poul Toft 22nd of March to agree upon presentation for steering committee meeting in April
* Meet on EU digital twins for cities on the 23rd of March and discuss collaboration possibilities on the 29th of March
* Supervise grand solution application to be submitted on the 8th of April to Innovation Foundation Denmark including DTs
* Initial planning of UniFMU paper + progress on a few other papers

#### Nick Battle
* Talk to Hugo about way forward with VSCode implementation of Overture features.
* Progress the XSD to VDM schema converter. Tool is now capable of converting both FMI2 (1000 lines) and FMI3 (1300 lines) XSD schemas, and the much larger ARTS schema (13,000 lines). This is half of the job. The other half is reading an XML document that conforms to the XSD schema and converting that to a value in the VDM schema (ie. reading and converting an FMU modelDescription.xml, so that it can be processed by VDMCheck).
* Small bugfixes for VSCode
* Conversations with Leo about the best approach to some proof related tooling.

#### Jim Woodcock
* I'm continuing work on my lectures on an introduction to probabilistic robot control.
* I'm making progress on the work on FMI step negotiation using angelic nondeterminism with Simon, Cláudio, and Jaco.
* I discussed verification of multi-agent systems with Lukas.

#### Mirgita Frasheri
* Setup a plan for the Fault Injection plugin development. Discussed with Casper, Hugo, and Kenneth.
* Work on the rabbitmq FMU with Henrik, also discussed wrt paper with Lukas and Casper.
* Discussed and planned experiments for the Desktop Robotti, together with Casper and Hugo.
* Helped Emil with the mir robot ROS interface.

#### Daniella Tola
* Managed to finally create a urdf of a UR5e robot arm with 3d meshes. The urdf file can be imported into different 3d simulation programs, i.e. unity, gazebo etc.

#### Frederik Madsen
* Working on stabilisation, variable step and discard logic for jacobian-step builder.
* Implementing functionality in the maestro web-api to use the jacobian-step builder.

#### Hugo Daniel Macedo
* Developing a migration plan for remaining Overture features 
* Collaborating in several papers and projects within the group
* Collaborating with Kuono on a paper on a DT for Extraneous Water
* Organizing the Overture Workshop 

## Sub-projects status


#### Sub-project X

#### Sub-project Y

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

8 April 2021, 12:30 CET


<div id="edit_page_div"></div>
