---
layout: default
title: Biweekly 10
date: 13 December 2019, 1030 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# NetMeeting Default Template

|||
|---|---|
| Date | 13 December 2019, 10:30 CEST |
| Participants | AA, BB, ..., CC.  Minutes by DD. |


## Pre-meeting stakeholder's reports

<!-- Please keep in mind that the minutes are publicly available, and that
private information must be stored elsewhere.  -->

#### Peter Gorm Larsen
* Public part of the program for the 27 - 29 event will soon be put online (external participants can then register)
* The internal part includes visit to Aarhus Vand but otherwise will be kept loose to optimise progress in 3 complementary areas
* Fighting for the different PhD/post-doc projects inside the new MADE project have started
* The ITEA application has gone to the next stage so we will meet with Benedict right after the HUBCAP kick-off

#### Stakeholder 2
* Discussion Point 1
* Discussion Point 2 

#### Stakeholder 3
* Discussion Point 1
* Discussion Point 2

#### HDM
* Continued working on the INTO-CPS application
* Expects to visit Xcelgo with Carlos...

## Sub-projects status


#### Into-cps cloud app (HDM)
  * Submitted an extended version of the Overture workshop paper to the FM'Workshop prooceedings.
  * Performed a comparison between the Desktop and the Cloud app deployed memory sizes, and is looking on how to optimize the app delpoyment.
  * Researching whether [Progressive Web Apps](https://en.wikipedia.org/wiki/Progressive_web_application) functionality is enough to serve the cloud application as a Desktop version. 

#### Maestro V2 DT enabled (CT)

#### Checker of FMUS (NB)

#### Tolerance Language (JW) 

I've carried out some simple case studies to see how to make progress with the language. My small insight is that the language will be used to check execution sequences just like in runtime verification (RV). This means that a semantics based on temporal logic would be appropriate. This is because RV is a simplified form of model checking, where only a single trace is being checked, rather than the set of all behaviours. Although the trace can be infinite in model checking, the trace must be finite in RV. I need some simple but typical examples to find how expressive the language needs to be. I think that it needs to be probabilistic. I suspect that PLTL is not expressive enough, although we can generate RV monitors for LTL automatically. The workflow that I envisage is to specify properties in the tolerance language, generate an RV monitor for the property, and then check the physical asset and its digital twin simultaneously. You can add more properties in parallel, as checking will be compositional.

#### Graphical configuration inside App (CL)


Next Meeting
------------

TBA


<div id="edit_page_div"></div>
