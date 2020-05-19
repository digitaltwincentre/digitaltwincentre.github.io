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

#### Jim
* Made progress with three research proposal bids in the UK. All are on different aspects of Trustworthy Autonomous Systems: Verification, Security, and Resilience, respectively. Started work on joint research proposal on collaboration between Peter's group in Aarhus and mine in York.

#### Peter
* Had successful board meeting with the PDJ Foundation project board
* Coordinated on the Isola paper together with Jim
* Suggested Joint Webinar from HUBCAP, Centre for Digital Twins, INTO-CPS Association:
* 29th June from 10h00 to 12h00 CEST
* 10:00: The Future of MBD CPS Development by Peter Gorm Larsen
* 10:20: Demonstrating the the INTO-CPS Application inside the HUBCAP collaboration platform sandbox by Hugo Daniel Macedo
* 10:50: Demonstrating the RT-Tester functionality and its connection to INTO-CPS Application by Jörg Brauer
* 11:10: Demonstrating the FMU Static Checker by Nick Battle
* 11:20: Demonstrating the Python FMU capabilities by Christian Legaard
* 11:40: Presenting the RabbitFMU capability by Casper Thule
* 11:55: Closing remarks by Peter Gorm Larsen

#### Mustafa
* have completed test report of INTO-CPS app new version 4.0.0 using the first 9(nine) tutorials. Now, I have been working on 
writing testing procedures of INTO-CPS app.
* have been continuing to read all materials relating to Aarhus Vand Digital Twin Project.
* found that the download manager of the latest INTO-CPS App downloads a 20-sim version 4.8.1 that exports broken FMUs. We confirmed that the new 4.8.2 version was generating working FMUs. So, I will update the version of 20-sim in downloads.
* have a meeting with Claudio and Capser on the TLA+ state generation model for the RabbitMQ FMU.

#### Hugo Daniel Macedo
* There is interest in operating the cloud into-cps soon.
* I gave a talk to Grundfos and AU's WATEC center on the Aarhus Water case. Received positive feedback, added a couple of contacts to the followers/interested partners group. Some advances in building interdisciplinary teams to address the Data/Waste Water lines challenge mentioned at the Aarhus Vand presentation at the Internal Workshop 
* Reports on the developments in the Overture and INTO-CPS Application can be found below
* Working with Hao to improve the paper on Time Delay Systems and its readaptation of the Ether FMU from the INTO-CPS Examples.
* Suggested to join a INTO-CPS Application Developers Workshop (mainly AU Internal but open to interested parties from the morning seminar mentioned above) to PGL suggestion

29th June from 14h00 to 15h30 CEST

* 14:00: Opening by Hugo Daniel Macedo

* 14:10: The status of the Maestro V2 by Casper Thule

* 14:20: Modernizing the INTO-CPS Application by Kristoffer Villadsen

* 14:30: Testing the INTO-CPS App Tutorials using Spectron by Armine Sanjari

* 14:40: New Test and Upgrade Procedures by Mustafa Dinc

* 14:50: Q&A and Discussion on The Future of the INTO-CPS Application by Hugo Daniel Macedo 

Despite the "workshop" work in the title, it is conceived as a sequence of lightning talks with Q&A and ideas discussion at the end.

## Sub-projects status


#### Sub-project Desktop Robotti
* Students are starting to work on it - awesome!
* Still awaiting Chrono Input from Frederik.

#### Tolerance language
* Completred a new draft of the ISoLA paper. Discussed the contents with Peter and formed a plan to complete the missing sections (Introduction and Conclusions).

#### INTO-CPS Application
* INTO-CPS first usage on a Sandbox was made last week.
* Working on covering Tutorial 9 and 11 with the Spectron tests. The first dev cycle on testing is coming to an end. Right on time before student exam period.
* Traceability work was merged to the development branch. Kristoffer is taking the lead on issue 88 regarding the broken setting json file, which causes trouble with the app (blank electron screen)
* INTO-CPS first usage on a HUBCAP Sandbox was made last week.


#### Overture Tool
* Preparing the 3.0.0 release. A release candidate was distributed. Most features are OK, but no release is to be made soon due to some long-standing Overture issues. I will have a go on the issues ASAP.
* Added the possibility to declare two files with the same name given those are placed into different folders. 


##  Any Other Business

Next Meeting
------------

03 June 2020, 1030 CET


<div id="edit_page_div"></div>
