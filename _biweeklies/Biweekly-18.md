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

## Sub-projects status


#### Sub-project Desktop Robotti
* Students are starting to work on it - awesome!
* Still awaiting Chrono Input from Frederik.

#### Tolerance language
* Completred a new draft of the ISoLA paper. Discussed the contents with Peter and formed a plan to complete the missing sections (Introduction and Conclusions).

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

03 June 2020, 1030 CET


<div id="edit_page_div"></div>
