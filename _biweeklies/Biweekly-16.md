---
layout: default
title: Biweekly 16
date: 22 April 2020, 1030 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 22 April 2020, 10:30 CEST |


## Pre-meeting stakeholder's reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Peter Gorm Larsen
* Will meet with Poul Toft, PDF Foundation right after the biweekly meeting
* Started up a paper for Isola on the tolerance language as agreed last time

#### Nick Battle
* Went through Claudio's TLA+ model of FMI and read the first half of the Practical TLA+ book (personal copy arrived a couple of days ago). Will meet to discuss the way forward with model checking this afternoon (Monday).
* A lot of progress with Jonas and Frederik on the LSP server for VScode. The server itself is basically working well for VDM-SL, with just a few niggles. VDM++ multi-threaded debugging is more complex, as I imagined(!), but it also basically works. Unfortunately it's possible to lock up the debugger though, which I'm currently investigating. The extensions for basic language services are available, but not yet fully functional; there are no extensions yet for extra functionality, like PO generation and Combinatorial Testing. I'm not yet sure what VScode does with coverage. And we have to decide how to integrate the code generator from Overture (remember, LSP is currently based on VDMJ).

#### Claudio
* Work on fmi-standard doc (https://github.com/modelica/fmi-standard/pull/895)
* Prepare model checking video lecture.

#### Mustafa Dinç
* I am testing INTO-CPS App 4.0.0 with tutorials (0,1,2, and 3 completed so far)

#### Jim
* I've been working on the bibliography for the Tolerance Language technical report.

#### Stakeholder
* Discussion Point 1
* Discussion Point 2


## Sub-projects status


#### Tolerance Language

Prter, Cláudio, Hugo, and discussed the first draft of a technical report on the Tolerance Language. We agree on the following outstanding issues:
1. Add a section on methodology and tools.
3. Change all examples to relate to Aarhus digital twin examples, such as combine harvesters.
4. Add a glossary of terms.
6. Discuss how to modify runtime monitoring to take account of quantified satisfaction.
7. Change consistently from Leibniz’s notation to Newton's for differentiation.
8. Decide the following technical niggles:
  (a) Are traces are finite or infinite?
  (b) Do trace indexes start at 0 or 1?
  (c) Are the logics all classical? Except in runtime verification?
  (d) Check usage of open and closed intervals.
9. Add related work section and complete the bibliography.
10. Add conclusions and further work.

We also agreed to extract an ISoLA paper from the technical report. Peter set up an outline of the paper in the SVN.

#### Sub-project Y

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

06 May 2020, 1030 CET


<div id="edit_page_div"></div>
